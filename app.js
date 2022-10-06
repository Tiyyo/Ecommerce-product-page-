const carousselBtn = document.querySelectorAll("[data-caroussel_btn");
const numberItemToAdd = document.querySelector("input[type=number]");
const cartBtn = document.querySelectorAll("[data-input]");

function changeValueCart(item) {
  item.dataset.input === "plus"
    ? numberItemToAdd.value++
    : numberItemToAdd.value--;
  if (numberItemToAdd.value < 0) {
    numberItemToAdd.value = 0;
  }
}

function caroussel(item) {
  const offset = item.dataset.caroussel_btn === "next" ? 1 : -1;
  const slides = item
    .closest("[data-caroussel]")
    .querySelector("[data-slides]");

  const activeSlide = slides.querySelector("[data-active]");
  let newIndex = [...slides.children].indexOf(activeSlide) + offset;
  if (newIndex < 0) {
    newIndex = slides.children.length - 1;
  }
  if (newIndex >= slides.children.length) newIndex = 0;

  slides.children[newIndex].dataset.active = true;
  delete activeSlide.dataset.active;

  const activeDot = document
    .querySelector(".caroussel__circle-container")
    .querySelector("[data-active");

  const innerCircle = document.querySelectorAll(".inner-circle");
  let newArr = [...innerCircle].indexOf(activeDot) + offset;

  innerCircle[newIndex].dataset.active = true;
  delete activeDot.dataset.active;

  console.log([...innerCircle].indexOf(activeDot));
  console.log([...slides.children].indexOf(activeSlide));
}

// trigger caroussel
carousselBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    caroussel(btn);
  });
});

cartBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    changeValueCart(btn);
  });
});
