function goToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Mesajul a fost trimis cu succes!");
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
  });
document;

document.addEventListener("DOMContentLoaded", function () {
  const registerForm = document.getElementById("registerForm");
  const loginForm = document.getElementById("loginForm");

  if (registerForm) {
    registerForm.addEventListener("submit", function (event) {
      event.preventDefault();
      validateRegistrationForm();
    });
  }

  if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault();
      validateLoginForm();
    });
  }
});

function validateRegistrationForm() {
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const confirmPasswordInput = document.getElementById("confirmPassword");

  const emailFeedback = document.getElementById("emailFeedback");
  const passwordFeedback = document.getElementById("passwordFeedback");
  const confirmPasswordFeedback = document.getElementById(
    "confirmPasswordFeedback"
  );

  let valid = true;

  if (!isValidEmail(emailInput.value)) {
    emailFeedback.textContent = "Adresă de email invalidă";
    emailFeedback.classList.add("invalid-feedback");
    emailInput.classList.add("is-invalid");
    valid = false;
  } else {
    emailFeedback.textContent = "";
    emailFeedback.classList.remove("invalid-feedback");
    emailInput.classList.remove("is-invalid");
  }

  if (passwordInput.value.length < 8) {
    passwordFeedback.textContent =
      "Parola trebuie să aibă cel puțin 8 caractere";
    passwordFeedback.classList.add("invalid-feedback");
    passwordInput.classList.add("is-invalid");
    valid = false;
  } else {
    passwordFeedback.textContent = "";
    passwordFeedback.classList.remove("invalid-feedback");
    passwordInput.classList.remove("is-invalid");
  }

  if (confirmPasswordInput.value !== passwordInput.value) {
    confirmPasswordFeedback.textContent = "Parolele nu se potrivesc";
    confirmPasswordFeedback.classList.add("invalid-feedback");
    confirmPasswordInput.classList.add("is-invalid");
    valid = false;
  } else {
    confirmPasswordFeedback.textContent = "";
    confirmPasswordFeedback.classList.remove("invalid-feedback");
    confirmPasswordInput.classList.remove("is-invalid");
  }

  if (valid) {
    document.getElementById("registerForm").submit();
  }
}

function validateLoginForm() {
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");

  const emailFeedback = document.getElementById("emailFeedback");
  const passwordFeedback = document.getElementById("passwordFeedback");

  let valid = true;

  if (!isValidEmail(emailInput.value)) {
    emailFeedback.textContent = "Adresă de email invalidă";
    emailFeedback.classList.add("invalid-feedback");
    emailInput.classList.add("is-invalid");
    valid = false;
  } else {
    emailFeedback.textContent = "";
    emailFeedback.classList.remove("invalid-feedback");
    emailInput.classList.remove("is-invalid");
  }

  if (passwordInput.value.length < 8) {
    passwordFeedback.textContent =
      "Parola trebuie să aibă cel puțin 8 caractere";
    passwordFeedback.classList.add("invalid-feedback");
    passwordInput.classList.add("is-invalid");
    valid = false;
  } else {
    passwordFeedback.textContent = "";
    passwordFeedback.classList.remove("invalid-feedback");
    passwordInput.classList.remove("is-invalid");
  }

  if (valid) {
    document.getElementById("loginForm").submit();
  }
}

function isValidEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}
