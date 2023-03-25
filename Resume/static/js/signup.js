// Validation Js

const form = document.getElementById('form');
const username = document.getElementById('floatingInput2');
const username2 = document.getElementById('floatingInput3');
const email = document.getElementById("floatingInput1");
const password = document.getElementById('floatingPassword');
const password2 = document.getElementById('floatingPassword_2');



// form.addEventListener('submit', e => {
//     e.preventDefault();
//     validateInputs();
// });

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerHTML = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    // const child = inputControl.getElementsByClassName("label_name")[0];
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function isValidPassword(password) {
    const pattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&\-_])[A-Za-z\d@$!%*#?&\-_]{8,}$/;
    return pattern.test(password);
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const usernameValue2 = username2.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if (emailValue === '') {
        setError(email, 'Email is required');
        return false;
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
        return false;
    } else {
        setSuccess(email);
    }


    if (usernameValue === '') {
        setError(username, 'First name is required');
        return false;
    } else if (usernameValue.indexOf(" ") !== -1) {
        setError(username, 'Firstname cannot contain spaces');
        return false;
    } else {
        setSuccess(username);
    }

    if (usernameValue2 === '') {
        setError(username2, 'Last Name is required');
        return false;
    } else if (usernameValue.indexOf(" ") !== -1) {
        setError(username2, 'Last Name cannot contain spaces');
        return false;
    } else {
        setSuccess(username2);
    }


    if (passwordValue === '') {
        setError(password, 'Password is required');
        return false;
    } else if ( !isValidPassword(passwordValue)) {
        setError(password , 'Password should contain ' +
            '8 characters' +
            '* one uppercase, ' +
            '* one lowercase and ' +
            '* one special character');
        return false;
    } else {
        setSuccess(password);
    }

    if (password2Value === '') {
        setError(password2, 'Please confirm your password');
        return false;
    } else if (password2Value !== passwordValue) {
        setError(password2, "Passwords doesn't match");
        return false;
    } else {
        setSuccess(password2);
        return true;
    }

};


// Password show js

function passwordShow() {
    let icon = document.getElementById('togglePassword_1')
    let x = document.getElementById('floatingPassword');
    if (x.type === "password") {
        x.type = "text";
        icon.classList.remove('bi-eye-slash');
        icon.classList.add('bi-eye');
    } else {
        x.type = "password"
        icon.classList.add('bi-eye-slash');
        icon.classList.remove('bi-eye');
    }
}

function passwordShow2() {
    let icon = document.getElementById('togglePassword_2')
    let x = document.getElementById('floatingPassword_2');
    if (x.type === "password") {
        x.type = "text";
        icon.classList.remove('bi-eye-slash');
        icon.classList.add('bi-eye');
    } else {
        x.type = "password"
        icon.classList.add('bi-eye-slash');
        icon.classList.remove('bi-eye');
    }
}
