<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyABorOcuj8UV4GMMJ3qUL3Do5lFRYxaySE",
    authDomain: "internship-portal-ddcb3.firebaseapp.com",
    projectId: "internship-portal-ddcb3",
    storageBucket: "internship-portal-ddcb3.firebasestorage.app",
    messagingSenderId: "287388548957",
    appId: "1:287388548957:web:2370cc6b4fa8e54096b2b4",
    measurementId: "G-W538342FVS"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
