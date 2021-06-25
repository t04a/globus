

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

const swiperNews = new Swiper('.slider-news .swiper-container', {
  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.swiper-pagination',
  },
});

const swiperDates = new Swiper('.slider-dates .swiper-container', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 'auto',

  navigation: {
    nextEl: '.swiper-button-next-custom',
    prevEl: '.swiper-button-prev-custom',
  },
});



let filmsDesc = document.querySelectorAll(".film__info .film__desc p");
filmsDesc.forEach(el => {
  let textLength = el.innerHTML.length;
  let newText;
  if (textLength >= 300) {
    newText = el.innerHTML.slice(0, 300) + "<a href='#'  data-micromodal-trigger='modal-film'>Читать подробнее...</a>";
    el.innerHTML = newText;
  }
});

function togglePlaceBusy() {
  event.target.classList.toggle("color-selected");
}
let places = document.querySelectorAll(".seats-plan__row-place");
places.forEach(el => el.addEventListener('click', togglePlaceBusy));

MicroModal.init({
  onClose: restoreModal,
  disableScroll: true,
});


let modalFilmTrailer = document.querySelector(".modal-film__trailer");
let modalFilmTrailerPreview = document.querySelector(".modal-film__trailer-preview");
modalFilmTrailerPreview.addEventListener('click', () => {
  let trailerSrc = modalFilmTrailerPreview.dataset.trailerSrc;
  let iframe = `<iframe id="player" src="https://www.youtube.com/embed/${trailerSrc}" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope;" allowfullscreen></iframe>`;
  modalFilmTrailerPreview.style.display="none";
  modalFilmTrailer.querySelector(".play-button").style.display = "none";

  modalFilmTrailer.insertAdjacentHTML('afterbegin', iframe);
});

function restoreModal() {
  modalFilmTrailer.querySelector("iframe").remove();
  modalFilmTrailerPreview.style.display="block";
  modalFilmTrailer.querySelector(".play-button").style.display = "flex";
}

console.log("the end");