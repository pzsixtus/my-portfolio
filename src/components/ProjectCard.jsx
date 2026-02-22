function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <h3>{project.title}</h3>

      <p>{project.description}</p>

      <span className="tech">{project.tech}</span>

      <div className="project-buttons">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="btn github-btn"
        >
          GitHub
        </a>

        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="btn demo-btn"
        >
          Live Demo
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
