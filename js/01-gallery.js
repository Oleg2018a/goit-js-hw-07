import { galleryItems } from "./gallery-items.js";
console.log(galleryItems);

const galleryMarking = galleryItems
  .map((image) => {
    return `<li class="gallery__item">
        <a class="gallery__link" href="${image.original}">
          <img
            class="gallery__image"
            src="${image.preview}"
            data-source="${image.original}"
            alt="${image.description}"
          />
        </a>
      </li>`;
  })
  .join("");

const galleryList = document.querySelector(".gallery");
galleryList.innerHTML = galleryMarking;

galleryList.addEventListener("click", searchOriginImage);
galleryList.addEventListener("keydown", onClose);

let instance;
function searchOriginImage(evt) {
  evt.preventDefault();
  if (evt.target.nodeName === "IMG") {
    const selectedImgSrc = evt.target.dataset.source;
    console.log(selectedImgSrc);

    instance = basicLightbox.create(
      `
      <img src="${selectedImgSrc}">`
    );
    instance.show();
  }
}
function onClose(evt) {
  if (evt.key === "Escape") {
    instance.close();
    document.removeEventListener("keydown", onClose);
  }
}
