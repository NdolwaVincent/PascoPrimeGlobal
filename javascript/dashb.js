function showSection(sectionId) {
  // Hide all sections
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => section.classList.remove('active'));

  // Show the clicked section
  document.getElementById(sectionId).classList.add('active');

  // Close the drawer if it is open on small screens
  if (window.innerWidth <= 768) {
    toggleDrawer();
  }
}

function toggleDrawer() {
  const drawer = document.getElementById('drawer');
  drawer.classList.toggle('open');
}
