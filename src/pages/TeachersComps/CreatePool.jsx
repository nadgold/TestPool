import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { firestore } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import { topics, grades } from '../../assets/AppInfo';

function CreatePool() {
  const [poolName, setPoolName] = useState('');
  const [topic, setTopic] = useState(''); // Assume topic selection logic
  const [grade, setGrade] = useState(''); // Assume grade selection logic
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(firestore, poolName), {
        // Sample structure for a question        
        question: 'What is your question?',
        opt1: 'Option 1',
        opt2: 'Option 2',
        opt3: 'Option 3',
        opt4: 'Option 4',
      });

      

      //Navigating to the new pool's edit page
      navigate(`/teachers/${poolName}`);
    } catch (error) {
      console.error('Error creating collection: ', error);
    }
  };
  
  return (
    <div>
      <h1>Create a New Pool</h1>
      <form onSubmit={handleSubmit}>
        Name: <input
          type="text"
          value={poolName}
          onChange={(e) => setPoolName(e.target.value)}
          placeholder="cannot be changed later"
        />
        <br /><br />
        Topic: <select value={topic} onChange={(e) => setTopic(e.target.value)}>
                    <option value="">Select a topic</option>
                    {topics.map((option) => (
                        <option key={option} value={option}>
                        {option}
                        </option>
                    ))}
                </select>
        <br /><br />
        For: <select value={grade} onChange={(e) => setGrade(e.target.value)}>
                    <option value="">Select a grade</option>
                        {grades.map((option) => (
                        <option key={option} value={option}>
                     {option}
                    </option>
                    ))}
        </select>
        <br /><br />
        <button style={{ backgroundColor: 'green' }} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default CreatePool;

