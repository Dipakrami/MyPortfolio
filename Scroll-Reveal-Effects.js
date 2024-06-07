document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.experience-item');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once it's visible
            }
        });
    }, { threshold: 0.1 });

    items.forEach((item, index) => {
        setTimeout(() => {
            observer.observe(item);
        }, index * 200); // Delay the observation by 200ms for each subsequent item
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const toolItems = document.querySelectorAll('.tool-item, .tool-item-1');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once it's visible
            }
        });
    }, { threshold: 0.1 });

    toolItems.forEach((item, index) => {
        setTimeout(() => {
            observer.observe(item);
        }, index * 200); // Delay the observation by 200ms for each subsequent item
    });
});
