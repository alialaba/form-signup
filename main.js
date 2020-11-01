const form = document.getElementById('form');
const name1 = document.getElementById('name1');
const name2 = document.getElementById('name2');
const email = document.getElementById('mail');
const password = document.getElementById('pwd1');
const password2 = document.getElementById('pwd2');
const checkBox = document.getElementById('check')

// sign in
const formLogin = document.getElementById('form2')
const emailLogin = document.getElementById('mail2')
const passLogin = document.getElementById('pwd3')

if (form !== null) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        checkInputs()
    })

} else {
    formLogin.addEventListener('submit', (e) => {
        e.preventDefault();

        checkLoginInputs()
    })
}





function checkLoginInputs() {
    let emailLoginValue = emailLogin.value.trim();
    let passLoginValue = passLogin.value.trim();

    if (emailLoginValue === '') {
        setErrorFor(emailLogin, 'Email cannot be blank')
    } else if (!validateEmail(emailLoginValue)) {
        setErrorFor(emailLogin, 'Email is invalid')
    } else {
        setSuccess(emailLogin);
    }
    if (passLoginValue < 8) {
        setErrorFor(passLogin, 'Incorrect password');
    } else {
        setSuccess(passLogin)
        setTimeout(() => {
            alert('Login Succssfully');
            location.reload();
        }, 1000);
    }

}

function checkInputs() {
    // let name1Value = name1.value.trim();
    // let name2Value = name2.value.trim();
    let emailValue = email.value.trim();
    let passwordValue = password.value.trim();
    let password2Value = password2.value.trim();
    let checkBoxValue = checkBox.checked;


    if (emailValue === "") {
        setErrorFor(email, 'Email cannot be blank');
    } else if (!validateEmail(emailValue)) {
        setErrorFor(email, 'Email is not Valid')
    } else {
        setSuccess(email)
    }

    if (passwordValue === "") {
        setErrorFor(password, 'Password cannot be blank');
    } else if (passwordValue.length < 8) {
        setErrorFor(password, 'Password should be 8 characters long')
    } else {
        setSuccess(password)
    }
    if (password2Value === "") {
        setErrorFor(password2, 'Confirm Password cannot be blank');
    } else if (password2Value !== passwordValue) {
        setErrorFor(password2, 'Password does not match');
    } else {
        setSuccess(password2)
    }
    if (checkBoxValue === false) {
        setErrorFor(check, 'You have to agree');
    } else {
        setSuccess(check)
        setTimeout(function() {
            alert('Sign Up successfully')
            location.reload();
        }, 1000)
    }
}



function setErrorFor(input, message) {
    const fieldInput = input.parentElement; //.field form
    const small = fieldInput.querySelector('small');
    //add error message inside small
    small.innerText = message;

    //add error class
    fieldInput.className = 'field error'
}

function setSuccess(input) {
    const fieldInput = input.parentElement; //.field form
    fieldInput.className = 'field success'
}

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}