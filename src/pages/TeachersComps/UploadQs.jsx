import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import { collection, addDoc, getDocs, query, where } from 'firebase/firestore';
import { firestore } from '../../firebase';

function ExcelUploadDownload() {
  const [file, setFile] = useState(null);

  const handleDownload = () => {
    const data = [
      ['question', 'opt1', 'opt2', 'opt3', 'opt4'],
      // Additional pre-made rows if needed
    ];

    // Add 100 rows with borders
    for (let i = 1; i <= 100; i++) {
      data.push(['', '', '', '', '']);
    }

    const ws = XLSX.utils.aoa_to_sheet(data);

    // Apply borders to all cells in the sheet
    Object.keys(ws).forEach((cell) => {
      if (cell !== '!ref' && cell !== '!margins') {
        ws[cell].s = { border: { right: { style: 'thin', color: { rgb: '000000' } } } };
      }
    });

    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, 'premade_questions.xlsx');
  };

  const handleUpload = async () => {
    try {
      if (!file) {
        console.error('Please select a file.');
        return;
      }

      const reader = new FileReader();
      reader.onload = async (e) => {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];

        const excelData = XLSX.utils.sheet_to_json(worksheet);

        // Get the uploaded file name without extension
        const fileNameWithoutExtension = file.name.replace(/\.[^/.]+$/, '');

        // Check if a collection with the same name already exists
        const collectionQuery = query(
          collection(firestore, 'YourCollections'), // Change 'YourCollections' to your actual collections
          where('name', '==', fileNameWithoutExtension)
        );

        const existingCollections = await getDocs(collectionQuery);

        if (existingCollections.docs.length > 0) {
          console.error('Collection with the same name already exists.');
          // Show an error message to the user
          return;
        }

        // Create a new collection and add data from the Excel file
        const newCollectionRef = collection(firestore, fileNameWithoutExtension);
        excelData.forEach(async (rowData) => {
          await addDoc(newCollectionRef, rowData);
        });

        console.log('Data uploaded successfully.');
      };

      reader.readAsArrayBuffer(file);
    } catch (error) {
      console.error('Error uploading Excel file:', error);
    }
  };

  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    setFile(uploadedFile);
  };

  return (
    <div>
      <h3>Excel Upload/Download</h3>
      <div>
        <button onClick={handleDownload}>Download Excel File</button>
      </div>
      <div>
        <input type="file" accept=".xls, .xlsx" onChange={handleFileChange} />
        <button onClick={handleUpload}>Upload Excel File</button>
      </div>
    </div>
  );
}

export default ExcelUploadDownload;
