var swiper = new Swiper(".mySwiper", {
  slidesPerView: 7,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 6,
    },
  },
  spaceBetween: 30,
  loop: true,
  
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
document.getElementById('progressBar').addEventListener('click', function() {
  // Hide the download button
  this.style.display = 'none';

  // Show the progress bar
  var progressBar = document.getElementById('progressBar');
  progressBar.style.display = 'block';

  var progress = 0;
  var interval = setInterval(function() {
    progress += 10;
    progressBar.value = progress;
    if (progress >= 100) clearInterval(interval);
  }, 500);
});