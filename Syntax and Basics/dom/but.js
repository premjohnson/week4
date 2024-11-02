
const form = document.getElementById('dynamicForm');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');


const toggleBtn = document.getElementById('toggleBtn');
const modifyFormBtn = document.getElementById('modifyFormBtn');
const resetBtn = document.getElementById('resetBtn');


const usernameError = document.getElementById('usernameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');


const originalPlaceholders = {
    username: usernameInput.placeholder,
    email: emailInput.placeholder,
    password: passwordInput.placeholder
};


toggleBtn.addEventListener('click', function() {

    this.classList.toggle('btn-active');

    if (this.classList.contains('btn-primary')) {
        this.classList.remove('btn-primary');
        this.classList.add('btn-success');
    } else {
        this.classList.remove('btn-success');
        this.classList.add('btn-primary');
    }
});


modifyFormBtn.addEventListener('click', function() {

    usernameInput.placeholder = "Type your username here...";
    emailInput.placeholder = "your.email@example.com";
    passwordInput.placeholder = "Min 6 characters required";
    

    usernameInput.setAttribute('data-validation', 'required');
    emailInput.setAttribute('data-type', 'email');
    passwordInput.setAttribute('minlength', '6');

    validateInput(usernameInput, usernameError);
    validateInput(emailInput, emailError);
    validateInput(passwordInput, passwordError);
});

resetBtn.addEventListener('click', function() {
s
    usernameInput.placeholder = originalPlaceholders.username;
    emailInput.placeholder = originalPlaceholders.email;
    passwordInput.placeholder = originalPlaceholders.password;
    

    usernameInput.removeAttribute('data-validation');
    emailInput.removeAttribute('data-type');
    passwordInput.removeAttribute('minlength');
    

    const inputs = [usernameInput, emailInput, passwordInput];
    const errors = [usernameError, emailError, passwordError];
    
    inputs.forEach(input => input.classList.remove('input-error'));
    errors.forEach(error => error.style.display = 'none');
    

    form.reset();
});


function validateInput(input, errorElement) {
    const value = input.value.trim();
    let hasError = false;
    
    if (input === passwordInput && value.length < 6) {
        hasError = true;
    } else if (input === emailInput && !value.includes('@')) {
        hasError = true;
    } else if (input === usernameInput && value.length < 3) {
        hasError = true;
    }
    
    if (hasError) {
        input.classList.add('input-error');
        errorElement.style.display = 'block';
    } else {
        input.classList.remove('input-error');
        errorElement.style.display = 'none';
    }
}


usernameInput.addEventListener('input', () => validateInput(usernameInput, usernameError));
emailInput.addEventListener('input', () => validateInput(emailInput, emailError));
passwordInput.addEventListener('input', () => validateInput(passwordInput, passwordError));