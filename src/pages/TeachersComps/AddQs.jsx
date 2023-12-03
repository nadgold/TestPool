import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { useDispatch } from 'react-redux';
import { add } from '../../appSlice';
import { firestore } from '../../firebase';

function AddQs() {
  const dispatch = useDispatch();

  const [question, setQuestion] = useState('');
  const [opt1, setOpt1] = useState('');
  const [opt2, setOpt2] = useState('');
  const [opt3, setOpt3] = useState('');
  const [opt4, setOpt4] = useState('');

  const handleAddQuestion = async () => {
    try {
      // Add the question to the 'EnglishQs' collection in Firebase
      const docRef = await addDoc(collection(firestore, 'EnglishQs'), {
        question: question,
        opt1,
        opt2,
        opt3,
        opt4,
      });

      // Dispatch the add action to update the Redux store
      dispatch(
        add({
          status: 'NEW',
          id: docRef.id,
          question: question,
          opt1,
          opt2,
          opt3,
          opt4,
        })
      );

      // Log success message
      console.log('Question added to Firebase:', question);

      // Clear the form inputs
      setQuestion('');
      setOpt1('');
      setOpt2('');
      setOpt3('');
      setOpt4('');
    } catch (error) {
      // Log any errors
      console.error('Error adding question to Firebase:', error.message);
    }
  };

  return (
    <div className="add-qs-container">
      <h3>Add Question</h3>
      <form>
        <label>
          Question:
          <input type="text" value={question} onChange={(e) => setQuestion(e.target.value)} />
        </label>
        <br />
        <label>
          Option 1 (Correct Answer):
          <input type="text" value={opt1} onChange={(e) => setOpt1(e.target.value)} />
        </label>
        <br />
        <label>
          Option 2:
          <input type="text" value={opt2} onChange={(e) => setOpt2(e.target.value)} />
        </label>
        <br />
        <label>
          Option 3:
          <input type="text" value={opt3} onChange={(e) => setOpt3(e.target.value)} />
        </label>
        <br />
        <label>
          Option 4:
          <input type="text" value={opt4} onChange={(e) => setOpt4(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleAddQuestion} className="submit-button">
          Add Question
        </button>
      </form>
    </div>
  );
}

export default AddQs;

