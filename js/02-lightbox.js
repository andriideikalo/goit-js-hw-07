import { galleryItems } from './gallery-items.js';
// Change code below this line

const imgGalery = document.querySelector(`.gallery`);
const markup = galleryItems.map(({ preview, original, description }) =>
    `<a href="${original}" class = "galery__item" ><img src="${preview}" data-src="${original}"alt="${description}" class = "gallery__image" width ="340">
     </a>`).join(``);
// console.log(markup);
imgGalery.insertAdjacentHTML(`beforeend`, markup);
// let instance = ``;
imgGalery.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    // console.log(evt.currentTarget);
    // console.dir(evt.target);
    // console.dir(evt.target.dataset.src);

    let gallery = new SimpleLightbox('.gallery a', {
        captionsData: "alt",
        captionDelay: 250,
    });

    document.addEventListener('keydown', onModalCloseToEscape);

    function onModalCloseToEscape(event) {
        if (event.code === "Escape") {
            instance.close();
            document.removeEventListener("keydown", onModalCloseToEscape);

        }
    }

});

// console.log(galleryItems);