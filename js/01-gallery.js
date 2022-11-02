import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);
const imgGalery = document.querySelector(`.gallery`);
const markup = galleryItems.map(({ preview, original, description }) =>
    `<a href="${original}" class = "galery__link" ><img src="${preview}" data-src="${original}"alt="${description}" class = "gallery__image" width ="340">
     </a>`).join(``);
// console.log(markup);
imgGalery.insertAdjacentHTML(`beforeend`, markup);
// let instance = ``;
imgGalery.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    // console.log(evt.currentTarget);
    // console.dir(evt.target);
    // console.dir(evt.target.dataset.src);

    const instance = basicLightbox.create(`<img src=${evt.target.dataset.src}>`);
    instance.show();
    document.addEventListener('keydown', onModalCloseToEscape);

    function onModalCloseToEscape(event) {
        if (event.code === "Escape") {
            instance.close();
            document.removeEventListener("keydown", onModalCloseToEscape);

        }
    }

});