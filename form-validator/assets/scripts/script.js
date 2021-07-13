const firstName = document.getElementById('firstname')
const lastName = document.getElementById('lastname')
const email = document.getElementById('email')
const password = document.getElementById('password')
const submitBtn = document.querySelector('button')
const firstNameErrorMsg = 'please enter your first name'
const firstNameErrorMsg2 = 'please enter a valid first name'
const lastNameErrorMsg = 'please enter your last name'
const lastNameErrorMsg2 = 'please enter a valid last name'
const emailErrorMsg = 'please enter your email address'
const emailErrorMsg2 = 'please enter a valid email address'
const passwordErrorMsg = 'please enter your password'
const passwordErrorMsg2 = 'Passwords must contain at least 6 characters'
let firstValidation = true

// test for valid name

function regexText(str) {
    const pattern = /^[A-Za-z]+$/;
    return pattern.test(str)
}

// validate first name

function validateFirstName() {
    const firstNameValue = firstName.value.trim();
    const firstNamePrevious = firstName.previousElementSibling;
    const firstNameParent = firstName.parentElement;
    const regexTestPassed = regexText(firstNameValue);

    if (firstNameValue === '')
    {
        firstNamePrevious.textContent = firstNameErrorMsg
        firstNameParent.classList.add('error')
    } else
    {
        if (!regexTestPassed)
        {
            firstNamePrevious.textContent = firstNameErrorMsg2
            firstNameParent.classList.add('error')
        } else
        {
            firstNameParent.classList.remove('error')
        }
    }
     // Event listener on input event
   if (firstValidation) {
    firstName.addEventListener('input', validateFirstName);
  }
}

// validate last name

function validateLastName() {
    const lastNameValue = lastName.value.trim();
    const lastNamePrevious = lastName.previousElementSibling;
    const lastNameParent = lastName.parentElement
    const regexTestPassed = regexText(lastNameValue)

    if (lastNameValue === '')
    {
        lastNamePrevious.textContent = lastNameErrorMsg
        lastNameParent.classList.add('error')
    } else
    {
        if (!regexTestPassed)
        {
            lastNamePrevious.textContent = lastNameErrorMsg2
            lastNameParent.classList.add('error')
        } else
        {
           lastNameParent.classList.remove('error') 
        }
    }

    if (firstValidation)
    {
        lastName.addEventListener('input', validateLastName)
    }
}

// test for a valid email address
function checkEmailFormat(email) {
    const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    return pattern.test(String(email).toLowerCase())

}

//validate email address
function validateEmailAddress() {
    const emailValue = email.value.trim()
    const emailPrevious = email.previousElementSibling
    const emailParent = email.parentElement
    const emailTestPassed = checkEmailFormat(emailValue)
    if (emailValue === '')
    {
        emailPrevious.textContent = emailErrorMsg
        emailParent.classList.add('error')
    } else
    {
        if (!emailTestPassed)
        {
            emailPrevious.textContent = emailErrorMsg2
            emailParent.classList.add('error')
        } else
        {
            emailParent.classList.remove('error')
        }
    }
    if (firstValidation)
    {
        email.addEventListener('input', validateEmailAddress)
    }
}

//validate password

function validatePassword() {
    const passwordValue = password.value.trim();
    const passwordPrevious = password.previousElementSibling;
    const passwordParent = password.parentElement;

    if (passwordValue === '' || (passwordValue.length > 0 && passwordValue.length < 6))
    {
        if (passwordValue === '')
        {
            passwordPrevious.textContent = passwordErrorMsg
        } else
        {
            passwordPrevious.textContent = passwordErrorMsg2
        }
        passwordParent.classList.add('error')
    } else
    {
        password.classList.remove('error')
    }
    
    if (firstValidation)
    {
    password.addEventListener('input', validatePassword)
}
}


function validateFormHandler() {
    validateFirstName();
    validateLastName();
    validateEmailAddress();
    validatePassword();
    firstValidation = false;
   
}
submitBtn.addEventListener('click', validateFormHandler)