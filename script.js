// Intersection Observer for scroll animations
document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.padding = "0.5rem 0";
            navbar.style.background = "rgba(9, 9, 11, 0.9)";
        } else {
            navbar.style.padding = "0rem 0";
            navbar.style.background = "rgba(9, 9, 11, 0.7)";
        }
    });
});
