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
    document.querySelector('.menu-toggle').addEventListener('click', function() {
        document.querySelector('.nav-links').classList.toggle('active');
        document.body.classList.toggle('menu-open'); // Toggle body class for no scroll
    });
});
