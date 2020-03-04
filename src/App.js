import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import User from './components/User'


function App() {
  return (
    <div className="Container">
    <Navbar title="User App Title"/>
    <hr/>
    <User name="Murat Karakuş"
    salary="5000"
    department="IT"
    />

   </div>
  )}

export default App;
