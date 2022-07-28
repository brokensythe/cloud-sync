import './App.css';
// import { useEffect, useState } from 'react'
// import { getRequest } from './helpers'
// import { TEST } from './fetchURLS'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login';
import Signup from './pages/Signup';
import Navbar from './components/Navbar';
import Success from './pages/Success';

function App() {


  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/success" element={<Success/>}></Route>
      </Routes>
    </>
  );
}

export default App;
