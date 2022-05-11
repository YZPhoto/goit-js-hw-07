import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryImages = document.querySelector(".gallery");
const galleryMarkup = createGalleryImagesMarkup(galleryItems);

galleryImages.insertAdjacentHTML("beforeend", galleryMarkup);

function createGalleryImagesMarkup(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `
     <a class="gallery__item" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        alt="${description}"
      />
     </a>
`;
        })
        .join("");
}

const lightboxOptions = {
    captions: true,
    captionsData: "alt",
    captionDelay: 250,
};

const lightboxGallery = new SimpleLightbox(".gallery a", lightboxOptions);