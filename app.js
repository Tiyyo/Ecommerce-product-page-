const carousselBtn = document.querySelectorAll(".caroussel__button");
const numberItemToAdd = document.querySelector("input[type=number]");
const cartBtn = document.querySelectorAll("[data-input]");
const hamburger = document.getElementsByClassName("hamburger")[0];
const displayCartBtn = document.querySelector("[data-cart]");
const navLinksMobile = document.querySelector("[data-nav-mobile]");
const cart = document.querySelector("[data-display]");
const cartContent = document.querySelector("[data-content");
const form = document.getElementsByClassName("product__cart")[0];
const main = document.querySelector("main");
const iconCartValue = displayCartBtn.children[0];
const lightboxLinks = document.querySelectorAll(".link-to__lightbox");
const slidesContainer = document.querySelector(".slides-container");
let stockCartValue;
let itemCount = 0;
let products = [
  {
    name: "Fall Limited Edition Sneakers",
    price: 125,
    img: "./assets/images/image-product-1.jpg",
  },
];
let deleteBtn;

console.log(slidesContainer.children[0].dataset.active);
() => {
  displayItemCart();
};

function displayOverlay() {
  if (navLinksMobile.dataset.navMobile === "isactive") {
    main.classList.add("active");
  } else {
    main.classList.remove("active");
  }
}

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

function displayEmptyCart() {
  if (cartContent.dataset.content === "empty") {
    cartContent.innerHTML = `<p class="empty">Your cart is empty.</p>`;
    stockCartValue = 0;
  }
}

function displayProductCart() {
  if (numberItemToAdd.value > 0) {
    cartContent.dataset.content = "notempty";
    cartContent.innerHTML =
      products.map((product) => {
        return `<div class="cart-item">
                        <div class="item-photo">
                            <img src="${product.img}" alt="product's photo"/>
                        </div>
                        <div class="item-description">
                            <p class="nameof-product">${product.name}</p>
                            <p class="item-price">$${product.price},00 x  ${
          numberItemToAdd.value
        } <span class="total-price">$${
          product.price * numberItemToAdd.value
        },00</span>
                            <p>
                        </div>
                        <button class ="delete-item" type="submit" >
                            <img src="./assets/images/icon-delete.svg" alt="trash to delete item from cart"/>
                        </div>
                    </div>
                    `;
      }) + '<button class="checkout">Checkout</button>';
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

function displayCartItemValue() {
  if (stockCartValue > 0) {
    iconCartValue.dataset.iconCart = "notempty";
    iconCartValue.textContent = stockCartValue;
  } else {
    iconCartValue.dataset.iconCart = "empty";
  }
}

function caroussel(item) {
  const offset = item.dataset.caroussel_btn === "next" ? 1 : -1;
  const slides = item
    .closest("[data-caroussel]")
    .querySelector("[data-slides]");
  console.log(slides);

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

function displayThumbnail(string) {
  console.log(slidesContainer);
  activeSlide = document.querySelector("[data-active]");
  alert("test");

  switch (string) {
    case "link-to__lightbox thumbnail-01":
      delete activeSlide.dataset.active;
      slidesContainer.children[0].dataset.active = true;
      break;
    case "link-to__lightbox thumbnail-02":
      delete activeSlide.dataset.active;
      slidesContainer.children[1].dataset.active = true;
      break;
    case "link-to__lightbox thumbnail-03":
      delete activeSlide.dataset.active;
      slidesContainer.children[2].dataset.active = true;
      break;
    case "link-to__lightbox thumbnail-04":
      delete activeSlide.dataset.active;
      slidesContainer.children[3].dataset.active = true;
      break;
    default:
      null;
  }
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
  displayOverlay();
});

// display cart on click
displayCartBtn.addEventListener("click", () => {
  displayCart();
  displayEmptyCart();
  displayOverlay();
  hamburger.classList.remove("is-active");
});

//  change value of the input number
cartBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    changeValueCart(btn);
  });
});

// add to cart event
form.children[1].addEventListener("click", (e) => {
  e.preventDefault();
  stockCartValue = numberItemToAdd.value;
  displayProductCart();
  displayCartItemValue();
  numberItemToAdd.value = 0;

  deleteBtn = document.getElementsByClassName("delete-item")[0];
  deleteBtn.addEventListener("click", () => {
    cartContent.dataset.content = "empty";
    displayEmptyCart();
    displayCartItemValue();
  });
});
// });

// remove navmobile and cart on click
main.addEventListener("click", () => {
  if (navLinksMobile.dataset.navMobile === "isactive") {
    navLinksMobile.dataset.navMobile = "isnotactive";
    main.classList.remove("active");
    hamburger.classList.remove("is-active");
  }
});

// display the right picture on mouseover of his thumbnail

lightboxLinks.forEach((link) => {
  link.addEventListener("mouseover", (e) => {
    activeSlide = document.querySelector("[data-active]");
    switch (e.target.className) {
      case "link-to__lightbox thumbnail-01":
        delete activeSlide.dataset.active;
        slidesContainer.children[0].dataset.active = true;
        break;
      case "link-to__lightbox thumbnail-02":
        delete activeSlide.dataset.active;
        slidesContainer.children[1].dataset.active = true;
        break;
      case "link-to__lightbox thumbnail-03":
        delete activeSlide.dataset.active;
        slidesContainer.children[2].dataset.active = true;
        break;
      case "link-to__lightbox thumbnail-04":
        delete activeSlide.dataset.active;
        slidesContainer.children[3].dataset.active = true;
        break;
      default:
        null;
    }
  });
});
