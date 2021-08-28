const hamburger = document.querySelector(".hamburger-container");
const navLinks = document.querySelector(".navbar__links");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("hamburger-open");
  if (hamburger.classList.contains("hamburger-open")) {
    navLinks.classList.add("ham-links");
    navLinks.classList.remove("desktop-links");
  } else {
    navLinks.classList.add("desktop-links");
    navLinks.classList.remove("ham-links");
  }
});
