import React from 'react';
import ReactDOM from 'react-dom/client'

// Importing the App components
import App from './components/App';

// Getting the root div
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendering the App component into the root div
root.render(<App />)