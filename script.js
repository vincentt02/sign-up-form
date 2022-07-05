//check if both passwords match
var password = document.getElementById("password"),
  confirmPassword = document.getElementById("confirm_password");

const validatePassword = () => {
  if (password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
  } else {
    confirm_password.setCustomValidity("");
  }
};

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;
