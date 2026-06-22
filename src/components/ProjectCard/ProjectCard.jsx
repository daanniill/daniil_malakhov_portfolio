import "./ProjectCard.css"

function ProjectCard({ title, description, tags, githubLink, liveLink }) {
  return (
    <div className="project-card">
      <h3 className="project-title">{title}</h3>
      <p className="project-description">{description}</p>
      <div className="project-tags">
        {tags.map((tag, index) => (
          <span key={index} className="project-tag">
            {tag}
          </span>
        ))}
      </div>
      <div className="project-links">
        {githubLink && (
          <a
            href={githubLink}
            className="project-link"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        )}
        {liveLink && (
          <a
            href={liveLink}
            className="project-link"
            target="_blank"
            rel="noreferrer"
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard