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

let tcNavMenu = document.querySelector(".nav-tc__mob");
let tcNavMenuDropdown = document.querySelector(".nav-tc-items");

tcNavMenu.addEventListener("click", () => {
  tcNavMenuDropdown.classList.toggle("d-block");
});

/* window.onclick = function(event) {
  if (!event.target.matches('.nav-tc__mob')||event.target.matches('.nav-tc__items')) {

    var dropdowns = document.getElementsByClassName("nav-tc-items");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('d-block')) {
        openDropdown.classList.remove('d-block');
      }
    }
  }
}
 */
function togglePlaceBusy() {
  event.target.classList.toggle("color-selected");
}
let places = document.querySelectorAll(".seats-plan__row-place");
places.forEach(el => el.addEventListener('click', togglePlaceBusy));

console.log("the end");