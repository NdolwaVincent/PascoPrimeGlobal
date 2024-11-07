function validateLoginForm() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('loginPassword').value.trim();

    if (!username || !password) {
        alert("Both email and password are required.");
        return false;
    }

    /*// Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    alert("Login successful!");
    return true;
*/     // Form is valid
}