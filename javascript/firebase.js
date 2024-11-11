// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
//  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-analytics.js";
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
    appId: "1:194892525308:web:c01af3028c85abdb97f179",
    measurementId: "G-ML4GT4MMKV"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

function toggleForm() {
    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");
    const formTitle = document.getElementById("form-title");

    if (loginForm.style.display === "none") {
        loginForm.style.display = "block";
        registerForm.style.display = "none";
        formTitle.innerText = "Login";
    } else {
        loginForm.style.display = "none";
        registerForm.style.display = "block";
        formTitle.innerText = "Register";
    }
}

function showError(inputId, message) {
    const errorElement = document.getElementById(inputId + "-error");
    errorElement.innerText = message;
}

function clearErrors() {
    document.querySelectorAll(".error").forEach((element) => {
        element.innerText = "";
    });
}

function validateRegisterForm() {
    clearErrors();
    let valid = true;

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (username === "") {
        showError("username", "Username is required");
        valid = false;
    }
    if (email === "") {
        showError("email", "Email is required");
        valid = false;
    }
    if (phone === "" || !/^\d{10}$/.test(phone)) {
        showError("phone", "Valid phone number is required");
        valid = false;
    }
    if (password === "" || password.length < 6) {
        showError("password", "Password must be at least 6 characters");
        valid = false;
    }
    if (password !== confirmPassword) {
        showError("confirm-password", "Passwords do not match");
        valid = false;
    }

    return valid;
}

function validateLoginForm() {
    clearErrors();
    let valid = true;

    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;

    if (username === "") {
        showError("login-username", "Username is required");
        valid = false;
    }
    if (password === "") {
        showError("login-password", "Password is required");
        valid = false;
    }

    return valid;
}

function registerUser() {
    if (validateRegisterForm()) {
        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const password = document.getElementById("password").value;
        const referredBy = document.getElementById("referred-by").value;

        firebase.database().ref("users/" + username).set({
            email: email,
            phone: phone,
            password: password,
            referredBy: referredBy
        }).then(() => {
            alert("Registration successful!");
            toggleForm();
        }).catch((error) => {
            alert("Error: " + error.message);
        });
    }
}

function loginUser() {
    if (validateLoginForm()) {
        const username = document.getElementById("login-username").value;
        const password = document.getElementById("login-password").value;

        firebase.database().ref("users/" + username).get().then((snapshot) => {
            if (snapshot.exists()) {
                const userData = snapshot.val();
                if (userData.password === password) {
                    alert("Login successful!");
                    // Redirect to dashboard or home page
                } else {
                    showError("login-password", "Incorrect password");
                }
            } else {
                showError("login-username", "User does not exist");
            }
        }).catch((error) => {
            alert("Error: " + error.message);
        });
    }
}
