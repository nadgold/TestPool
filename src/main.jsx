import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom'; // Import the Router
import { configureStore } from '@reduxjs/toolkit'; // Use Redux Toolkit
import { Provider } from 'react-redux';
import appReducer from './appSlice'; // Correct import path

const appStore = configureStore({
  reducer: appReducer, // Use the imported appSlice
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={appStore}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);

