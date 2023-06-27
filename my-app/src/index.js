import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Main from './Main.js';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route, HashRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<React.StrictMode>
  <HashRouter basename={windows.location.pathname || ''}>
<Router>
<Routes>
<Route path='/' element={<App />} />
<Route path='/more' element={<Main />} />
</Routes>
</Router>
</HashRouter>
</React.StrictMode>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
