import Template from '../../components/Project_block/template';
import './Projects.css';
import project1Image from '../page3/600x300.png'; // Import the image directly

function Projects() {
  const projects = [
    {
      name: "Project 1",
      image: project1Image, 
      description: "This is the description for Project 1.hasduiopfheuha fush ehfiuhe afhiush difhaweh fhaisdhfihwea ifhishafeuihiahfihd",
      technologies: ["React", "CSS", "JavaScript"], 
      github: "https://github.com/Harsha-Buddhika-Official/Portfolio-React",
    }
  ];

  return (
    <div>
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
  );
}

export default Projects;