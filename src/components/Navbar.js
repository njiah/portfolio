import React from 'react';
import { Link, Element } from 'react-scroll';

const VeritcalNav = (props) => {
    return (
        <div className="Navbar">
            <Link to="about" smooth={true}>About</Link>
            <Link to="projects">Projects</Link>
            <Link to="education">Education</Link>
            <Link to="experience">Experience</Link>
            <Link to="contact">Contact</Link>
            
        </div>
    );
};

export default VeritcalNav;