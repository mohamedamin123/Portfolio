AOS.init();

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Message envoyé ! Merci pour votre contact.");
  this.reset();
});
  function toggleMenu() {
    const links = document.getElementById("nav-links");
    links.classList.toggle("show");
  }
