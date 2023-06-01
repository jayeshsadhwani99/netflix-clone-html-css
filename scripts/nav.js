const nav = document.getElementsByTagName("nav")[0];

window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    nav.classList.add("nav-dark");
  } else {
    nav.classList.remove("nav-dark");
  }
});
