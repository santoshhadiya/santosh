// app.js
document.addEventListener('DOMContentLoaded', function() {
  // Skills Data
  const skills = [
    { name: "HTML", level: 95,img: "https://cdn-icons-png.flaticon.com/512/152/152843.png" },
    { name: "CSS", level: 90,img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS__PteGo_WqYFOZZOskyatAlf7slaVSOrwOg&s" },
    { name: "JavaScript", level: 86,img: "https://cdn-icons-png.freepik.com/256/721/721671.png" },
    { name: "React Js", level: 80,img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbodQVEoT0TbrcZxQsUDnBhAEdVBN9XvmNMQ&s" },
    { name: "Node.js", level: 55,img: "https://img.icons8.com/win10/200/node-js.png" },
    { name: "SQL", level: 65,img: "https://cdn-icons-png.flaticon.com/512/4299/4299956.png" },
    { name: "Java", level: 65,img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGDj8Myn1WOESjIurUBJOtsTdVc7wfWRNblQ&s" },
    { name: "Bootstrap", level: 60,img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIDSJXSf-avDYnXD_Ucz0scd86WoH88W5krA&s" },
    { name: "Tailwind", level: 70,img: "https://images.icon-icons.com/3398/PNG/512/css_tailwind_logo_icon_214735.png" },
    { name:"Python", level:60,img:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Python_icon_%28black_and_white%29.svg/1200px-Python_icon_%28black_and_white%29.svg.png"},
   {name:"Php", level:60,img:"https://pngimg.com/d/php_PNG20.png"}
  ];

  
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
      title: "Library Management System",
      description: "A modern library management system for efficient book tracking, lending, and user management.",
      image: "LIBRARY.png",
      link: "https://lms-santosh.onrender.com/",
      tools: ["HTML", "CSS", "JavaScript", "React Js", "Node Js", "Express Js", "MongoDB"],
      code:"https://github.com/santoshhadiya/library-management-system",
    },
    {
      title: "ChatApp",
      description: "Real-time chat app with room-based messaging, user lists, message history, and responsive UI using React, Socket.IO, Node.js.",
      image: "ChatApp.png",
      link: "http://chatapp-santosh.onrender.com/",
      tools: ["HTML", "Tailwind", "React Js", "Node Js", "Express Js", "MongoDB", "Socket.io"],
      code:"https://github.com/santoshhadiya/ChatApp",
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

  // Initialize 
  renderSkills();
  renderProjects();
  renderContactInfo();
  setupSmoothScrolling();

 //  renderSkills function 
function renderSkills() {
  const skillGraph = document.getElementById('skillGraph');
  
  // Clear existing content
  skillGraph.innerHTML = '';
  
 skills.forEach(skill => {
  const skillElement = document.createElement('div');
  
  // New classes for a modern "pill" design
  skillElement.className = 'flex items-center gap-3 rounded-full bg-slate-50 px-4 py-2 border border-slate-200 hover:shadow-sm hover:border-amber-400 transition-all';
  
  // Simplified HTML structure
  skillElement.innerHTML = `
    <img src="${skill.img}" alt="${skill.name}" class="h-6 w-6 object-contain">
    <span class="font-medium text-slate-700">${skill.name}</span>
  `;
  
  skillGraph.appendChild(skillElement);
});
}

 //renderProjects function
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

  //padding for fixed header
  function adjustHeaderPadding() {
    const headerHeight = document.querySelector('header').offsetHeight;
    document.querySelector('section#home').style.paddingTop = `${headerHeight + 32}px`;
  }

  // Run on load and resize
  window.addEventListener('load', adjustHeaderPadding);
  window.addEventListener('resize', adjustHeaderPadding);
});