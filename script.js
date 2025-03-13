// select element
const MenuMobile = document.getElementById("menu-mobile");
const menuOverlay = document.getElementById("menu-overlay");
document
  .getElementById("menu-open")
  .addEventListener("click", function (event) {
    event.preventDefault();
    MenuMobile.classList.remove("-translate-x-full");
    MenuMobile.classList.add("translate-x-0");
    menuOverlay.classList.remove("-translate-x-full");
    menuOverlay.classList.add("translate-x-0");
  });

//   close
document
  .getElementById("menu-close")
  .addEventListener("click", function (event) {
    event.preventDefault();
    MenuMobile.classList.add("-translate-x-full");
    MenuMobile.classList.remove("translate-x-0");
    menuOverlay.classList.add("-translate-x-full");
    menuOverlay.classList.remove("translate-x-0");
  });

menuOverlay.addEventListener("click", function (event) {
  event.preventDefault();
  MenuMobile.classList.add("-translate-x-full");
  MenuMobile.classList.remove("translate-x-0");
  menuOverlay.classList.add("-translate-x-full");
  menuOverlay.classList.remove("translate-x-0");
});
