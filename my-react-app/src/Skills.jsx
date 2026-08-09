function Skills() {
  const skills = [
    { name: "HTML", description: "Structure and semantic markup" },
    { name: "CSS", description: "Flexbox, Grid, responsive design" },
    { name: "JavaScript", description: "DOM manipulation, APIs, ES6+" },
    { name: "React", description: "Components, props, useState" },
    { name: "C++", description: "OOP, data structures" },
    { name: "Java", description: "OOP, Java Swing" },
  ];

  return (
    <section className="skills" id="skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <h3>{skill.name}</h3>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;