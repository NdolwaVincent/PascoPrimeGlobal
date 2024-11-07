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