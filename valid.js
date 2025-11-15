// ---------------------------------------------------------
// auth.js — Background Access Verification (Invisible Mode)
// ---------------------------------------------------------

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getDatabase, ref, get } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

// 🔥 Firebase Configuration
const secureFirebaseConfig = {
  apiKey: "AIzaSyBtB199eH6fONCftI_B6IDP80_0Tv2dFN8",
  authDomain: "m-sales-45b35.firebaseapp.com",
  databaseURL: "https://m-sales-45b35-default-rtdb.firebaseio.com",
  projectId: "m-sales-45b35",
  storageBucket: "m-sales-45b35.appspot.com",
  messagingSenderId: "194892525308",
  appId: "1:194892525308:web:c01af3028c85abdb97f179"
};

// ✅ Initialize Firebase
const secureApp = initializeApp(secureFirebaseConfig);
const secureDb = getDatabase(secureApp);

// ✅ System-wide access token
const GLOBAL_ACCESS_TOKEN = "778899";

// ✅ Access Check Function
async function runInvisibleAccessCheck() {
  try {
    const tokenRef = ref(secureDb, "DailyPayments/" + GLOBAL_ACCESS_TOKEN);
    const tokenSnap = await get(tokenRef);

    if (!tokenSnap.exists()) {
      console.warn("⚠️ Access token missing. Redirecting...");
      window.location.href = "index.html";
      return;
    }

    const tokenData = tokenSnap.val();
    const expiryTime = new Date(tokenData.expiry);
    const currentTime = new Date();

    if (currentTime > expiryTime) {
      console.log("⏰ Access expired.");
      window.location.href = "index.html";
      return;
    }

    // Valid access
    console.log(`✅ Access active until: ${expiryTime.toDateString()}`);
  } catch (err) {
    console.error("❌ Access verification failed:", err);
    window.location.href = "index.html"; // Safety fallback
  }
}

// ⏱️ Run Immediately + Every 5 Minutes
runInvisibleAccessCheck();
setInterval(runInvisibleAccessCheck, 5 * 60 * 1000);
