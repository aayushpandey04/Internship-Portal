import { initializeApp } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyABorOcuj8UV4GMMJ3qUL3Do5lFRYxaySE",
  authDomain: "internship-portal-ddcb3.firebaseapp.com",
  projectId: "internship-portal-ddcb3",
  storageBucket: "internship-portal-ddcb3.firebasestorage.app",
  messagingSenderId: "287388548957",
  appId: "1:287388548957:web:2370cc6b4fa8e54096b2b4"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

window.goToApply = function () {
    window.location.href = "apply.html";
};

window.goHome = function () {
    window.location.href = "index.html";
};

window.submitForm = async function () {
    let name = document.getElementById("name") ? document.getElementById("name").value.trim() : "";
    let email = document.getElementById("email") ? document.getElementById("email").value.trim() : "";
    let phone = document.getElementById("phone") ? document.getElementById("phone").value.trim() : "";
    let gender = document.getElementById("gender") ? document.getElementById("gender").value : "";
    let college = document.getElementById("college") ? document.getElementById("college").value.trim() : "";
    let city = document.getElementById("city") ? document.getElementById("city").value.trim() : "";
    let level = document.getElementById("level") ? document.getElementById("level").value : "";
    let skills = document.getElementById("skills") ? document.getElementById("skills").value.trim() : "";
    let why = document.getElementById("why") ? document.getElementById("why").value.trim() : "";

    let errorEl = document.getElementById("error");

    if (!name || !email) {
        if (errorEl) errorEl.innerText = "Fill required fields (Name & Email)";
        return;
    }

    if (errorEl) errorEl.innerText = "Submitting...";

    try {
        await addDoc(collection(db, "applications"), {
            name,
            email,
            phone,
            gender,
            college,
            city,
            level,
            skills,
            why,
            time: new Date().toISOString()
        });

        window.location.href = "success.html";

    } catch (e) {
        console.error("Firestore submission error:", e);
        if (errorEl) {
            errorEl.innerText = "Error: " + e.message;
        } else {
            alert("Error submitting form: " + e.message);
        }
    }
};
