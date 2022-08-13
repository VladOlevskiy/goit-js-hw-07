import { galleryItems } from "./gallery-items.js";
// Change code below this line

const divContainer = document.querySelector(".gallery");

function makeMarkupGallery(galleryItems) {
  const galleryMarkup = galleryItems
    .map(
      (item) => `<div class="gallery__item">
  <a class="gallery__link" href=${item.original}>
    <img
      class="gallery__image"
      src=${item.preview}
      data-source=${item.original}
      alt=${item.description}
    />
  </a>
</div>`
    )
    .join("");
  divContainer.insertAdjacentHTML("beforeend", galleryMarkup);
}

makeMarkupGallery(galleryItems);

divContainer.addEventListener("click", toClickOpenImg);
let openImg;
let modal;
function toClickOpenImg(evt) {
  evt.preventDefault();

  if (evt.target.nodeName !== "IMG") {
    return;
  }
  const origLinkImg = evt.target.dataset.source;
  openImg = basicLightbox.create(
    `<img src="${origLinkImg}" width="800" height="600">`
  );
  openImg.show();
  document.addEventListener("keydown", closeModalByEsc);
  modal = document.querySelector(".basicLightbox");
  modal.addEventListener("click", removeEvent);
}

function closeModalByEsc(evt) {
  if (evt.code === "Escape") {
    openImg.close();
    document.removeEventListener("keydown", closeModalByEsc);
    modal.removeEventListener("click", removeEventListener);
  }
}

function removeEvent() {
  document.removeEventListener("keydown", closeModalByEsc);
  modal.removeEventListener("click", removeEvent);
}
