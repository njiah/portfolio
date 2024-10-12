import React from 'react';
import './App.css';
import Image from './img/profile.png';
import VeritcalNav from './components/Navbar.js';
import Skills from './components/Skills.js';
import Experience from './components/Experience.js';
import Projects from './components/Projects.js';
import Education from './components/Education.js';

function App() {
  return (
    <div class="App">
      <section id="about">
        <header className="App-header">
        <div className="Row">
          <img className="Image" src={Image} alt="logo" />
            <div className="About">
              <h1>Hi! I'm Ngwe Sandar Linn.<br></br>My friends call me
              <span class="Name"> Jiah</span>.
              </h1>
              <p>I'm a software engineer with a passion for Machine Learning! Currently working on a manufacturing app for <a class="App-link" href="https://www.starlingcycles.com">Starling Cycles.</a></p>
          </div>
        </div>
        
        
        
        <VeritcalNav />
        
      </header>
      </section>
      
      <section id="projects">
        <Projects />
      </section>

      <section id="education">
        <Education />
      </section>

      <section id="experience">
        <Experience />
      </section>

      <section id="skills">
        <div className="App-header">
          <Skills/>
        </div>
      </section>
    </div>
  );
}

export default App;
