document.addEventListener('DOMContentLoaded', () => {
  const carouselImages = document.querySelector('.carousel-images');
  const images = document.querySelectorAll('.carousel-images img');
  const nextBtn = document.querySelector('.carousel-nav.next');
  const prevBtn = document.querySelector('.carousel-nav.prev');

  let currentIndex = 0;

  function updateCarousel() {
    const offset = -currentIndex * images[0].clientWidth;
    carouselImages.style.transform = `translateX(${offset}px)`;
  }

  function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
  }

  function showPrevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateCarousel();
  }

  let autoScroll = setInterval(showNextImage, 3000);

  nextBtn.addEventListener('click', () => {
    showNextImage();
    resetAutoScroll();
  });

  prevBtn.addEventListener('click', () => {
    showPrevImage();
    resetAutoScroll();
  });

  function resetAutoScroll() {
    clearInterval(autoScroll);
    autoScroll = setInterval(showNextImage, 3000);
  }

  window.addEventListener('resize', updateCarousel);
});