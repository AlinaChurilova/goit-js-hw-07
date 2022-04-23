import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector('.gallery');
const galleryItemMarkup = createGalleryElementmMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryItemMarkup);

galleryContainer.addEventListener('click', onGalleryContainerClick);

function onImageClick(original) {
    function onEscDown (event) {
        const ESC_KEY_CODE = 'Escape';
        const isEscKey = event.code === ESC_KEY_CODE;
        if (isEscKey) {
            instance.close();
        }
    }
    const instance = basicLightbox.create(`
    <div class="modal">
        <img src="${original}">
    </div>
`, {
        onShow: () => {
        window.addEventListener('keydown', onEscDown);
    },
        onClose: () => {
        window.removeEventListener('keydown', onEscDown);
    }
})
    return instance;    
}

function onGalleryContainerClick(e) {

    e.preventDefault();
    const isClassGalleryImage = e.target.classList.contains('gallery__image');

    if (!isClassGalleryImage) {
        return;
    }

    const modal = onImageClick(e.target.dataset.source);
    
    modal.show();
    console.log(e.target.dataset.source);
};

function createGalleryElementmMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
    <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
    `;
    })
        .join('');

}



