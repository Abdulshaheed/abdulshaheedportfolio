const projects = [
  {
    title: "IBBUL Guide App",
    description: "Campus app with GPA/CGPA calculator, map, faculties, and news.",
    image: "images/uniguide_home.jpg",
    link: "projects/ibbul-guide.html"
  },
  {
    title: "Komposta App",
    description: "Smart composting system for sustainable farming.",
    image: "images/komposta.png",
    link: "projects/komposta.html"
  },
  {
    title: "AutoGroupX",
    description: "Intelligent student grouping app with CSV upload and export.",
    image: "images/AutoGroupX_Home.jpg",
    link: "projects/autogroupx.html"
  }
];

const projectList = document.getElementById("project-list");

projects.forEach(proj => {
  const card = document.createElement("div");
  card.classList.add("project-card");

  card.innerHTML = `
    <img src="${proj.image}" alt="${proj.title}">
    <h3>${proj.title}</h3>
    <p>${proj.description}</p>
    <a href="${proj.link}">View Project</a>
  `;

  projectList.appendChild(card);
});