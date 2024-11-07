function loadSection(page){
    fetch(page)
    .then(response => response.text())
    .then(data=>{
        document.getElementById("content").innerHTML = data;

    })
    .catch(error => console.error("Error loading content",error));
}


// Validation for Login Form

document.addEventListener('DOMContentLoaded', () => {
    const mainContent = document.getElementById('main-section');
   // const sidebarItems = document.querySelectorAll('.drawer-item');

    // Define content for each page
    const pages = {
        overview: `<h2>Overview</h2><p>Welcome to the overview section. Here you can see the latest stats and insights.</p>`,
        services: `<h2>Services</h2><p>Explore the services we offer to our clients.</p>`,
        projects: `<h2>Projects</h2><p>Here are some of the projects we're currently working on.</p>`,
        team: `<h2>Team</h2><p>Meet the amazing team members at Vincent Company.</p>`,
        settings: `<h2>Settings</h2><p>Adjust your settings here for a personalized experience.</p>`,
        logout: `<h2>Logout</h2><p>Thank you for visiting the dashboard. You have been logged out.</p>`
    };
    document.querySelectorAll(".drawer-item").forEach(item =>){
        item.addEventListener("click",(event) =>{
            event.preventDefault();
            const sectionId = event.target.id;
            if (content[sectionId]) {
                main-section.innerHTML=content[sectionId]
            }

        });
    }


    // Add click event listener to each sidebar item
    /*sidebarItems.forEach(item => {
        item.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent page reload
            const page = event.target.getAttribute('data-page');
            
            // Load corresponding content into main content area
            mainContent.innerHTML = pages[page] || `<p>Page not found.</p>`;

            // Additional action on logout
            if (page === 'logout') {
                setTimeout(() => {
                    window.location.href = 'login.html';
                }, 1000); // Redirect to login page after 1 second
            }
        });
    });*/
});
