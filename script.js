document.addEventListener("DOMContentLoaded", function() {
    const toolsContent = document.querySelector('.tools-content');
    const tools = Array.from(document.querySelectorAll('.tool-image'));

    // Clone the tool images to create a seamless loop
    tools.forEach(tool => {
        const clone = tool.cloneNode(true);
        toolsContent.appendChild(clone);
    });

    const toolWidth = tools[0].offsetWidth + 20; // Include margin
    const totalWidth = toolWidth * tools.length;
    let translateX = 0;
    const slideSpeed = 2; // Increase the speed

    function slideTools() {
        translateX -= slideSpeed;
        if (translateX <= -totalWidth) {
            translateX = 0;
        }
        toolsContent.style.transform = `translateX(${translateX}px)`;
        requestAnimationFrame(slideTools);
    }

    slideTools();

    // Hamburger menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        document.body.classList.toggle('menu-open'); // Toggle body class for no scroll
    });

    // Close menu when clicking outside of it
    document.addEventListener('click', function(event) {
        if (!menuToggle.contains(event.target) && !navLinks.contains(event.target)) {
            navLinks.classList.remove('active');
            document.body.classList.remove('menu-open');
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const scrollElements = document.querySelectorAll('.scroll-animation');

    const elementInView = (el, dividend = 1) => {
        const elementTop = el.getBoundingClientRect().top;

        return (
            elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
        );
    };

    const displayScrollElement = (element) => {
        element.classList.add('visible');
    };

    const hideScrollElement = (element) => {
        element.classList.remove('visible');
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 1.25)) {
                displayScrollElement(el);
            } else {
                hideScrollElement(el);
            }
        });
    };

    window.addEventListener('scroll', () => {
        handleScrollAnimation();
    });

    // Initial check to apply animation if elements are already in view
    handleScrollAnimation();
});



document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    const loadMoreButton = document.querySelector('.load-more');
    const galleryContainer = document.querySelector('.gallery-container');

    loadMoreButton.addEventListener('click', () => {
        const newItems = `
            <div class="gallery-item">
                <a href="https://drive.google.com/your-link-4" target="_blank">
                    <img src="images/GALLERY/photo4.jpg" alt="Photo 4">
                </a>
            </div>
            <div class="gallery-item">
                <a href="https://drive.google.com/your-link-5" target="_blank">
                    <img src="images/GALLERY/photo5.jpg" alt="Photo 5">
                </a>
            </div>
            <div class="gallery-item">
                <a href="https://drive.google.com/your-link-6" target="_blank">
                    <img src="images/GALLERY/photo6.jpg" alt="Photo 6">
                </a>
            </div>
        `;
        galleryContainer.insertAdjacentHTML('beforeend', newItems);
        loadMoreButton.style.display = 'none'; // Hide the button after loading more items
    });
});


