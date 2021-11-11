import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");

const img = galleryItems.map((image) => {
  return `
  <a class="gallery__item" href="${image.original}">
  <img class="gallery__image" src="${image.preview}" alt="${image.description}" />
</a>`;
});
gallery.insertAdjacentHTML("beforeend", img.join(""));

new SimpleLightbox(".gallery a", {
  captionsType: "attr",
  captionsData: "alt",
  captionDelay: "250",
});
