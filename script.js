const pathActive = document.querySelector('.svg')
window.addEventListener('load', () => {
  pathActive.classList.toggle('path--active')
});

// Scroll To Top


const scrollToTopBtn = document.getElementById("scrollToTopBtn");
var rootElement = document.documentElement;

function scrollToTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  })

}

scrollToTopBtn.addEventListener("click", scrollToTop)


// Gallery

const lightbox = document.createElement('div')
lightbox.id = 'lightbox'
document.body.appendChild(lightbox)

const images = document.querySelectorAll('.card__img')
images.forEach(image => {
  image.addEventListener('click', e => {
    lightbox.classList.add('active')
    const img = document.createElement('img')
    img.src = image.src
    while (lightbox.firstChild) {
        lightbox.removeChild(lightbox.firstChild)
    }
    lightbox.appendChild(img)
  })
})

lightbox.addEventListener('click', e => {
    if (e.target !== e.currentTarget) return
  lightbox.classList.remove('active')
})


// Carousel


const buttons = document.querySelectorAll("[data-carousel-button]")

const steelToggle = document.getElementById('steel--img');
const aluminumToggle = document.getElementById('aluminum--img');
const fiberglassToggle = document.getElementById('fiberglass--img')

const steelLink = document.getElementById('steel--link');
const aluminumLink = document.getElementById('aluminum--link');
const fiberglassLink = document.getElementById('fiberglass--link')

steelLink.addEventListener('click', () => {
    steelToggle.classList.add('gallery--visible');
    aluminumToggle.classList.remove('gallery--visible');
    fiberglassToggle.classList.remove('gallery--visible');

    steelLink.classList.add('link--active');
    aluminumLink.classList.remove('link--active');
    fiberglassLink.classList.remove('link--active');
})

aluminumLink.addEventListener('click', () => {
    aluminumToggle.classList.add('gallery--visible');
    steelToggle.classList.remove('gallery--visible');
    fiberglassToggle.classList.remove('gallery--visible');

    aluminumLink.classList.add('link--active')
    steelLink.classList.remove('link--active')
    fiberglassLink.classList.remove('link--active');
})

fiberglassLink.addEventListener('click', () => {
    fiberglassToggle.classList.add('gallery--visible');
    aluminumToggle.classList.remove('gallery--visible');
    steelToggle.classList.remove('gallery--visible');

    fiberglassLink.classList.add('link--active');
    aluminumLink.classList.remove('link--active');
    steelLink.classList.remove('link--active');
})


buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})

window.addEventListener('load', () => {
  steelToggle.classList.add('gallery--visible')
  steelLink.classList.add('link--active')
})
