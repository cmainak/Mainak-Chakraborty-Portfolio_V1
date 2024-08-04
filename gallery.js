document.addEventListener('DOMContentLoaded', () => {
    const loadMoreBtn = document.getElementById('load-more-btn');
    const galleryContainer = document.querySelector('.gallery-container');

    const images = [
        { src: 'images/Gallery/Couple.jpg', alt: 'Photo 4' },
        { src: 'images/Gallery/Still-Life_1.jpg', alt: 'Photo 5' },
        { src: 'images/Gallery/Still-Life_1.jpg', alt: 'Photo 6' },
        { src: 'images/Gallery/photo7.jpg', alt: 'Photo 7' },
        { src: 'images/Gallery/photo8.jpg', alt: 'Photo 8' },
        { src: 'images/Gallery/photo9.jpg', alt: 'Photo 9' },
        // Add more images here
    ];

    let currentImageIndex = 0;
    const imagesPerLoad = 3;

    loadMoreBtn.addEventListener('click', () => {
        for (let i = 0; i < imagesPerLoad; i++) {
            if (currentImageIndex >= images.length) {
                loadMoreBtn.disabled = true;
                loadMoreBtn.innerText = 'No More Images';
                break;
            }
            const image = images[currentImageIndex];
            const galleryItem = document.createElement('div');
            galleryItem.className = 'gallery-item';
            galleryItem.innerHTML = `
                <img src="${image.src}" alt="${image.alt}">
            `;
            galleryContainer.appendChild(galleryItem);
            currentImageIndex++;
        }
    });



    // Modal functionality
    let modalIndex;
    const modal = document.getElementById("myModal");
    const modalImg = document.getElementById("img01");
    const captionText = document.getElementById("caption");
    const galleryImages = document.querySelectorAll('.gallery-item img');

    window.openModal = function(img) {
        modal.style.display = "block";
        modalImg.src = img.src;
        captionText.innerHTML = img.alt;
        modalIndex = Array.from(galleryImages).indexOf(img);
    }

    window.closeModal = function() {
        modal.style.display = "none";
    }

    window.changeImage = function(direction) {
        modalIndex += direction;
        if (modalIndex >= galleryImages.length) {
            modalIndex = 0;
        } else if (modalIndex < 0) {
            modalIndex = galleryImages.length - 1;
        }
        modalImg.src = galleryImages[modalIndex].src;
        captionText.innerHTML = galleryImages[modalIndex].alt;
    }

    // Close the modal when clicking outside of the image
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });
});
