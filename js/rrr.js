const img = document.querySelector('.banner__img')
const dots = document.querySelector('.banner__dots')
const banner = document.querySelector('.banner')

banner.addEventListener('mousemove', (event) => {
  img.style.transform = `translate(${event.clientX / 50}px, ${event.clientY / 50}px)`
  dots.style.transform = `translateY(${event.clientY / 50}px)`
})