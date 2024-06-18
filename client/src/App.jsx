import React from 'react';
import './App.css';

import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Cards from './pages/Card';



const App = () => {
  return (
   <>
 

    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/card' element={<Cards/>}></Route>
       
    
    </Routes>
    
   </>
  )
}

export default App;