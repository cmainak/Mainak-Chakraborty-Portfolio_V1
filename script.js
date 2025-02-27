// script.js
document.addEventListener("DOMContentLoaded", function() {
    // ======================
    // Hamburger Menu Functionality
    // ======================
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;

    const galleryItems = document.querySelectorAll('.gallery-item img');
    const modal = document.getElementById('myModal');
    const modalImg = document.getElementById('img01');
    const captionText = document.getElementById('caption');
    const closeBtn = document.querySelector('.close');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentIndex = 0;

    function openModal(img) {
        modal.style.display = "block";
        modalImg.src = img.src;
        captionText.innerHTML = img.alt;
        currentIndex = Array.from(galleryItems).indexOf(img);
    }

    function closeModal() {
        modal.style.display = "none";
    }

    function changeImage(direction) {
        currentIndex += direction;
        if (currentIndex >= galleryItems.length) {
            currentIndex = 0;
        } else if (currentIndex < 0) {
            currentIndex = galleryItems.length - 1;
        }
        modalImg.src = galleryItems[currentIndex].src;
        captionText.innerHTML = galleryItems[currentIndex].alt;
    }

    galleryItems.forEach(img => {
        img.addEventListener('click', () => openModal(img));
    });

    closeBtn.addEventListener('click', closeModal);
    prevBtn.addEventListener('click', () => changeImage(-1));
    nextBtn.addEventListener('click', () => changeImage(1));
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Toggle menu function
    const toggleMenu = () => {
        const isActive = navLinks.classList.toggle('active');
        menuToggle.innerHTML = isActive ? '✕' : '&#9776;';
        body.classList.toggle('menu-open', isActive);
    };

    // Close menu when clicking outside
    const closeMenuOnClickOutside = (e) => {
        if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
            navLinks.classList.remove('active');
            body.classList.remove('menu-open');
            menuToggle.innerHTML = '&#9776;';
        }
    };

    // Close menu on ESC key
    const closeMenuOnEsc = (e) => {
        if (e.key === 'Escape' && navLinks.classList.contains('active')) {
            toggleMenu();
        }
    };

    // Reset menu on desktop resize
    const resetMenuOnDesktop = () => {
        if (window.innerWidth > 768) {
            navLinks.classList.remove('active');
            body.classList.remove('menu-open');
            menuToggle.innerHTML = '&#9776;';
        }
    };

    // Event Listeners
    menuToggle.addEventListener('click', toggleMenu);
    document.addEventListener('click', closeMenuOnClickOutside);
    document.addEventListener('keydown', closeMenuOnEsc);
    window.addEventListener('resize', resetMenuOnDesktop);

    // ======================
    // Tools Slider
    // ======================
    const toolsContent = document.querySelector('.tools-content');
    const tools = Array.from(document.querySelectorAll('.tool-image'));
    
    // Clone tools for infinite loop
    tools.forEach(tool => {
        const clone = tool.cloneNode(true);
        toolsContent.appendChild(clone);
    });

    let translateX = 0;
    const toolWidth = tools[0].offsetWidth + 20;
    const totalWidth = toolWidth * tools.length;
    const slideSpeed = 2;

    const animateTools = () => {
        translateX -= slideSpeed;
        if (translateX <= -totalWidth) translateX = 0;
        toolsContent.style.transform = `translateX(${translateX}px)`;
        requestAnimationFrame(animateTools);
    };
    animateTools();

    // ======================
    // Scroll Animations
    // ======================
    const scrollElements = document.querySelectorAll('.scroll-animation');
    
    const checkScroll = () => {
        scrollElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            elementTop <= window.innerHeight / 1.25 
                ? el.classList.add('visible')
                : el.classList.remove('visible');
        });
    };

    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Initial check

    // ======================
    // Password Modal
    // ======================
    const passwordModal = document.getElementById('password-modal');
    
    window.showPasswordPrompt = (url) => {
        passwordModal.style.display = 'block';
        document.getElementById('password-submit').onclick = () => {
            const password = document.getElementById('password-input').value;
            if (password === '2747') window.location.href = url;
            else alert('Incorrect password.');
        };
    };

    window.closeModal = () => {
        passwordModal.style.display = 'none';
    };

    // ======================
    // Text Animation (Optional)
    // ======================
    const roles = ["UX Designer", "UX Researcher", "Graphic Designer", "Video Editor"];
    let currentRoleIndex = 0;
    const roleElement = document.querySelector(".text-animation span");

    const updateRole = () => {
        currentRoleIndex = (currentRoleIndex + 1) % roles.length;
        roleElement.classList.remove("active");
        setTimeout(() => {
            roleElement.textContent = roles[currentRoleIndex];
            roleElement.classList.add("active");
        }, 500);
    };

    if(roleElement) { // Only run if element exists
        roleElement.textContent = roles[currentRoleIndex];
        roleElement.classList.add("active");
        setInterval(updateRole, 5000);
    }
    
});