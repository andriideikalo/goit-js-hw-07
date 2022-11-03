import { galleryItems } from './gallery-items.js';
// Change code below this line

const imgGalery = document.querySelector(`.gallery`);
const markup = galleryItems.map(({ preview, original, description }) =>
    `<a href="${original}" class = "galery__item" ><img src="${preview}" data-src="${original}"alt="${description}" class = "gallery__image" width ="340">
     </a>`).join(``);
// console.log(markup);
imgGalery.insertAdjacentHTML(`beforeend`, markup);

let gallery = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: 250,
});
gallery.on('show.simplelightbox', function(evt) {
    evt.preventDefault();
});