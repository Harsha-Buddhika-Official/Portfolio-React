import { useEffect } from 'react';
import Template from '../../components/Project_block/Template.jsx';
import img1 from './Images/portfolio-react.png';
import img2 from './Images/portfolio.png';
import img3 from './Images/todo-react.png';
import img4 from './Images/todo.png';
import './Projects.css';

function Projects() {
  const projects = [
    {
      name: "Portfolio",
      image: img2, 
      description: "A responsive and visually appealing portfolio website built using HTML, CSS, and JavaScript. It features smooth scrolling, interactive elements, and showcases my skills, projects, and contact information.",
      technologies: ["Html", "CSS", "JavaScript"], 
      github: "https://github.com/Harsha-Buddhika-Official/Portfolio",
    },
    {
      name: "ToDoApp - React",
      image: img3, 
      description: "A simple and interactive to-do list application built with React. It allows users to add, delete, and mark tasks as completed, with real-time updates using React state management and a clean user interface.",
      technologies: ["React", "CSS", "JavaScript"], 
      github: "https://github.com/Harsha-Buddhika-Official/ToDoApp-React",
    },
    {
      name: "To-Do-List",
      image: img4, 
      description: " A simple and functional task manager built with HTML, CSS, and JavaScript. It lets users add, delete, and mark tasks as completed with dynamic DOM manipulation and a clean user interface.",
      technologies: ["Html", "CSS", "JavaScript"], 
      github: "https://github.com/Harsha-Buddhika-Official/To-Do-List",
    },
    {
      name: "Portfolio - React",
      image: img1, 
      description: "A responsive and modern portfolio website built using React. It highlights my skills, showcases selected projects, and includes smooth navigation and a clean UI to create a professional online presence.",
      technologies: ["React", "CSS", "JavaScript"], 
      github: "https://github.com/Harsha-Buddhika-Official/Portfolio-React",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const projectElements = document.querySelectorAll('.project-template');
    projectElements.forEach((element) => observer.observe(element));

    return () => {
      projectElements.forEach((element) => observer.unobserve(element));
    };
  }, []);

  return (
    <>
      <h1 className='project-tital'>Projects</h1>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-template">
            <Template
              name={project.name}
              image={project.image}
              description={project.description}
              technologies={project.technologies}
              github={project.github}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default Projects;