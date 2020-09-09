

const toItemPage = document.querySelectorAll('.toItemPage')
const swiperImg = document.querySelectorAll('.swiper__image')

toItemPage.forEach(el => {
  el.addEventListener('click', () => {
    document.location.href = '/servicesItemPage.html'
  })
})

swiperImg.forEach(el => {
  el.addEventListener('click', () => {
    document.location.href = 'https://google.com'
  })
})

new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  slidesPerView: 3,
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  simulateTouch: true,
  preloadImages: true,
  spaceBetween: 20,
  slideToClickedSlide: true,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
    },
    537: {
      slidesPerView: 2,
    },
    // when window width is >= 640px
    1024: {
      slidesPerView: 3,
    },
  }
})
