function Projects() {
  const projects = [
    {
      title: "Weather App",
      description: "Live weather app using Open Meteo API with dynamic city search.",
      tech: "HTML, CSS, JavaScript",
      link: "https://github.com/furqankhalid-git"
    },
    {
      title: "To-Do List",
      description: "Task manager with add and delete functionality.",
      tech: "HTML, CSS, JavaScript",
      link: "https://github.com/furqankhalid-git"
    },
    {
      title: "Quiz App",
      description: "Interactive quiz with score tracking and dynamic questions.",
      tech: "HTML, CSS, JavaScript",
      link: "https://github.com/furqankhalid-git"
    },
    {
      title: "Notes App",
      description: "Notes manager built in React with add and delete features.",
      tech: "React, CSS",
      link: "https://github.com/furqankhalid-git"
    },
  ];

  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <span className="tech">{project.tech}</span>
            <a href={project.link} target="_blank" className="project-link">View on GitHub</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;