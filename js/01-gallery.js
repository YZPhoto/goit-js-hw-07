import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryImages = document.querySelector(".gallery");
const galleryMarkup = createGalleryImagesMarkup(galleryItems);

galleryImages.insertAdjacentHTML("beforeend", galleryMarkup);

function createGalleryImagesMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}

galleryImages.addEventListener("click", selectImage);

function selectImage(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") return;

  const selectedImage = event.target.dataset.source;

  const originalImage = basicLightbox.create(`<img src=${selectedImage}>`);

  originalImage.show();

  galleryImages.addEventListener("keydown", modalClose);

  function modalClose(event) {
    if (event.key !== "Escape") return;

    originalImage.close();
  }


}