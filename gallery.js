document.addEventListener('DOMContentLoaded', () => {
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

    // Hamburger menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        document.body.classList.toggle('menu-open'); // Toggle body class for no scroll
    });
});
