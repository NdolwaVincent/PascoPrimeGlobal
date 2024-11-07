document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    alert('Thank you for your message! We will get back to you soon.');
    this.reset(); // Reset the form fields after submission
});
// Optional JavaScript for additional interactivity
document.querySelectorAll('.skill-card').forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.backgroundColor = '#b2dfdb';
    });

    card.addEventListener('mouseout', () => {
        card.style.backgroundColor = '#ffffff';
    });
});

function toggleDrawer() {
    const drawer = document.getElementById('drawer');
    if (drawer.style.left === '0px') {
        drawer.style.left = '-250px'; // Hide drawer
    } else {
        drawer.style.left = '0px'; // Show drawer
    }
}

function loadPage(page) {
    const mainContent = document.getElementById('main-content');
    fetch(page)
        .then(response => response.text())
        .then(data => {
            mainContent.innerHTML = data;
            // Optional: Hide the drawer after loading the page
            toggleDrawer();
        })
        .catch(error => {
            console.error('Error loading page:', error);
            mainContent.innerHTML = '<h1>Error loading page.</h1>';
        });
}
