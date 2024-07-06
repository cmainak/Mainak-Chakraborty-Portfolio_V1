document.addEventListener('DOMContentLoaded', () => {
    const loadMoreBtn = document.getElementById('load-more-btn');
    const galleryContainer = document.getElementById('gallery-container');

    const images = [
        { src: 'images/Gallery/Couple.jpg', alt: 'Photo 4', link: 'https://drive.google.com/your-link-4' },
        { src: 'images/Gallery/Still-Life_1.jpg', alt: 'Photo 5', link: 'https://drive.google.com/your-link-5' },
        { src: 'images/Gallery/Still-Life_1.jpg', alt: 'Photo 6', link: 'https://drive.google.com/your-link-6' },
        { src: 'images/Gallery/photo7.jpg', alt: 'Photo 7', link: 'https://drive.google.com/your-link-7' },
        { src: 'images/Gallery/photo8.jpg', alt: 'Photo 8', link: 'https://drive.google.com/your-link-8' },
        { src: 'images/Gallery/photo9.jpg', alt: 'Photo 9', link: 'https://drive.google.com/your-link-9' },
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
                <a href="${image.link}" target="_blank">
                    <img src="${image.src}" alt="${image.alt}">
                </a>
            `;
            galleryContainer.appendChild(galleryItem);
            currentImageIndex++;
        }
    });
});
