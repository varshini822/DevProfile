document.addEventListener("DOMContentLoaded", () => {
  const projects = [
    {
      title: "Smart E-Commerce",
      description: "An AI-powered shopping site with product recommendations.",
      link: "#"
    },
    {
      title: "Tube Filter AI",
      description: "Filters harmful YouTube content using sentiment analysis.",
      link: "#"
    },
    {
      title: "TaskTrek",
      description: "Task management app with CRUD functionality.",
      link: "#"
    }
  ];

  const container = document.getElementById("projectsContainer");

  projects.forEach(project => {
    const card = document.createElement("div");
    card.classList.add("project-card");

    card.innerHTML = `
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <a href="${project.link}" target="_blank">View Project</a>
    `;

    container.appendChild(card);
  });

  // Optional contact form handler
  document.getElementById("contactForm").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Message sent! We'll get back to you soon.");
  });
});
