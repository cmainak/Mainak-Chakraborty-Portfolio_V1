// script.js
document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded - script is running");

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

  
    // Hamburger Menu Functionality
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
  
    if (!menuToggle) console.error("Menu toggle button not found");
    if (!navLinks) console.error("Nav links not found");
  
    // Toggle menu function
    function toggleMenu() {
      console.log("Toggling menu");
      navLinks.classList.toggle("active");
      menuToggle.innerHTML = navLinks.classList.contains("active") ? "✕" : "☰";
    }
  
    // Handle click and touch events
    menuToggle.addEventListener("click", toggleMenu);
    menuToggle.addEventListener("touchstart", function (e) {
      e.preventDefault(); // Prevent scrolling or other default touch behavior
      console.log("Touch event detected on hamburger");
      toggleMenu();
    });
  
    // Close menu when clicking outside
    document.addEventListener("click", function (e) {
      if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
        console.log("Clicked outside - closing menu");
        navLinks.classList.remove("active");
        menuToggle.innerHTML = "☰";
      }
    });
  
    // Close menu on ESC key
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && navLinks.classList.contains("active")) {
        console.log("ESC pressed - closing menu");
        navLinks.classList.remove("active");
        menuToggle.innerHTML = "☰";
      }
    });
  
    // Reset menu on desktop resize
    window.addEventListener("resize", function () {
      if (window.innerWidth > 768) {
        console.log("Resized to desktop - resetting menu");
        navLinks.classList.remove("active");
        menuToggle.innerHTML = "☰";
      }
    });

    
  
    // Scroll Animation Functionality
    const scrollElements = document.querySelectorAll(".scroll-animation");
  
    function elementInView(el, dividend = 1) {
      const elementTop = el.getBoundingClientRect().top;
      return (
        elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
      );
    }
  
    function displayScrollElement(element) {
      element.classList.add("visible");
    }
  
    function hideScrollElement(element) {
      element.classList.remove("visible");
    }
  
    function handleScrollAnimation() {
      scrollElements.forEach((el) => {
        if (elementInView(el, 1.25)) {
          displayScrollElement(el);
        } else {
          hideScrollElement(el);
        }
      });
    }
  
    window.addEventListener("scroll", handleScrollAnimation);
    handleScrollAnimation(); // Initial check
  
    // Password Modal Functionality
    window.showPasswordPrompt = function (url) {
      console.log("Showing password modal");
      document.getElementById("passwordModal").style.display = "flex";
      document.getElementById("passwordSubmit").onclick = function () {
        var password = document.getElementById("passwordInput").value;
        if (password === "7474") {
          console.log("Correct password - redirecting");
          window.location.href = url;
        } else {
          console.log("Incorrect password");
          alert("Incorrect password.");
        }
      };
    };
  
    window.closeModal = function () {
      console.log("Closing modal");
      document.getElementById("passwordModal").style.display = "none";
    };

    
  });