import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home'
import About from './pages/about'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
  <Routes>
    <Route path='/' element={<App/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
  </Routes>
  </BrowserRouter>
  
  // <React.StrictMode>
    // <App />  
  // </React.StrictMode>
);

