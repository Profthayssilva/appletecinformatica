<<<<<<< HEAD
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  reveals.forEach((item) => {
    const itemTop = item.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (itemTop < windowHeight - 80) {
      item.classList.add("show");
    }
  });
}
const albumImages = document.querySelectorAll(".album-img");
let albumIndex = 0;

function changeAlbumImage() {
  albumImages[albumIndex].classList.remove("active");

  albumIndex = (albumIndex + 1) % albumImages.length;

  albumImages[albumIndex].classList.add("active");
}

if (albumImages.length > 0) {
  setInterval(changeAlbumImage, 3500);
}

window.addEventListener("scroll", revealOnScroll);
=======
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  reveals.forEach((item) => {
    const itemTop = item.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (itemTop < windowHeight - 80) {
      item.classList.add("show");
    }
  });
}
const albumImages = document.querySelectorAll(".album-img");
let albumIndex = 0;

function changeAlbumImage() {
  albumImages[albumIndex].classList.remove("active");

  albumIndex = (albumIndex + 1) % albumImages.length;

  albumImages[albumIndex].classList.add("active");
}

if (albumImages.length > 0) {
  setInterval(changeAlbumImage, 3500);
}

window.addEventListener("scroll", revealOnScroll);
>>>>>>> 1514013f0b776faf6348e6da730bd19833b5e4fb
window.addEventListener("load", revealOnScroll);