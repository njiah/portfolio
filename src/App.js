import React from 'react';
import './App.css';
import Image from './img/profile.JPG';
import VeritcalNav from './components/Navbar.js';
import Skills from './components/Skills.js';
import Experience from './components/Experience.js';
import Projects from './components/Projects.js';
import Education from './components/Education.js';
import CV from '../src/NS_Linn.pdf'
import Footer from './components/footer.js';
import { ReactTyped } from 'react-typed';

function App() {
  return (
    <div class="App">
      <section id="about">
        <header className="App-header">
        <div className="Row">
          <img className="Image" src={Image} alt="logo" />
          <div className="About">
              <h1>Hi! I'm<br/>
              <span class="Name"> {" "}
              <ReactTyped
                  strings={["Ngwe Sandar Linn.", "Jiah."]}
                  typeSpeed={100}
                  loop
                  backSpeed={50}
                  cursorChar={"|"}
                  showCursor={true}
              />
              </span>
              
              </h1>
              <p>A graduate software engineer with a passion for Machine Learning! Currently working on a manufacturing app for <a class="App-link" href="https://www.starlingcycles.com">Starling Cycles.</a><br/>Feel free to contact me via LinkedIn or mail!</p>
            <div className="Contact">
                <a href="https://github.com/njiah"><h5>GitHub</h5></a>
                <a href="https://www.linkedin.com/in/ngwe-sandar-linn-63990a1ba/"><h5>LinkedIn</h5></a>
                <a href="mailto:nsdl1411@gmail.com"><h5>Contact</h5></a>
                <a href={CV} download="NS_LINN.pdf"><h5>CV</h5></a>
            </div>
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
      <Footer />
    </div>
  );
}

export default App;
