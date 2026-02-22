import ProjectCard from "../components/ProjectCard";
import "../styles/Projects.css";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "A responsive personal portfolio built with React.",
      tech: "React, CSS",
      github: "https://github.com/pzsixtus/my-portfolio",
      demo: "https://my-portfolio.com",
    },
    {
      id: 2,
      title: "Authentication App",
      description: "Login and dashboard system using React Context.",
      tech: "React, Context API",
      github: "https://github.com/pzsixtus/auth-app",
      demo: "https://auth-demo.com",
    },
    {
      id: 3,
      title: "Node API Server",
      description: "Backend API built with Node.js and Express.",
      tech: "Node.js, Express",
      github: "https://github.com/pzsixtus/node-api",
      demo: "https://api-demo.com",
    },
  ];

  return (
    <div className="projects-container">
      <h2>My Projects</h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
