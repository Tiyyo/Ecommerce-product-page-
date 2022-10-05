const carousselBtn = document.querySelectorAll("[data-caroussel_btn");

function caroussel(item) {
  const offset = item.dataset.caroussel_btn === "next" ? 1 : -1;
  const slides = item
    .closest("[data-caroussel]")
    .querySelector("[data-slides]");

  const activeSlide = slides.querySelector("[data-active]");
  let newIndex = [...slides.children].indexOf(activeSlide) + offset;
  console.log(newIndex);
  if (newIndex < 0) {
    newIndex = slides.children.length - 1;
  }
  if (newIndex >= slides.children.length) newIndex = 0;

  slides.children[newIndex].dataset.active = true;
  delete activeSlide.dataset.active;
}

carousselBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    caroussel(btn);
  });
});
