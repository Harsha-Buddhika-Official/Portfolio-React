import Template from '../../components/Project_block/template';
import './Projects.css';
import project1Image from '../page3/600x300.png'; // Import the image directly

function Projects() {
  const projects = [
    {
      name: "Project 1",
      image: project1Image // Use the imported image
    }
  ];

  return (
    <div>
      {projects.map((project, index) => (
        <Template
          key={index}
          name={project.name}
          image={project.image}
        />
      ))}
    </div>
  );
}

export default Projects;