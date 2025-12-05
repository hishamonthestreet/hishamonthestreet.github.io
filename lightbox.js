// Create lightbox container
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

// Close on click
lightbox.addEventListener('click', () => {
  lightbox.classList.remove('active');
  while (lightbox.firstChild) {
    lightbox.removeChild(lightbox.firstChild);
  }
});

// Add click event to all images
document.querySelectorAll('img').forEach(image => {
  image.addEventListener('click', e => {
    lightbox.classList.add('active');
    const img = document.createElement('img');
    img.src = image.src;
    lightbox.appendChild(img);
  });
});
