const carousselBtn = document.querySelectorAll("[data-caroussel_btn");
const numberItemToAdd = document.querySelector("input[type=number]");
const cartBtn = document.querySelectorAll("[data-input]");
const hamburger = document.getElementsByClassName("hamburger")[0];
const displayCartBtn = document.querySelector("[data-cart]");
const navLinksMobile = document.querySelector("[data-nav-mobile");
const cart = document.querySelector("[data-display");
const cartContent = document.querySelector("[data-content");

console.log(cartContent.dataset.content);

() => {
  displayItemCart();
};

function displayNavMobile() {
  if (navLinksMobile.dataset.navMobile === "isactive") {
    navLinksMobile.dataset.navMobile = "isnotactive";
  } else if (
    cart.dataset.display === "isactive" &&
    navLinksMobile.dataset.navMobile === "isnotactive"
  ) {
    cart.dataset.display = "isnotactive";
    navLinksMobile.dataset.navMobile = "isactive";
  } else {
    navLinksMobile.dataset.navMobile = "isactive";
  }
}

function displayCart() {
  if (cart.dataset.display === "isactive") {
    cart.dataset.display = "isnotactive";
  } else if (navLinksMobile.dataset.navMobile === "isactive") {
    navLinksMobile.dataset.navMobile = "isnotactive";
    cart.dataset.display = "isactive";
  } else {
    cart.dataset.display = "isactive";
  }
}

function displayItemCart() {
  if (cartContent.dataset.content === "empty") {
    cartContent.innerHTML = `<p class="empty">Your cart is empty.</p>`;
  }
}

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

  // same logic for dots
  const activeDot = document
    .querySelector(".caroussel__circle-container")
    .querySelector("[data-active");

  const innerCircle = document.querySelectorAll(".inner-circle");

  innerCircle[newIndex].dataset.active = true;
  delete activeDot.dataset.active;
}

// trigger caroussel
carousselBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    caroussel(btn);
  });
});

// display nav menu on click
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("is-active");
  displayNavMobile();
});

// display cart
displayCartBtn.addEventListener("click", () => {
  displayCart();
  displayItemCart();
  hamburger.classList.remove("is-active");
});

cartBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    changeValueCart(btn);
  });
});
