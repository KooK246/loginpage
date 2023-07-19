const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
var passCheck = 0;
var mailCheck = 0;

// show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

// show success message
function showSuccess(input) {
  formControl = input.parentElement;
  formControl.className = 'form-control success';
}

//check email is valid
function checkEmail(input) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
    mailCheck = 1;
  } else {
    showError(input, 'E-mail is not valid');
  }
}

//check required fields
function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === '') {
      showError(input, `${fieldCheck(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

//check input lenght
function lengthCheck(input, min, max) {
  if (input.value.length < min) {
    showError(input, `${fieldCheck(input)} must be at least ${min} characters`);
  } else if (input.value.length > max) {
    showError(input, `${fieldCheck(input)} must be less than ${max} characters`);
  } else {
    showSuccess(input);
  }
}

// check passwords match

function passwordCheck(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, 'Passwords do not match');
  }
  if ((input1.value == input2.value) && (input1.value.length >= 6)) {
    passCheck = 1;
  }
}

// Get fieldname
function fieldCheck(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}



// Event listeners
form.addEventListener('submit', function (e) {
  e.preventDefault();

  checkRequired([username, email, password, password2]);
  lengthCheck(username, 3, 15);
  lengthCheck(password, 6, 25);
  checkEmail(email);
  passwordCheck(password, password2);

  if ((passCheck = 1) && (mailCheck == 1)) {
    window.location.href = "https://keen-pudding-2e2d69.netlify.app";
  }

});

