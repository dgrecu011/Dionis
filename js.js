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
document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    var emailInput = document.getElementById("email");
    var passwordInput = document.getElementById("password");
    var emailFeedback = document.getElementById("emailFeedback");
    var passwordFeedback = document.getElementById("passwordFeedback");

    if (!emailInput.validity.valid) {
      emailFeedback.textContent = "Te rog introdu o adresă de email validă.";
      emailFeedback.style.display = "block";
      event.preventDefault();
    } else {
      emailFeedback.style.display = "none";
    }

    if (!passwordInput.validity.valid) {
      passwordFeedback.textContent = "Te rog introdu o parolă.";
      passwordFeedback.style.display = "block";
      event.preventDefault();
    } else {
      passwordFeedback.style.display = "none";
    }
  });
