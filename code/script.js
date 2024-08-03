// Make mobile navigation work

const btnEl = document.querySelector(".mbl-nav-btn");
const headerEl = document.querySelector(".header");

btnEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});
