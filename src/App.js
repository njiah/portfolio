import React from 'react';
import './App.css';
import Image from './img/profile.png';
import VeritcalNav from './components/Navbar.js';
import Skills from './components/Skills.js';
import Experience from './components/Experience.js';
import Projects from './components/Projects.js';
import Education from './components/Education.js';
import aboutRef from './components/Navbar.js';

function App() {
  return (
    <div class="App">
      <section>
        <header className="App-header" id="about" ref={{aboutRef}}>
        <div className="Row">
          <img className="Image" src={Image} alt="logo" />
            <div className="About">
              <h1>Hi! I'm Ngwe Sandar Linn.<br></br>My friends call me
              <span class="Name"> Jiah</span>.
              </h1>
              <p>I'm a software engineer with a passion for Machine Learning! Currently working on a manufacturing app for Starling Cycles.</p>
          </div>
        </div>
        
        
        
        <VeritcalNav />
        
      </header>
      </section>
      
      <section>
        <Projects />
      </section>

      <section>
        <Education />
      </section>

      <section>
        <Experience />
      </section>

      <section>
        <div className="App-header">
          <Skills/>
        </div>
      </section>
    </div>
  );
}

export default App;
