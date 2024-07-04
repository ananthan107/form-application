// Function to validate form fields on form submission
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Fetch form values
    let fullName = document.getElementById('fullName').value.trim();
    let email = document.getElementById('email').value.trim();
    let phone = document.getElementById('phone').value.trim();
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;
  
    // Reset errors
    clearErrors();
  
    // Validation checks
    let isValid = true;
  
    // Validate Full Name
    if (fullName.length < 5) {
      isValid = false;
      showError('fullNameError', 'Name must be at least 5 characters');
    }
  
    // Validate Email ID
    if (!email.includes('@')) {
      isValid = false;
      showError('emailError', 'Enter a valid email address');
    }
  
    // Validate Phone Number
    if (phone.length !== 10 || phone === '1234567890') {
      isValid = false;
      showError('phoneError', 'Enter a valid 10-digit phone number');
    }
  
    // Validate Password
    if (password.length < 8 || password.toLowerCase() === 'password' || password.toLowerCase() === fullName.toLowerCase()) {
      isValid = false;
      showError('passwordError', 'Password must be at least 8 characters and should not be "password" or your name');
    }
  
    // Validate Confirm Password
    if (password !== confirmPassword) {
      isValid = false;
      showError('confirmPasswordError', 'Passwords do not match');
    }
  
    // If all validations pass, submit the form (or you can perform other actions here)
    if (isValid) {
      alert('Registration successful!');
      // Optionally, you can submit the form using JavaScript here
      // document.getElementById('registrationForm').submit();
    }
  });
  
  // Function to clear all error messages
  function clearErrors() {
    let errors = document.getElementsByClassName('error');
    for (let error of errors) {
      error.textContent = '';
    }
  }
  
  // Function to display error messages
  function showError(id, errorMessage) {
    let errorElement = document.getElementById(id);
    if (errorElement) {
      errorElement.textContent = errorMessage;
    }
  }
  
