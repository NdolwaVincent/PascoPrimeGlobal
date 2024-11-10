// Firebase configuration (replace with your own Firebase project config)
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
const database = firebase.database();

// Toggle between Login and Register forms
function toggleForms() {
  document.getElementById('login-form').classList.toggle('hidden');
  document.getElementById('register-form').classList.toggle('hidden');
}

// Register a new user
function registerUser() {
  const username = document.getElementById('registerUsername').value;
  const email = document.getElementById('registerEmail').value;
  const phone = document.getElementById('registerPhone').value;
  const password = document.getElementById('registerPassword').value;
  const confirmPassword = document.getElementById('registerConfirmPassword').value;
  const referredBy = document.getElementById('registerReferredBy').value;

  // Basic validation
  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  // Check if username already exists in the database
  firebase.database().ref('users/' + username).get().then(snapshot => {
    if (snapshot.exists()) {
      alert("Username already exists. Please choose another one.");
    } else {
      // Save new user data in Firebase Realtime Database
      firebase.database().ref('users/' + username).set({
        email: email,
        phone: phone,
        password: password,
        referredBy: referredBy
      }).then(() => {
        alert("Registration successful! Please log in.");
        toggleForms(); // Show login form
      }).catch(error => {
        alert("Error: " + error.message);
      });
    }
  });
}

// Login an existing user
function loginUser() {
  const username = document.getElementById('loginUsername').value;
  const password = document.getElementById('loginPassword').value;

  // Check if user exists and password matches
  firebase.database().ref('users/' + username).get().then(snapshot => {
    if (snapshot.exists() && snapshot.val().password === password) {
      alert("Login successful! Redirecting to dashboard...");
      window.location.href = 'dashboard.html'; // Redirect to dashboard
    } else {
      alert("Invalid username or password.");
    }
  }).catch(error => {
    alert("Error: " + error.message);
  });
}
