// GetQs.jsx
import React, { useEffect } from 'react';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { useDispatch, useSelector } from 'react-redux';
import { load, erase } from '../../appSlice';
import { useParams } from 'react-router-dom'; // Import useParams
import { firestore } from '../../firebase';

const selectQuestions = (state) => state.questions;

function GetQs() {
  const dispatch = useDispatch();
  const { poolName } = useParams(); // Access the poolName from the URL

  const fetchData = async () => {
    try {
      const data = await getDocs(collection(firestore, poolName));
      const questions = [];
      data.forEach((doc) => {
        const question = {
          status: 'UNCHANGED',
          id: doc.id,
          questNum: questions.indexOf(doc.data()) + 1,
          question: doc.data().question,
          opt1: doc.data().opt1,
          opt2: doc.data().opt2,
          opt3: doc.data().opt3,
          opt4: doc.data().opt4,
        };
        questions.push(question);
      });

      questions.sort((a, b) => a.questNum - b.questNum);
      dispatch(load(questions));
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [firestore, poolName, dispatch]);

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(firestore, poolName, id));
      dispatch(erase(id));
      fetchData(); // Refetch the data after deletion
    } catch (error) {
      console.error('Error deleting document: ', error);
    }
  };

  const questions = useSelector(selectQuestions);

  return (
    <div>
      <h2>{poolName} Pool</h2>
      <table border="1" cellPadding={5}>
        <tbody>
          <tr>{/* Your table headers */}</tr>
          {questions.map((question, index) => (
            <tr key={question.id}>
              {/* Display question information */}
              <td>{index + 1}</td>
              <td>{question.question}</td>
              <td>{question.opt1}</td>
              <td>{question.opt2}</td>
              <td>{question.opt3}</td>
              <td>{question.opt4}</td>
              <td>
                <button style={{ backgroundColor: 'red' }} onClick={() => handleDelete(question.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default GetQs;
