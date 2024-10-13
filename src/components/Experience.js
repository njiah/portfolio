
function Experience() {
    const experience = [
        {
            title: "Software Developer Intern",
            company: "Starling Cycles",
            date: "Dec 2023 - Present",
            link: "https://www.starlingcycles.com",
            description: "Working on a manufacturing app for Starling Cycles."
        },
        {
            title: "Content Writer",
            company: "Memoirs of the Fallen",
            date: "Feb 2021 - Jun 2021",
            link: "https://www.facebook.com/memoirsofthefallen/",
            description: "Contributed to the creation of digital content in engaging formats, transformed the front-end of the website with WordPress."
        },
        {
            title: "Social Media Team Leader/ Researcher",
            company: "Laboratory of Robotics and Artificial Intelligence (LORA)",
            date: "Dec 2019 - May 2021",
            link: "https://www.facebook.com/loratech/about/?ref=page_internal&mt_nav=0&_rdr",
            description: "Handled social media accounts, conducted research on AI and Robotics."
        }
    ]
  return (
    <div className="white" id="experience">
      <h1>Experience</h1>
            {experience.map((exp) => (
            <div className="experience">
                <h3>{exp.title} | <a href={exp.link}>{exp.company}</a></h3>
                <p> {exp.date}</p>  
                <p>{exp.description}</p>
            </div>
            ))}
    </div>
  );
}

export default Experience;