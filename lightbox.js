const activeLightboxBtn = document.querySelectorAll(".lightbox-link");

// console.log(activeLightboxBtn);

activeLightboxBtn.forEach((btn) => {
  // display lightbox
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    let lightbox = document.createElement("div");
    document.body.appendChild(lightbox);
    lightbox.classList.add("lightbox");
    lightbox.innerHTML = `<div class="lightbox__picture-container">
    <button class="lightbox__button prev">
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

    <button class="lightbox__button next">
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

    <div class="slides-container" data-slides>
      <div class="caroussel__slide slide--01" data-active>
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

    // close lightbox
    const closeLightbox = document.querySelector(".lightbox__close");
    closeLightbox.addEventListener("click", () => {
      lightbox.remove();
    });
    console.log(closeLightbox);
  });
});
