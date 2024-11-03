// JavaScript can be added here for future interactivity
// For example, toggle between languages if needed.
document.querySelector('.language-toggle').addEventListener('click', () => {
    alert('Language toggle feature coming soon!');
});

const images = document.querySelectorAll('.hover-image');
const textOverlay = document.querySelector('.text-overlay');

images.forEach(image => {
    image.addEventListener('mouseenter', () => {
        textOverlay.classList.add('outline');
        images.forEach(img => {
            if (img !== image) {
                img.classList.add('transparent');
            }
        });
    });

    image.addEventListener('mousemove', (e) => {
        // Make the image follow the cursor
        const rect = image.getBoundingClientRect();
        image.style.transform = `translate(${e.clientX - rect.left - rect.width / 2}px, ${e.clientY - rect.top - rect.height / 2}px) scale(1.1)`;
    });

    image.addEventListener('mouseleave', () => {
        textOverlay.classList.remove('outline');
        images.forEach(img => {
            img.classList.remove('transparent');
            img.style.transform = ''; // Reset position
        });
    });
});


