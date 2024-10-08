// script.js

// Sample project data
const projects = [
    {
      name: "Project 1",
      description: "This is a project about web development.",
      link: "https://github.com/Turnab2006/innovision_2024_Turbo_Roy",
      img_link:"./images/java.jpg"
    },
    {
      name: "Project 2",
      description: "This is a project about data analysis.",
      link: "https://github.com/Turnab2006/Tempest",
      img_link:"./images/in.png"
    },
    {
      name: "Project 3",
      description: "This is a project about machine learning.",
      
     link: "https://github.com/yourgithubusername/project3",
     img_link:"./images/c.jpg"
    }
  ];
  
  // Render project gallery
  const projectGallery = document.getElementById("project-gallery");
  
  projects.forEach(project => {
    const projectItem = document.createElement("div");
    projectItem.classList.add("project-item");
  
    projectItem.innerHTML = `
    <div class="card">
      <h3>${project.name}</h3>
      <p>${project.description}</p>
      <a href="${project.link}" target="_blank">View Project</a>
        <img src="${project.img_link}" ></img>
    </div>

    `;
  
    projectGallery.appendChild(projectItem);
  });
  
  // GitHub Repositories Integration
  fetch('https://api.github.com/users/yourgithubusername/repos')
    .then(response => response.json())
    .then(data => {
      data.forEach(repo => {
        const repoItem = document.createElement('div');
        repoItem.classList.add('project-item');
        repoItem.innerHTML = `
          <h3>${repo.name}</h3>
          <p>${repo.description}</p>
          <a href="${repo.html_url}" target="_blank">View Repository</a>
        `;
        projectGallery.appendChild(repoItem);
      });
    })
    .catch(error => console.error('Error fetching repositories:', error));
  