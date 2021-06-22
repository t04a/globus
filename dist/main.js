MicroModal.init({
  disableScroll: true, // [6]
  // disableFocus: false, // [7]
  // debugMode: true // [10]
});

let headerMenuIconOpen = document.querySelector(".page-header-top .menu .menu__open");
let headerMenuIconClose = document.querySelector(".page-header-top .menu-inner .menu__close");
let headerMenuInnerMenu = document.querySelector(".page-header-top .menu .menu-inner");

headerMenuIconOpen.addEventListener('click', () => {
  headerMenuInnerMenu.classList.toggle("d-block");
});
headerMenuIconClose.addEventListener('click', () => {
  headerMenuInnerMenu.classList.toggle("d-block");
});


function togglePlaceBusy() {
  event.target.classList.toggle("color-selected");
}
let places = document.querySelectorAll(".seats-plan__row-place");
places.forEach(el => el.addEventListener('click', togglePlaceBusy));

console.log("the end");