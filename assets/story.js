document.addEventListener('DOMContentLoaded', () => {
    console.log("Agents Army: Initializing Genesis Script...");
    
    const storySteps = document.querySelectorAll('.story-step');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.5 });

    storySteps.forEach(step => observer.observe(step));
});
