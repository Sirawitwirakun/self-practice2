const form = document.querySelector('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const message = document.querySelector('p');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value;
    const confirmPasswordValue = confirmPassword.value;
    
    message.textContent = "";
    message.style.color = "";
    
    if (!usernameValue || !emailValue || !passwordValue || !confirmPasswordValue) {
        message.textContent = 'missing some values, please try again!';
        message.style.color = 'red';
        return;
    }
    
    if (passwordValue !== confirmPasswordValue) {
        message.textContent = 'confirm password do not match, try again!';
        message.style.color = 'red';
        return;
    }
    
    message.textContent = 'Account Created!';
    message.style.color = 'green';
    
    form.reset();
});