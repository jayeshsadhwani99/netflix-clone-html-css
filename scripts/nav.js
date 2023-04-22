const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {
  // Check the scroll position and add or remove the 'scrolled' class
  if (window.scrollY > 10) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
