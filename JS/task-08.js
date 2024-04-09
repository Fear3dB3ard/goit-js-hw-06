const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(loginForm);
  let isEmpty = false;
  formData.forEach((value) => {
    if (!value.trim()) {
      isEmpty = true;
    }
  });

  if (isEmpty) {
    alert("Please fill in all the fields.");
    return;
  }
  const formValues = {};
  formData.forEach((value, key) => {
    formValues[key] = value;
  });

  console.log(formValues);
  loginForm.reset();
});
