const textEmail = document.querySelectorAll(".login-form input")[0];
const textPassword = document.querySelectorAll(".login-form input")[1];

const formEl = document.querySelector(".login-form");

const onFormSubmit = (event) => {
  event.preventDefault();
  if (textEmail.value.trim() === "" || textPassword.value.trim() === "") {
    alert("All form fields must be filled in");
  } else {
    const formData = {
      email: formEl.elements.email.value.trim(),
      password: formEl.elements.password.value.trim(),
    };
    console.log(formData);
    formEl.reset();
  }
};
formEl.addEventListener("submit", onFormSubmit);
// ==== for styles like in Figma=====
textEmail.classList.add("user-email");
textPassword.classList.add("user-password");
const btnSub = document.querySelector(".login-form button");
btnSub.classList.add("button-sub");
