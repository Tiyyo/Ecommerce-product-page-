const activeLightboxBtn = document.querySelectorAll(".link-to__lightbox");

function createLightbox() {
  let lightbox = document.createElement("div");
  document.body.appendChild(lightbox);
  lightbox.classList.add("lightbox");
  lightbox.innerHTML = `<div class="lightbox__picture-container" data-caroussel>
    <button class="lightbox__button prev" data-caroussel_btn="prev">
      <svg
        class="svg_chevron"
        width="18"
        height="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          class="svg-chevron__path"
          d="M11 1 3 9l8 8"
          stroke="#1D2026"
          stroke-width="3"
          fill="none"
          fill-rule="evenodd"
        />
      </svg>
    </button>

    <button class="lightbox__button next" data-caroussel_btn="next">
      <svg
        class="svg-chevron"
        width="13"
        height="18"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          class="svg-chevron__path"
          d="m2 1 8 8-8 8"
          stroke="#1D2026"
          stroke-width="3"
          fill="none"
          fill-rule="evenodd"
        />
      </svg>
    </button>

    <div class="slides-container lightbox__slides" data-slides>
      <div class="caroussel__slide slide--01" data-lightbox-active>
        <img
          src="./assets/images/image-product-1.jpg"
          alt="first photo of item"
        />
      </div>
      <div class="caroussel__slide slide--02">
        <img
          src="./assets/images/image-product-2.jpg"
          alt="second photo of item"
        />
      </div>
      <div class="caroussel__slide slide--03">
        <img
          src="./assets/images/image-product-3.jpg"
          alt="third photo of item"
        />
      </div>
      <div class="caroussel__slide slide--04">
        <img
          src="./assets/images/image-product-4.jpg"
          alt="fourth photo of item"
        />
      </div>
    </div>

    <button class="lightbox__close">
      <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
        <path
          class="svg-cross__path"
          d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
          fill="#69707D"
          fill-rule="evenodd"
        />
      </svg>
    </button>
  </div>

  <div class="lightbox__links">
    <button class="lightbox-link thumbnail-01"></button>
    <button class="lightbox-link thumbnail-02"></button>
    <button class="lightbox-link thumbnail-03"></button>
    <button class="lightbox-link thumbnail-04"></button>
  </div>`;
  // delete lightbox
  const closeLightbox = document.querySelector(".lightbox__close");
  closeLightbox.addEventListener("click", () => {
    lightbox.remove();
  });
}

function carousselLightbox(button) {
  const offset = button.dataset.caroussel_btn === "next" ? +1 : -1;
  const slidesInLightbox = document.querySelector(".lightbox__slides");
  const activeLightboxSlide = slidesInLightbox.querySelector(
    "[data-lightbox-active]"
  );
  let newIndex =
    [...slidesInLightbox.children].indexOf(activeLightboxSlide) + offset;
  if (newIndex < 0) {
    newIndex = slidesInLightbox.children.length - 1;
  }
  if (newIndex >= slidesInLightbox.children.length) newIndex = 0;

  slidesInLightbox.children[newIndex].dataset.lightboxActive = true;
  delete activeLightboxSlide.dataset.lightboxActive;
}

function displayThumbnail(string) {
  activeSlide = document.querySelector("[data-lightbox-active");
  const slidesLightbox = document.querySelector(".lightbox__slides");

  switch (string) {
    case "lightbox-link thumbnail-01":
      delete activeSlide.dataset.lightboxActive;
      slidesLightbox.children[0].dataset.lightboxActive = true;
      break;
    case "lightbox-link thumbnail-02":
      delete activeSlide.dataset.lightboxActive;
      slidesLightbox.children[1].dataset.lightboxActive = true;
      break;
    case "lightbox-link thumbnail-03":
      delete activeSlide.dataset.lightboxActive;
      slidesLightbox.children[2].dataset.lightboxActive = true;
      break;
    case "lightbox-link thumbnail-04":
      delete activeSlide.dataset.lightboxActive;
      slidesLightbox.children[3].dataset.lightboxActive = true;
      break;
    default:
      null;
  }
}

// console.log(activeLightboxBtn);

activeLightboxBtn.forEach((btn) => {
  // display lightbox

  btn.addEventListener("click", (e) => {
    e.preventDefault();
    createLightbox();

    //make caroussel work in lightbox

    const lightboxBtn = document.querySelectorAll(".lightbox__button");
    lightboxBtn.forEach((prevNext) => {
      prevNext.addEventListener("click", () => {
        carousselLightbox(prevNext);
      });
    });

    const lightboxLinks = document.querySelectorAll(".lightbox-link");
    lightboxLinks.forEach((link) => {
      link.addEventListener("mouseover", (e) => {
        console.log(e.target.className);

        displayThumbnail(e.target.className);
      });
    });
  });
});
