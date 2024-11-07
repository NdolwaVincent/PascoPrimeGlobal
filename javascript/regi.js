function validateRegisterForm() {
    const username = document.getElementById('username').value.trim();
    const phoneNumber = document.getElementById('phoneNumber').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (!username || !phoneNumber || !email || !password || !confirmPassword) {
        alert("All fields are required.");
        return false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // Phone validation (optional)
    const phoneRegex = /^[0-9]{10}$/; // Adjust this for your region's phone format
    if (!phoneRegex.test(phoneNumber)) {
        alert("Please enter a valid phone number (10 digits).");
        return false;
    }

    // Password match validation
    if (password !== confirmPassword) {
        alert("Passwords do not match."); 
        return false;
    }

    alert("Registration successful!");
    return true; // Form is valid
}