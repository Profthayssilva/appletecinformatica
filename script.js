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

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// =========================
// Álbum de imagens
// =========================

const albumImages = document.querySelectorAll(".album-img");
let albumIndex = 0;

function changeAlbumImage() {
  if (albumImages.length === 0) return;

  albumImages[albumIndex].classList.remove("active");

  albumIndex = (albumIndex + 1) % albumImages.length;

  albumImages[albumIndex].classList.add("active");
}

if (albumImages.length > 1) {
  setInterval(changeAlbumImage, 3500);
}
