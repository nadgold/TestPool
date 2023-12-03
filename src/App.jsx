import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import './index.css';
import ResponsiveAppBar from './AppBarComp';
import HomePage from './pages/HomePage';
import TeachersPage from './pages/TeachersPage';
import StudentsPage from './pages/StudentsPage';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import CreatePool from './pages/TeachersComps/CreatePool';
import GetQs from './pages/TeachersComps/getQs';

function App() {
  return (
    <>
      <div className="content-container">
        <ResponsiveAppBar />
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/teachers" element={<TeachersPage />} />
          <Route path="/students" element={<StudentsPage />} />
          <Route path="/teachers/createPool" element={<CreatePool />} />
          <Route path="/teachers/:poolName" element={<GetQs />} />
        </Routes>
      </div>
    </>
  );
}

export default App;



