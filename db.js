const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get('username');

    // Display username
    const profileName = document.getElementById('profileName');
    if (username) {
      profileName.textContent = `Hello, ${username}!`;
    } else {
      profileName.textContent = 'Hello, Guest!';
    }