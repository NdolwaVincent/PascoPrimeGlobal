<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBtB199eH6fONCftI_B6IDP80_0Tv2dFN8",
    authDomain: "m-sales-45b35.firebaseapp.com",
    databaseURL: "https://m-sales-45b35-default-rtdb.firebaseio.com",
    projectId: "m-sales-45b35",
    storageBucket: "m-sales-45b35.appspot.com",
    messagingSenderId: "194892525308",
    appId: "1:194892525308:web:1ed25a30f2759c1a97f179",
    measurementId: "G-RF5LE4H82E"
  };

  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const database = firebase.database(); // Realtime Database reference

// DOM elements
const registerForm = document.getElementById('register-form');
const loginForm = document.getElementById('login-form');
const dashboard = document.getElementById('dashboard');
const registerName = document.getElementById('register-name');
const registerEmail = document.getElementById('register-email');
const registerPassword = document.getElementById('register-password');
const loginEmail = document.getElementById('login-email');
const loginPassword = document.getElementById('login-password');
const logoutBtn = document.getElementById('logout-btn');
const gotoLogin = document.getElementById('goto-login');
const gotoRegister = document.getElementById('goto-register');

// Event listeners
document.getElementById('register-form-element').addEventListener('submit', handleRegister);
document.getElementById('login-form-element').addEventListener('submit', handleLogin);
logoutBtn.addEventListener('click', handleLogout);
gotoLogin.addEventListener('click', showLoginForm);
gotoRegister.addEventListener('click', showRegisterForm);

// Show Login Form
function showLoginForm() {
    registerForm.style.display = 'none';
    loginForm.style.display = 'block';
}

// Show Register Form
function showRegisterForm() {
    loginForm.style.display = 'none';
    registerForm.style.display = 'block';
}

// Handle User Registration
async function handleRegister(event) {
    event.preventDefault();
    
    const name = registerName.value;
    const email = registerEmail.value;
    const password = registerPassword.value;
    
    try {
        // Create user with email and password
        const userCredential = await auth.createUserWithEmailAndPassword(email, password);
        const user = userCredential.user;

        // Now write the user data to Firebase Realtime Database
        await database.ref('users/' + user.uid).set({
            username: name,
            email: email,
            createdAt: new Date().toISOString(),
        });

        alert('User registered and data added to Realtime Database!');
        showLoginForm();
    } catch (error) {
        alert(error.message);
    }
}

// Handle User Login
async function handleLogin(event) {
    event.preventDefault();
    
    const email = loginEmail.value;
    const password = loginPassword.value;
    
    try {
        await auth.signInWithEmailAndPassword(email, password);
        alert('Login successful!');
        showDashboard();
    } catch (error) {
        alert(error.message);
    }
}

// Show Dashboard after successful login
function showDashboard() {
    loginForm.style.display = 'none';
    dashboard.style.display = 'block';
}

// Handle Logout
async function handleLogout() {
    try {
        await auth.signOut();
        alert('Logged out successfully!');
        window.location.reload();
    } catch (error) {
        alert(error.message);
    }
}

// Listen for authentication state changes
auth.onAuthStateChanged(user => {
    if (user) {
        showDashboard();
    } else {
        showLoginForm();
    }
});
</script>