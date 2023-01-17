// JavaScript Page

const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");
const container = document.querySelector(".images");

let counter = 0;

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

function nextSlide() {
    if (counter === 2) {
        counter = -1;
    }
    counter++;

    container.style.backgroundImage = `url(img/pforest-${counter}.jpg)`;
}

function prevSlide() {
    if (counter === 0) {
        counter = 3;
    }
    counter--;

    container.style.backgroundImage = `url(img/pforest-${counter}.jpg)`;
}
