const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved theme preference in local storage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.toggle('light-mode', savedTheme === 'light');
    themeToggle.checked = savedTheme === 'light';
}

// Toggle theme when checkbox changes
themeToggle.addEventListener('change', () => {
    body.classList.toggle('light-mode', themeToggle.checked);
    localStorage.setItem('theme', themeToggle.checked ? 'light' : 'dark');
});


// Function to check if an element is in view
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to add the fade-in-up class when the element is in view
function handleScroll() {
    const elements = document.querySelectorAll('.fade-in-up');
    elements.forEach((el) => {
        if (isElementInViewport(el)) {
            el.classList.add('active'); // This is the class that triggers the animation
        }
    });
}

// Event listener for scroll events
window.addEventListener('scroll', handleScroll);

// Initial check in case elements are in view on load
handleScroll();

document.getElementById('theme-toggle').addEventListener('change', function() {
    document.body.classList.toggle('light-mode', this.checked);
});