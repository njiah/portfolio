//import { type } from "@testing-library/user-event/dist/type";
import { useState } from "react";
import BB8 from '../img/BB8.JPG';
import Rover from '../img/rover.jpeg';
import deepfake from '../img/deepfake.png';
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
function Projects() {
    const projects = [
        {
            title: "Deepfake Detector",
            subtitle: "Python, Flask, OpenCV, Pytorch, Tensorflow",
            description: "Full stack web app with Flask which detects deepfakes using a CNN model trained on DFDC dataset.",
            image: deepfake,
            link: "https://github.com/njiah/deepfake_detector",
            type: "Academic"
        },
        {
            title: "DoodleCode",
            subtitle: "Python, Django, YOLO, Multi-agent algorithm, Kaggle",
            description: "Containerized web app with Django detecting wireframe sketches using YOLO models, and generates code with multi-agent algorithm.",
            image: "https://via.placeholder.com/150",
            link: "",
            type: "Academic"
        },
        {
            title: "Little Lemon Restaurant",
            subtitle: "Python, Django",
            description: "Full stack booking system with Django.",
            link: "https://github.com/njiah/littleLemon",
            type: "Personal"
        },
        {
            title: "Manufacture Streamlining App",
            subtitle: "Flutter",
            description: "Mobile app for Starling Cycles to streamline manufacturing process.",
            link: "https://github.com/njiah/starlingcycles",
            type: "Work"
        },
        {
            title: "Brizzy Hotel",
            subtitle: "Python, Flask",
            description: "Full stack hotel booking web application with Flask.",
            link: "",
            type: "Academic"
        },
        {
            title: "UWEFlix",
            subtitle: "Python, Tkinter",
            description: "Tkinter project for movie booking.",
            link: "",
            type: "Academic"
        },
        {
            title: "BB8",
            subtitle: "Arduino, 3D Printing",
            description: "Star Wars character inspired robot with 3D printed head and remote controlled body with Arduino.",
            image: BB8,
            link: "https://www.linkedin.com/in/ngwe-sandar-linn-63990a1ba/details/projects/",
            type: "Personal"
        },
        {
            title: "Disinfection Rover",
            subtitle: "C++, Arduino",
            description: "Remote controlled rover written in C++ for disinfecting surfaces donated to the quarantine hospital in Yangon.",
            image: Rover,
            link: "https://www.linkedin.com/in/ngwe-sandar-linn-63990a1ba/details/projects/",
            type: "Personal"
        },
        {
            title: "PintOs",
            subtitle: "C, Unix",
            description: "Operating system project implementing system calls, and exploitation.",
            link: "",
        },
        {
            title: "Chatbot",
            subtitle: "Python",
            description: "Simple Chatbot with NLP.",
            link: "",
        },
        {
            title: "Beach Cleaning Environment",
            subtitle: "Python, Mesa Library",
            description: "Agent-based model for beach cleaning.",
            link: "",
        }
    ];
    const [selectedProjects, setSelectedProjects] = useState('All');

    const handleChange = (e) => {
        setSelectedProjects(e.target.value);
    }

    const filteredProjects = projects.filter((project) => {
        if (selectedProjects === 'All') {
            return project;
        } else {
            return project.type === selectedProjects;
        }
    });
    
    const [showMore, setshowMore] = useState(false);   

    const containerRef = useRef(null);
    const scrollRight = () => {
        const columnWidth = 300;
        containerRef.current.scrollBy(
            {
                left: columnWidth,
                behavior: 'smooth'
            }
        )
    }
    const scrollLeft = () => {
        const columnWidth = 300;
        containerRef.current.scrollBy(
            {
                left: -columnWidth,
                behavior: 'smooth'
            }
        )
    }

  return (
    <div className="white" id="projects">
        <h1>Projects</h1>
        <div className='filter'>
            <label>Filter by:</label>
            <select value={selectedProjects} onChange={handleChange}>
                <option value="All">All</option>
                <option value="Academic">Academic</option>
                <option value="Personal">Personal</option>
                <option value="Work">Work</option>
            </select>
        </div>
        <div className="Scroll" ref={containerRef} id="projects">
            {filteredProjects.map((project) => (
                <a href={project.link} className="card">
                    <h4>{project.title}</h4>
                    <p>{project.subtitle}
                        <span className="more">{project.description}</span>
                    </p>
                </a>
            ))}
        </div>
        <div className="scrollButtons">
            <button onClick={scrollLeft}><FontAwesomeIcon icon={faArrowLeft} size="20"/></button>
            <button onClick={scrollRight}><FontAwesomeIcon icon={faArrowRight}/></button>
        </div>
    </div>
    )
}

export default Projects;