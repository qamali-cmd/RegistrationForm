document.getElementById('registrationForm').addEventListener('submit', function(e) {
    let isValid = true;
    
    // 1. Validation Patterns
    const namePattern = /^[A-Za-z\s]+$/;
    const passPattern = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Checks for something@domain.com

    // 2. Select fields
    const firstName = document.getElementById('first_name');
    const lastName = document.getElementById('last_name');
    const email = document.getElementById('email');
    const pass = document.getElementById('password');
    const conf = document.getElementById('confirm_password');

    // Reset styles
    document.querySelectorAll('.error-msg').forEach(msg => msg.style.display = 'none');
    document.querySelectorAll('input, select').forEach(input => input.classList.remove('invalid'));

    // 3. Perform Checks
    
    // Email Validation (Checking for @)
    if (!emailPattern.test(email.value)) {
        email.classList.add('invalid');
        document.getElementById('err_email').style.display = 'block';
        isValid = false;
    }

    // First Name
    if (!namePattern.test(firstName.value)) {
        firstName.classList.add('invalid');
        document.getElementById('err_first_name').style.display = 'block';
        isValid = false;
    }

    // Last Name
    if (!namePattern.test(lastName.value)) {
        lastName.classList.add('invalid');
        document.getElementById('err_last_name').style.display = 'block';
        isValid = false;
    }

    // Password Complexity
    if (!passPattern.test(pass.value)) {
        pass.classList.add('invalid');
        document.getElementById('err_password').style.display = 'block';
        isValid = false;
    }

    // Password Match
    if (pass.value !== conf.value || conf.value === "") {
        conf.classList.add('invalid');
        document.getElementById('err_confirm').style.display = 'block';
        isValid = false;
    }

    // 4. Stop submission if errors exist
    if (!isValid) {
        e.preventDefault();
        e.stopImmediatePropagation();
        alert("Please correct the errors marked in red.");
        return false;
    }

    alert("Registration Successful!");
});