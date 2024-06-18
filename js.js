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
