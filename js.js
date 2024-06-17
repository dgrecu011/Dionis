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
// js.js

// Funcție pentru redirecționarea către pagina principală
function redirectToHomePage() {
  window.location.href = "index.html"; // Schimbă "index.html" cu adresa paginii principale
}

// Funcție apelată când înregistrarea este completă cu succes
function onRegistrationSuccess() {
  redirectToHomePage(); // Redirecționează către pagina principală
}

// Funcție apelată când conectarea este completă cu succes
function onLoginSuccess() {
  redirectToHomePage(); // Redirecționează către pagina principală
}

// Funcție pentru validarea formularului de conectare
function validateLoginForm() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var emailFeedback = document.getElementById("emailFeedback");
  var passwordFeedback = document.getElementById("passwordFeedback");
  var isValid = true;

  if (!email || !email.includes("@")) {
    emailFeedback.textContent = "Introduceți o adresă de email validă.";
    emailFeedback.style.display = "block";
    isValid = false;
  } else {
    emailFeedback.style.display = "none";
  }

  if (password.length < 6) {
    passwordFeedback.textContent =
      "Parola trebuie să conțină cel puțin 6 caractere.";
    passwordFeedback.style.display = "block";
    isValid = false;
  } else {
    passwordFeedback.style.display = "none";
  }

  return isValid;
}

// Eveniment pentru submit formular de conectare
document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    if (!validateLoginForm()) {
      event.preventDefault(); // Oprire trimitere formular dacă validarea nu trece
    } else {
      onLoginSuccess(); // Apel funcție de succes pentru conectare
    }
  });

// Funcție pentru validarea formularului de înregistrare
function validateRegisterForm() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;
  var emailFeedback = document.getElementById("emailFeedback");
  var passwordFeedback = document.getElementById("passwordFeedback");
  var confirmPasswordFeedback = document.getElementById(
    "confirmPasswordFeedback"
  );
  var isValid = true;

  if (!email || !email.includes("@")) {
    emailFeedback.textContent = "Introduceți o adresă de email validă.";
    emailFeedback.style.display = "block";
    isValid = false;
  } else {
    emailFeedback.style.display = "none";
  }

  if (password.length < 6) {
    passwordFeedback.textContent =
      "Parola trebuie să conțină cel puțin 6 caractere.";
    passwordFeedback.style.display = "block";
    isValid = false;
  } else {
    passwordFeedback.style.display = "none";
  }

  if (password !== confirmPassword) {
    confirmPasswordFeedback.textContent = "Parolele nu coincid.";
    confirmPasswordFeedback.style.display = "block";
    isValid = false;
  } else {
    confirmPasswordFeedback.style.display = "none";
  }

  return isValid;
}

// Eveniment pentru submit formular de înregistrare
document
  .getElementById("registerForm")
  .addEventListener("submit", function (event) {
    if (!validateRegisterForm()) {
      event.preventDefault(); // Oprire trimitere formular dacă validarea nu trece
    } else {
      onRegistrationSuccess(); // Apel funcție de succes pentru înregistrare
    }
  });
