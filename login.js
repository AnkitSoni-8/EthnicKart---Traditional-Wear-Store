// ==============================
// LOGIN FORM
// ==============================

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const remember = document.getElementById("remember").checked;

    // Admin Login Details
    const adminUsername = "admin";
    const adminPassword = "12345";

    if (username === adminUsername && password === adminPassword) {

        if (remember) {

            localStorage.setItem("username", username);

        } else {

            localStorage.removeItem("username");

        }

        alert("✅ Login Successful!");

        window.location.href = "index.html";

    } else {

        alert("❌ Invalid Admin Username or Password");

    }

});


// ==============================
// SHOW / HIDE PASSWORD
// ==============================

const togglePassword = document.getElementById("togglePassword");

togglePassword.addEventListener("click", function () {

    const password = document.getElementById("password");

    if (password.type === "password") {

        password.type = "text";

        this.innerHTML = '<i class="bi bi-eye-slash-fill"></i>';

    } else {

        password.type = "password";

        this.innerHTML = '<i class="bi bi-eye-fill"></i>';

    }

});


// ==============================
// REMEMBER USERNAME
// ==============================

window.onload = function () {

    const savedUser = localStorage.getItem("username");

    if (savedUser) {

        document.getElementById("username").value = savedUser;

        document.getElementById("remember").checked = true;

    }

};