import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");

const img = galleryItems.map((image) => {
  return `<div class="gallery__item">
    <a class="gallery__link" href="${image.original}">
    <img
    class="gallery__image"
    src="${image.preview}"
    data-source="${image.original}"
    alt="${image.description}"
    />
    </a>
    </div>`;
});

// let instance = null;

gallery.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.tagName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(
    `
    <img src="${event.target.dataset.source}"  width="800" height="600">
    `
  );
  instance.show();
});
gallery.insertAdjacentHTML("beforeend", img.join(""));

function modalCloseByEsc(e) {
  if (e.code === "Escape") {
    instance?.close(e);
  }
}

window.addEventListener("keydown", modalCloseByEsc);
