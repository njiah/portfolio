import React, {useRef} from 'react';
import { Link } from 'react-scroll';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';

const VeritcalNav = (props) => {
    gsap.registerPlugin(ScrollTrigger);
    const navbarRef = useRef(null);

    const sections = gsap.utils.toArray("section");
    const navbar = document.getElementById("navbar");

    const navColors = ["white", "black", "black", "black", "white"];
    let sectionHeight

    sections.forEach(function(section, index){
        ScrollTrigger.create({
            trigger: section,
            start: "top bottom",
            end: "bottom bottom",
            markers: false,
            animation: gsap.to(navbar, {
                color: navColors[index], 
                immediateRender: false,
            }),
            toggleActions: "restart none none reverse",
            preventOverlaps: true,
        });
    });

    ScrollTrigger.addEventListener("refreshInit", () => {
        sectionHeight = sections.map(section => section.offsetHeight);
    }
    );
    
        
    return (
        <div className="Navbar" ref={{navbarRef}} id="navbar">
            <Link to="about" smooth={true}>About</Link>
            <Link to="projects">Projects</Link>
            <Link to="education">Education</Link>
            <Link to="experience">Experience</Link>
            <Link to="contact">Contact</Link>
            
        </div>
    );
};

export default VeritcalNav;