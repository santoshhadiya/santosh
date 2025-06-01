// app.js
document.addEventListener('DOMContentLoaded', function() {
  // Skills Data
  const skills = [
    { name: "HTML", level: 95, img: "https://cdn-icons-png.flaticon.com/512/152/152843.png" },
    { name: "CSS", level: 90, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS__PteGo_WqYFOZZOskyatAlf7slaVSOrwOg&s" },
    { name: "JavaScript", level: 86, img: "https://cdn-icons-png.freepik.com/256/721/721671.png" },
    { name: "React Js", level: 80, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbodQVEoT0TbrcZxQsUDnBhAEdVBN9XvmNMQ&s" },
    { name: "SQL", level: 65, img: "https://static-00.iconduck.com/assets.00/database-sql-icon-1831x2048-iv4v6ry0.png" },
    { name: "Java", level: 65, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGDj8Myn1WOESjIurUBJOtsTdVc7wfWRNblQ&s" },
    { name: "Bootstrap", level: 70, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIDSJXSf-avDYnXD_Ucz0scd86WoH88W5krA&s" },
    { name: "Tailwind", level: 70, img: "https://static-00.iconduck.com/assets.00/tailwind-icon-512x309-a8f1tun1.png" }
  ];

  // Projects Data
  const projects = [
    {
      title: "SkillForge",
      description: "A comprehensive LMS built for universities, businesses, and educators to manage courses, quizzes, and certifications.",
      image: "LMS IMG (1).png",
      link: "https://santoshhadiya.github.io/edemy/",
      tools: ["HTML", "CSS", "JavaScript", "React.js"],
      code:"https://github.com/santoshhadiya/edemy",
    },
    {
      title: "CodeCollab",
      description: "A web-based application where multiple users can join a room, write code together in real time.",
      image: "CodeCollab.png",
      link: "https://codecollab-frontend-kgxh.onrender.com",
      tools: ["HTML", "Tailwind", "JavaScript", "ReactJs", "NodeJs", "ExpressJs", "Socket.io"],
      code:"https://github.com/santoshhadiya/CodeCollab",
    },
    {
      title: "BootstrapNest",
      description: "A Bootstrap template with modern layouts and easy customization.",
      image: "BOOTSRAP IMG.png",
      link: "https://santoshhadiya.github.io/bootstrap/",
      tools: ["HTML", "CSS", "Bootsrap"],
      code:"https://github.com/santoshhadiya/bootstrap",
    },
    {
      title: "Restaurant Website",
      description: "A modern restaurant website with online reservations, menu showcase, and customer reviews.",
      image: "POTO IMG.png",
      link: "https://santoshhadiya.github.io/Restaurant/",
      tools: ["HTML", "CSS", "JavaScript"],
      code:"https://github.com/santoshhadiya/Restaurant",
    },
    {
      title: "Library Management System",
      description: "A modern library management system for efficient book tracking, lending, and user management.",
      image: "LIBRARY IMG.png",
      link: "https://github.com/santoshhadiya/shoeshop-ecommerce.git",
      tools: ["HTML", "CSS", "JavaScript", "React Js", "Node Js", "Express Js", "MongoDB"],
      code:"",
    }
  ];

  // Contact Info Data
  const contactInfo = [
    {
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYHIf4Txw2BnwctE7IyacucVaNMM5Vm83zDQ&s",
      text: "santoshhadiya333@gmail.com",
      link: "mailto:santoshhadiya333@gmail.com"
    },
    {
      icon: "https://freepngimg.com/save/77364-instagram-icons-computer-black-logo-white-wine/600x600",
      text: "Instagram Profile",
      link: "https://www.instagram.com/santoshhadiya33/?__pwa=1"
    },
    {
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2FhwIFvE_9_vRIWd_OUrtkO8ViSvO0S01ng&s",
      text: "GitHub Profile",
      link: "https://github.com/santoshhadiya"
    }
  ];

  // Initialize all components
  renderSkills();
  renderProjects();
  renderContactInfo();
  setupSmoothScrolling();

 // Updated renderSkills function in app.js
function renderSkills() {
  const skillGraph = document.getElementById('skillGraph');
  
  skills.forEach(skill => {
    const skillElement = document.createElement('div');
    skillElement.className = 'bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 flex items-start';
    
    skillElement.innerHTML = `
      <div class="flex-shrink-0 bg-amber-50 p-3 rounded-lg mr-4">
        <img src="${skill.img}" alt="${skill.name}" class="w-8 h-8 object-contain">
      </div>
      <div class="flex-grow">
        <h5 class="font-bold text-gray-800 mb-1">${skill.name}</h5>
        <div class="flex justify-between items-center mb-2">
          <span class="text-xs text-gray-500">Proficiency</span>
          <span class="text-sm font-bold text-amber-700">${skill.level}%</span>
        </div>
        <div class="w-full bg-gray-200 rounded-full h-2">
          <div class="bg-amber-700 h-2 rounded-full" style="width: ${skill.level}%"></div>
        </div>
      </div>
    `;
    
    skillGraph.appendChild(skillElement);
  });
}

 // Updated renderProjects function in app.js
function renderProjects() {
  const projectsGrid = document.getElementById('projectsGrid');
  
  projects.forEach(project => {
    const projectElement = document.createElement('div');
    projectElement.className = 'bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col';
    
    projectElement.innerHTML = `
      <div class="relative overflow-hidden h-48">
        <img src="${project.image}" alt="${project.title}" 
             class="w-full h-full object-cover transition-transform duration-500 hover:scale-105">
        <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      </div>
      <div class="p-6 flex-grow flex flex-col">
        <div class="flex items-center mb-3">
          <i class="fas fa-project-diagram text-amber-700 mr-2"></i>
          <h3 class="text-xl font-bold text-gray-800">${project.title}</h3>
        </div>
        <p class="text-gray-600 mb-4 flex-grow">${project.description}</p>
        
        <div class="mb-4">
          <h4 class="text-sm font-semibold text-gray-700 mb-2">Technologies Used:</h4>
          <div class="flex flex-wrap gap-2">
            ${project.tools.map(tool => 
              `<span class="text-xs bg-gray-100 px-3 py-1 rounded-full text-gray-800">${tool}</span>`
            ).join('')}
          </div>
        </div>
        
        <div class="flex gap-3 pt-2 mt-auto">
          ${project.code ? `
            <a href="${project.code}" target="_blank" 
               class="flex-1 flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition">
              <i class="fas fa-code"></i>
              Code
            </a>
          ` : ''}
          <a href="${project.link}" target="_blank" 
             class="flex-1 flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-amber-700 text-white hover:bg-amber-800 transition">
            <i class="fas fa-external-link-alt"></i>
            Demo
          </a>
        </div>
      </div>
    `;
    
    projectsGrid.appendChild(projectElement);
  });
}

  // Function to render contact info
  function renderContactInfo() {
    const contactContainer = document.getElementById('contactInfo');
    
    contactInfo.forEach(contact => {
      const contactElement = document.createElement('div');
      contactElement.className = 'flex items-center';
      
      contactElement.innerHTML = `
        <img src="${contact.icon}" alt="Contact icon" class="w-8 h-8 mr-3">
        <a href="${contact.link}" target="_blank" 
           class="font-bold text-gray-800 hover:text-blue-600 hover:underline transition">
          ${contact.text}
        </a>
      `;
      
      contactContainer.appendChild(contactElement);
    });
  }

  // Smooth scrolling for anchor links
  function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }

  // Adjust padding for fixed header
  function adjustHeaderPadding() {
    const headerHeight = document.querySelector('header').offsetHeight;
    document.querySelector('section#home').style.paddingTop = `${headerHeight + 32}px`;
  }

  // Run on load and resize
  window.addEventListener('load', adjustHeaderPadding);
  window.addEventListener('resize', adjustHeaderPadding);
});