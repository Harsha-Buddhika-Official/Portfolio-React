import Template from '../../components/Project_block/template';
import project1Image from '../page3/images/600x300.png';
import './Projects.css';

function Projects() {
  const projects = [
    {
      name: "Portfolio - React",
      image: project1Image, 
      description: "A responsive and modern portfolio website built using React. It highlights my skills, showcases selected projects, and includes smooth navigation and a clean UI to create a professional online presence.",
      technologies: ["React", "CSS", "JavaScript"], 
      github: "https://github.com/Harsha-Buddhika-Official/Portfolio-React",
    },
    {
      name: "ToDoApp - React",
      image: project1Image, 
      description: "A simple and interactive to-do list application built with React. It allows users to add, delete, and mark tasks as completed, with real-time updates using React state management and a clean user interface.",
      technologies: ["React", "CSS", "JavaScript"], 
      github: "https://github.com/Harsha-Buddhika-Official/ToDoApp-React",
    },
    {
      name: "Portfolio",
      image: project1Image, 
      description: "A responsive and visually appealing portfolio website built using HTML, CSS, and JavaScript. It features smooth scrolling, interactive elements, and showcases my skills, projects, and contact information.",
      technologies: ["Html", "CSS", "JavaScript"], 
      github: "https://github.com/Harsha-Buddhika-Official/Portfolio",
    },
    {
      name: "To-Do-List",
      image: project1Image, 
      description: " A simple and functional task manager built with HTML, CSS, and JavaScript. It lets users add, delete, and mark tasks as completed with dynamic DOM manipulation and a clean user interface.",
      technologies: ["Html", "CSS", "JavaScript"], 
      github: "https://github.com/Harsha-Buddhika-Official/To-Do-List",
    }
    
  ];

  return (
    <>
      <h1 className='project-tital'>Projects</h1>
      <div className="projects-container">
        {projects.map((project, index) => (
          <Template
            key={index}
            name={project.name}
            image={project.image}
            description={project.description}
            technologies={project.technologies}
            github={project.github}
          />
        ))}
      </div>
    </>
  );
}

export default Projects;