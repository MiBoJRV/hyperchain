// script.js

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('signUpForm');
    const emailInput = document.getElementById('email');
    const errorMessage = document.getElementById('error-message');

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const email = emailInput.value;
        if (validateEmail(email)) {
            errorMessage.style.display = 'none';
            console.log('Email valid, form submitted:', email);
            // Тут можна додати код для подальшої обробки даних
            // Наприклад, AJAX запит для відправки даних на сервер
        } else {
            errorMessage.textContent = 'Please enter a valid email address.';
            errorMessage.style.display = 'block';
        }
    });
});
