const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance:"50px",
  origin:"bottom",
  duration:1000,
};
ScrollReveal().reveal(".header-container h1",{
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header-container form",{
  ...scrollRevealOption,
  delay:500,
});
ScrollReveal().reveal(".header-container p",{
  ...scrollRevealOption,
  delay:1000,
});

ScrollReveal().reveal(".popular-card",{
  ...scrollRevealOption,
  interval:300,
});

ScrollReveal().reveal(".register-image img",{
  ...scrollRevealOption,
  origin:"right",
});
ScrollReveal().reveal(".register-content h4",{
  ...scrollRevealOption,
  delay:500,
});
ScrollReveal().reveal(".register-btn",{
  ...scrollRevealOption,
  delay:1000,
});