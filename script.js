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
}

window.goHome = function () {
    window.location.href = "index.html";
}

window.submitForm = async function () {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let skills = document.getElementById("skills").value;

    if (!name || !email) {
        document.getElementById("error").innerText = "Please fill all required fields";
        return;
    }

    try {
        await addDoc(collection(db, "applications"), {
            name: name,
            email: email,
            phone: phone,
            skills: skills,
            time: new Date()
        });

        window.location.href = "success.html";

    } catch (error) {
        alert("Error submitting form");
        console.error(error);
    }
};
