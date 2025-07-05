const menuOpenButton = document.querySelector('#menu-open-button');
const menuCloseButton = document.querySelector('#menu-close-button');

// Open sidebar menu
menuOpenButton.addEventListener('click', () => {
  document.body.classList.toggle("show-mobile-menu");
});

// Close sidebar menu when close button clicked
menuCloseButton.addEventListener('click', () => {
  document.body.classList.remove("show-mobile-menu");
});

// Close sidebar and scroll when nav link clicked
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'auto' }); // instant scroll
    }
    // Close sidebar menu
    document.body.classList.remove('show-mobile-menu');
  });
});

// Swiper (swiperjs.com)
const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  spaceBetween: 25,
  grabCursor: true,

  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
    pauseOnMouseEnter: true
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
  // Responsive breakpoints
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  }
});