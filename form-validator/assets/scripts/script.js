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

function validateFormHandler() {
    validateFirstName();
    firstValidation = false;
    console.log('posted')
}
submitBtn.addEventListener('click', validateFormHandler)