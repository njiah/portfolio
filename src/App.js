import React from 'react';
import './App.css';
import Image from './img/profile.png';
import Python from './img/python.png';
import C from './img/C_Logo.png';
import VeritcalNav from './components/Navbar.js';
import About from './components/About.js';
import { PythonOriginal, COriginal, CplusplusOriginal, Html5Original, Css3Original, JavascriptOriginal, SqliteOriginal, GitOriginal, TensorflowOriginal, PytorchOriginal } from 'devicons-react';

function App() {
  return (
    <div class="App">
      <header className="App-header">
        <div className="Row">
          
          <img src={Image} className="Image" alt="logo" />
          <p class="About">Hi! I'm Ngwe Sandar Linn.<br></br>My friends call me
          <span class="Name"> Jiah</span>.
          </p>
        </div>
        
        
        <div className="Row">
          <div className="Logo"><PythonOriginal size={100}/></div>
          <div className='Logo'><COriginal size={100}/></div>
          <div className='Logo'><CplusplusOriginal size={100}/></div>
          <div className='Logo'><Html5Original size={100}/></div>
          <div className='Logo'><Css3Original size={100}/></div>
          <div className='Logo'><JavascriptOriginal size={100}/></div>
          <div className='Logo'><SqliteOriginal size={100}/></div>
          <div className='Logo'><GitOriginal size={100}/></div>
          <div className='Logo'><TensorflowOriginal size={100}/></div>
          <div className='Logo'><PytorchOriginal size={100}/></div>
        </div>
        <VeritcalNav />
        
      </header>
      <About />
    </div>
  );
}

export default App;
