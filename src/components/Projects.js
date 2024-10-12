//import { type } from "@testing-library/user-event/dist/type";
import { useState } from "react";
import BB8 from '../img/BB8.JPG';
import Rover from '../img/rover.jpeg';
import deepfake from '../img/deepfake.png';
function Projects() {
    const projects = [
        {
            id: 1,
            title: "Deepfake Detector",
            description: "Dissertation project",
            image: deepfake,
            link: "https://github.com/njiah/deepfake_detector",
            type: "Academic"
        },
        {
            title: "DoodleCode",
            description: "Final year group project",
            image: "https://via.placeholder.com/150",
            link: "",
            type: "Academic"
        },
        {
            title: "Little Lemon Restaurant",
            description: "Booking website with Django",
            image: "https://via.placeholder.com/150",
            link: "",
            type: "Personal"
        },
        {
            title: "Manufacture Streamlining App",
            description: "Mobile app for Starling Cycles made with Flutter",
            image: "https://via.placeholder.com/150",
            link: "",
            type: "Work"
        },
        {
            title: "Brizzy Hotel",
            description: "First year individual project with Flask",
            image: "https://via.placeholder.com/150",
            link: "",
            type: "Academic"
        },
        {
            title: "UWE Flix",
            description: "Group project with Tkinter",
            image: "https://via.placeholder.com/150",
            link: "",
            type: "Academic"
        },
        {
            title: "BB8",
            description: "Made with Arduino",
            image: BB8,
            link: "https://www.linkedin.com/in/ngwe-sandar-linn-63990a1ba/details/projects/",
            type: "Personal"
        },
        {
            title: "Disinfection Rover",
            description: "Remote controlled and written in C++",
            image: Rover,
            link: "https://www.linkedin.com/in/ngwe-sandar-linn-63990a1ba/details/projects/",
            type: "Personal"
        },
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

  return (
    <div className="white">
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
        <div className="filter">
            {filteredProjects.map((project) => (
                <a href={project.link} key={project.id} className="card">
                    <img src={project.image} alt="Deepfake Detector" />
                    <h4>{project.title}</h4>
                    <p>{project.description}</p>
                </a>
            ))}
        </div>
    </div>
  );
}

export default Projects;