    /* =============================================
    AKSHIT SHARMA — PORTFOLIO JS
    All data-driven. To add/edit content,
    just update the DATA objects below.
    ============================================= */

    /* =============================================
    ✏️  EDITABLE DATA — Update these anytime!
    ============================================= */

    const RESUME_LINK = "https://drive.google.com/file/d/1msu7EOjOTfH0g9kaeL1tcPnBu7IRvzoI/view?usp=drive_link"; // GOOGLE_DRIVE_RESUME_LINK

    const EDUCATION_DATA = [
    {
        year: "2023 – 2027",
        degree: "B.Tech in Information Technology",
        school: "Maharaja Agrasen Institute of Technology (MAIT), Delhi",
        score: "CGPA: 9.08"
    },
    {
        year: "2022 – 2023",
        degree: "Class XII — PCM",
        school: "Kendriya Vidyalaya, Mahoba",
        score: "83%"
    },
    {
        year: "2020 – 2021",
        degree: "Class X",
        school: "Kendriya Vidyalaya, Mahoba",
        score: "96%"
    }
    ];

    const SKILLS_DATA = [
    {
        group: "Languages",
        icon: "fas fa-terminal",
        skills: [
        { name: "C++", icon: "fas fa-code" },
        { name: "C",   icon: "fas fa-code" },
        { name: "SQL", icon: "fas fa-database" }
        ]
    },
    {
        group: "Web Development",
        icon: "fas fa-globe",
        skills: [
        { name: "HTML",       icon: "fab fa-html5" },
        { name: "CSS",        icon: "fab fa-css3-alt" },
        { name: "JavaScript", icon: "fab fa-js" }
        ]
    },
    {
        group: "Core Concepts",
        icon: "fas fa-brain",
        skills: [
        { name: "Data Structures & Algorithms", icon: "fas fa-sitemap" },
        { name: "OOPs",             icon: "fas fa-cubes" },
        { name: "DBMS",             icon: "fas fa-database" },
        { name: "Operating System", icon: "fas fa-server" },
        { name: "Computer Networks",icon: "fas fa-network-wired" }
        ]
    },
    {
        group: "Soft Skills",
        icon: "fas fa-users",
        skills: [
        { name: "Leadership",        icon: "fas fa-crown" },
        { name: "Team Collaboration",icon: "fas fa-handshake" },
        ]
    }
    ];

    const CERTIFICATIONS_DATA = [
    //  Add more certs here anytime — cards auto-generate!
    {
        icon: "💡",
        name: "Decode C++ with DSA",
        org: "Physics Wallah",
        year: "2024"
    },
    {
        icon: "🗄️",
        name: "SQL Workshop",
        org: "Infosys Springboard",
        year: "2025"
    },
    {
        icon: "🤖",
        name: "Claude AI: From Basics to Build",
        org: "Physics Wallah",
        year: "2026"
    }
    ];

    const PROJECTS_DATA = [
    // ➕ Add more projects here anytime — cards auto-generate!
    {
        name: "Academic Result Portal",
        desc: "A full-stack web application for managing student results. Automated data extraction from PDFs, stored data in MySQL, and implemented Excel export functionality.",
        stack: ["PHP", "MySQL", "HTML", "CSS", "Bootstrap", "PhpSpreadsheet"],
        link: "https://github.com/AkkySharma525/academic-result-portal"
    },
    {
        name: "Real-Time Chat Application",
        desc: "A real-time chat system with user and admin interfaces, featuring WebSocket-based communication for instant messaging.",
        stack: ["Node.js", "Express", "Socket.io"],
        link: "https://github.com/AkkySharma525/chatbox-project"
    }
    ];

    /* =============================================
    TYPING ANIMATION
    ============================================= */
    const TYPING_WORDS = [
    "Competitive Programmer",
    "Hackathon Winner",
    "Problem Solver",
    "IT Student @ MAIT"
    ];

    let wordIdx = 0, charIdx = 0, deleting = false;
    const typingEl = document.getElementById("typingText");

    function typeLoop() {
    if (!typingEl) return;
    const word = TYPING_WORDS[wordIdx];
    if (!deleting) {
        typingEl.textContent = word.slice(0, ++charIdx);
        if (charIdx === word.length) {
        deleting = true;
        setTimeout(typeLoop, 1800);
        return;
        }
    } else {
        typingEl.textContent = word.slice(0, --charIdx);
        if (charIdx === 0) {
        deleting = false;
        wordIdx = (wordIdx + 1) % TYPING_WORDS.length;
        }
    }
    setTimeout(typeLoop, deleting ? 55 : 90);
    }

    /* =============================================
    RESUME BUTTON LINK
    ============================================= */
    const resumeBtn = document.getElementById("resumeBtn");
    if (resumeBtn) resumeBtn.href = RESUME_LINK;

    /* =============================================
    HERO PHOTO — show placeholder if no image
    ============================================= */
    const heroPhoto = document.getElementById("heroPhoto");
    const photoPlaceholder = document.getElementById("photoPlaceholder");

    if (heroPhoto) {
    heroPhoto.onerror = () => {
        heroPhoto.style.display = "none";
        if (photoPlaceholder) {
        photoPlaceholder.style.display = "flex";
        }
    };
    }

    /* =============================================
    NAVBAR — scroll effect + active link
    ============================================= */
    const navbar = document.getElementById("navbar");
    const navLinks = document.querySelectorAll(".nav-center a");
    const sections = document.querySelectorAll("section[id]");

    function updateNavbar() {
    // Scrolled shadow
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

    // Active section highlight
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (window.scrollY >= sectionTop) {
        current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
        }
    });
    }

    window.addEventListener("scroll", updateNavbar);

    /* =============================================
    MOBILE MENU
    ============================================= */
    const hamburger = document.getElementById("hamburger");
    const mobileMenu = document.getElementById("mobileMenu");

    hamburger.addEventListener("click", () => {
    mobileMenu.classList.toggle("open");
    });

    document.querySelectorAll(".mobile-link").forEach(link => {
    link.addEventListener("click", () => mobileMenu.classList.remove("open"));
    });

    /* =============================================
    THEME TOGGLE
    ============================================= */
    const themeToggle = document.getElementById("themeToggle");
    const themeIcon = document.getElementById("themeIcon");
    const html = document.documentElement;

    // Load saved theme
    const savedTheme = localStorage.getItem("portfolio-theme") || "dark";
    html.setAttribute("data-theme", savedTheme);
    updateThemeIcon(savedTheme);

    themeToggle.addEventListener("click", () => {
    const current = html.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    html.setAttribute("data-theme", next);
    localStorage.setItem("portfolio-theme", next);
    updateThemeIcon(next);
    });

    function updateThemeIcon(theme) {
    themeIcon.className = theme === "dark" ? "fas fa-sun" : "fas fa-moon";
    }

    /* =============================================
    EXPANDABLE STAT CARDS
    ============================================= */
    function toggleStat(id) {
    const card = document.getElementById(id);
    const isOpen = card.classList.contains("open");

    // Close all
    document.querySelectorAll(".stat-card").forEach(c => c.classList.remove("open"));

    // Open clicked if it was closed
    if (!isOpen) card.classList.add("open");
    }

    /* =============================================
    BUILD EDUCATION TIMELINE
    ============================================= */
    function buildEducation() {
    const container = document.getElementById("educationTimeline");
    if (!container) return;

    EDUCATION_DATA.forEach((item, i) => {
        const el = document.createElement("div");
        el.className = "timeline-item";
        el.setAttribute("data-aos", "fade-left");
        el.setAttribute("data-aos-delay", `${i * 100}`);
        el.innerHTML = `
        <div class="timeline-year">${item.year}</div>
        <div class="timeline-degree">${item.degree}</div>
        <div class="timeline-school">${item.school}</div>
        <span class="timeline-score">${item.score}</span>
        `;
        container.appendChild(el);
    });
    }

    /* =============================================
    BUILD SKILLS SECTION
    ============================================= */
    function buildSkills() {
    const wrapper = document.getElementById("skillsWrapper");
    if (!wrapper) return;

    SKILLS_DATA.forEach((group, gi) => {
        const groupEl = document.createElement("div");
        groupEl.className = "skill-group";
        groupEl.setAttribute("data-aos", "fade-up");
        groupEl.setAttribute("data-aos-delay", `${gi * 80}`);

        const tagsHTML = group.skills.map(s => `
        <div class="skill-tag">
            <i class="${s.icon}"></i>
            ${s.name}
        </div>
        `).join("");

        groupEl.innerHTML = `
        <div class="skill-group-title">
            <i class="${group.icon}"></i> ${group.group}
        </div>
        <div class="skill-tags">${tagsHTML}</div>
        `;
        wrapper.appendChild(groupEl);
    });
    }

    /* =============================================
    BUILD CERTIFICATIONS CARDS
    ============================================= */
    function buildCerts() {
    const grid = document.getElementById("certsGrid");
    if (!grid) return;

    CERTIFICATIONS_DATA.forEach((cert, i) => {
        const card = document.createElement("div");
        card.className = "cert-card";
        card.setAttribute("data-aos", "fade-up");
        card.setAttribute("data-aos-delay", `${i * 100}`);
        card.innerHTML = `
        <div class="cert-icon">${cert.icon}</div>
        <div>
            <div class="cert-name">${cert.name}</div>
            <div class="cert-org">${cert.org}</div>
            <div class="cert-year">${cert.year}</div>
        </div>
        `;
        grid.appendChild(card);
    });
    }

    /* =============================================
    BUILD PROJECT CARDS
    ============================================= */
    function buildProjects() {
    const grid = document.getElementById("projectsGrid");
    if (!grid) return;

    PROJECTS_DATA.forEach((proj, i) => {
        const card = document.createElement("div");
        card.className = "project-card";
        card.setAttribute("data-aos", "fade-up");
        card.setAttribute("data-aos-delay", `${i * 100}`);

        const badges = proj.stack.map(t => `<span class="stack-badge">${t}</span>`).join("");

        card.innerHTML = `
        <div class="project-name">${proj.name}</div>
        <div class="project-desc">${proj.desc}</div>
        <div class="project-stack">${badges}</div>
        <a href="${proj.link}" target="_blank" class="project-link">
            <i class="fab fa-github"></i> View on GitHub
        </a>
        `;
        grid.appendChild(card);
    });
    }

    /* =============================================
    FLOATING PARTICLES (Hero)
    ============================================= */
    function buildParticles() {
    const container = document.getElementById("heroParticles");
    if (!container) return;

    for (let i = 0; i < 28; i++) {
        const dot = document.createElement("div");
        const size = Math.random() * 3 + 1;
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const dur = Math.random() * 12 + 8;
        const delay = Math.random() * 6;

        dot.style.cssText = `
        position: absolute;
        left: ${x}%;
        top: ${y}%;
        width: ${size}px;
        height: ${size}px;
        background: rgba(0, 212, 255, ${Math.random() * 0.4 + 0.1});
        border-radius: 50%;
        animation: floatParticle ${dur}s ${delay}s ease-in-out infinite alternate;
        pointer-events: none;
        `;
        container.appendChild(dot);
    }

    // Inject particle keyframes
    if (!document.getElementById("particleStyle")) {
        const style = document.createElement("style");
        style.id = "particleStyle";
        style.textContent = `
        @keyframes floatParticle {
            0%   { transform: translate(0, 0) scale(1); opacity: 0.3; }
            100% { transform: translate(${Math.random() > 0.5 ? "" : "-"}${Math.floor(Math.random()*30+10)}px, -${Math.floor(Math.random()*40+10)}px) scale(1.5); opacity: 0.8; }
        }
        `;
        document.head.appendChild(style);
    }
    }

    /* =============================================
    INIT
    ============================================= */
    document.addEventListener("DOMContentLoaded", () => {
    // Build all sections
    buildEducation();
    buildSkills();
    buildCerts();
    buildProjects();
    buildParticles();

    // Start typing
    setTimeout(typeLoop, 600);

    // Init AOS
    AOS.init({
        duration: 700,
        once: true,
        easing: "ease-out-cubic",
        offset: 60
    });

    // Initial navbar state
    updateNavbar();
    });
