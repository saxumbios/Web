document.getElementById("login-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Add a proper authentication system here
    if (username === "user" && password === "password") {
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid credentials");
    }
});
