import React, {useEffect, useRef, useState} from 'react';
import { Link } from 'react-scroll';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';

const VeritcalNav = (props) => {
    gsap.registerPlugin(ScrollTrigger);
    const navbarRef = useRef(null);

    const [aboutcolorChange, aboutsetColorChange] = useState(false);
    const [projectscolorChange, projectssetColorChange] = useState(false);
    const [educationcolorChange, educationsetColorChange] = useState(false);
    const [experiencecolorChange, experiencesetColorChange] = useState(false);
    const [contactcolorChange, contactsetColorChange] = useState(false);

    useEffect(() => {

        const sections = document.querySelectorAll("section");
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    console.log(entry.target.id);
                    switch(entry.target.id) {
                    case "about": 
                        aboutsetColorChange(true);
                        projectssetColorChange(false);
                        educationsetColorChange(false);
                        experiencesetColorChange(false);
                        contactsetColorChange(false);
                        break;
                    case "projects": 
                        aboutsetColorChange(false);
                        projectssetColorChange(true);
                        educationsetColorChange(false);
                        experiencesetColorChange(false);
                        contactsetColorChange(false);
                        break;
                    case "education": 
                        aboutsetColorChange(false);
                        projectssetColorChange(false);
                        educationsetColorChange(true);
                        experiencesetColorChange(false);
                        contactsetColorChange(false);
                        break;
                    case "experience": 
                        aboutsetColorChange(false);
                        projectssetColorChange(false);
                        educationsetColorChange(false);
                        experiencesetColorChange(true);
                        contactsetColorChange(false);
                        break;
                    default: 
                        aboutsetColorChange(false);
                        projectssetColorChange(false);
                        educationsetColorChange(false);
                        experiencesetColorChange(false);
                        contactsetColorChange(true);
                        break;
                    }
                }
            }
        );
        }, {
            root: null,
            threshold: 0.2
        });
        sections.forEach((section) => {
            observer.observe(section);
        });
        return () => {
            sections.forEach((section) => {
                observer.unobserve(section);
            });
        };
    }, []);
        
    return (
        <div className="Navbar" ref={{navbarRef}} id="navbar">
            <Link to="about" smooth={true} className={aboutcolorChange? "navLinkFocus" : "navLink"}>About</Link>
            <Link to="projects" smooth={true} className={projectscolorChange? "navLinkFocus" :"navLink"}>Projects</Link>
            <Link to="education" smooth={true} className={educationcolorChange? "navLinkFocus" :"navLink"}>Education</Link>
            <Link to="experience" smooth={true} className={experiencecolorChange? "navLinkFocus" :"navLink"}>Experience</Link>
            <Link to="skills" smooth={true} className={contactcolorChange? "navLinkFocus" :"navLink"}>Skills</Link>
            
        </div>
    );
};

export default VeritcalNav;