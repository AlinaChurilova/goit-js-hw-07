import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log();

const galleryContainer = document.querySelector('.gallery');
const galleryItemMarkup = createGalleryElementmMarkup(galleryItems);
const addMarkup = galleryContainer.insertAdjacentHTML('beforeend', galleryItemMarkup);

if (!addMarkup) {
    onInitializationSimpleLightbox();
}

function onInitializationSimpleLightbox() {

    let gallery = new SimpleLightbox('.gallery a', { captionsData:'alt', captionPosition: 'bottom', captionDelay: 250});
    gallery.on('show.simplelightbox', function () {
       
});

// gallery.on('error.simplelightbox', function (e) {
// 	console.log(e); 
// });    
    return gallery;
    
}

function createGalleryElementmMarkup(galleryItems) {

    return galleryItems.map(({ preview, original, description }) => {
        return `
        <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
 `;
    })
        .join('');
 
}
