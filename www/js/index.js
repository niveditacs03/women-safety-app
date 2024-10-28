// signup.js
document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent form submission

    const username = document.getElementById("username").value;
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const errorMessage = document.getElementById("signup-error-message");

    // Simple validation
    if (password !== confirmPassword) {
        errorMessage.textContent = "Passwords do not match.";
    } else {
        alert("Sign up successful!");
        errorMessage.textContent = "";
        // Here, you can add code to send the signup data to your server
    }
});
