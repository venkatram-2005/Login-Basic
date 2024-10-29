function validateForm() {
    let isValid = true;

    // Clear previous error messages
    document.querySelectorAll('.error-message').forEach(el => el.style.display = 'none');

    // Username validation
    const username = document.getElementById('username').value;
    if (username.length < 5) {
        document.getElementById('usernameError').textContent = "Username must be at least 5 characters long.";
        document.getElementById('usernameError').style.display = 'block';
        isValid = false;
    }

    // Email validation
    const email = document.getElementById('email').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = "Please enter a valid email address.";
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    }

    // Password validation
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    if (!passwordPattern.test(password)) {
        document.getElementById('passwordError').innerText = 'Password must be at least 8 characters long, and include 1 uppercase letter, 1 lowercase letter, 1 digit, and 1 alphanumeric character.';
        document.getElementById('passwordError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('passwordError').style.display = 'none';
    }

    // Confirm Password validation
    const confirmPassword = document.getElementById('confirmPassword').value;
    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').textContent = "Passwords do not match.";
        document.getElementById('confirmPasswordError').style.display = 'block';
        isValid = false;
    }

    return isValid;
}
