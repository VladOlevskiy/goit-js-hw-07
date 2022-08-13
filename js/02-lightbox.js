import { galleryItems } from "./gallery-items.js";
// Change code below this line

const divContainer = document.querySelector(".gallery");

function makeMarkupGallery(galleryItems) {
  const galleryMarkup = galleryItems
    .map(
      (item) => `<a class="gallery__item" href=${item.original}>
  <img class="gallery__image" src=${item.preview} alt=${item.description} />
</a>`
    )
    .join("");
  divContainer.insertAdjacentHTML("beforeend", galleryMarkup);
}

makeMarkupGallery(galleryItems);

var lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
