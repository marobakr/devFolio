/*  Initialize Swiper */
const progressCircle = document.querySelector('.autoplay-progress svg')
const progressContent = document.querySelector('.autoplay-progress span')
var swiper = new Swiper('.mySwiper', {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  on: {
    autoplayTimeLeft(s, time, progress) {
      progressCircle.style.setProperty('--progress', 1 - progress)
      progressContent.textContent = `${Math.ceil(time / 1000)}s`
    },
  },
})

// function Get Year of footer
const currentDate = new Date().getFullYear()
const yearElement = (document.getElementById(
  'year'
).innerHTML += `  ${currentDate} `)

/* Scroll to top button */
const button = document.querySelector('.scrollToTopBtn')

const displayButton = () => {
  window.addEventListener('scroll', () => {
    console.log(window.scrollY)

    if (window.scrollY > 100) {
      button.style.display = 'block'
    } else {
      button.style.display = 'none'
    }
  })
}
const scrollToTop = () => {
  button.addEventListener('click', () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
    console.log(event)
  })
}

displayButton()
scrollToTop()

// Counter Timing
const Counter = () => {
  window.addEventListener('scroll', () => {
    console.log(window.scrollY)
    if (window.scrollY >= 2500 && window.scrollY <= 2550) {
      // COunter Timer
      var counters = document.getElementsByClassName('counterTimer')

      for (var i = 0; i < counters.length; i++) {
        handleCounter(counters[i])
      }
      function handleCounter(counter) {
        var c = 0
        var interval = setInterval(() => {
          if (c == counter.dataset.count) {
            clearInterval(interval)
          }
          counter.innerText = c
          c++
        }, 2)
      }
    }
  })
}
Counter()
