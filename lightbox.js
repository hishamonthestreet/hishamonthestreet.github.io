// Ambil semua gambar
const images = Array.from(document.querySelectorAll(".grid img"));
let currentIndex = 0;

// Buat elemen lightbox
const lightbox = document.createElement("div");
lightbox.className = "lightbox";
lightbox.innerHTML = `
  <span class="close-btn">&times;</span>
  <span class="arrow arrow-left">&#10094;</span>
  <img>
  <span class="arrow arrow-right">&#10095;</span>
`;
document.body.appendChild(lightbox);

const lightboxImg = lightbox.querySelector("img");
const closeBtn = lightbox.querySelector(".close-btn");
const arrowLeft = lightbox.querySelector(".arrow-left");
const arrowRight = lightbox.querySelector(".arrow-right");

// Fungsi buka lightbox
function openLightbox(index) {
  currentIndex = index;
  lightboxImg.src = images[currentIndex].src;
  lightbox.style.display = "flex";
}

// Fungsi tutup
function closeLightbox() {
  lightbox.style.display = "none";
}

// Fungsi next / prev
function showNext() {
  currentIndex = (currentIndex + 1) % images.length;
  lightboxImg.src = images[currentIndex].src;
}

function showPrev() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  lightboxImg.src = images[currentIndex].src;
}

// Bila klik gambar
images.forEach((img, i) => {
  img.addEventListener("click", () => openLightbox(i));
});

// Event
arrowRight.addEventListener("click", showNext);
arrowLeft.addEventListener("click", showPrev);
closeBtn.addEventListener("click", closeLightbox);

// ESC key tutup
document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowRight") showNext();
  if (e.key === "ArrowLeft") showPrev();
});
