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

/* Add Toggle Class Active */
var links = document.querySelectorAll('nav ul a')
links.forEach(function (link) {
  link.addEventListener('click', function () {
    links.forEach(function (innerLink) {
      innerLink.classList.remove('active')
    })
    link.classList.add('active')
  })
})

window.addEventListener('scroll', function () {
  var scrollPosition = window.scrollY

  sections.forEach(function (section) {
    var offset = section.offsetTop
    var height = section.offsetHeight
    if (scrollPosition >= offset && scrollPosition < offset + height ) {
      links.forEach(function (innerLink) {
        innerLink.classList.remove('active')
        console.log('uyes')
      })
      var correspondingLink = document.querySelector(
        'nav a[href="#' + section.id + '"]'
      )
      correspondingLink.classList.add('active')
    }
  })
})

/* Aniamtion Typeing */
var sections = document.querySelectorAll('section')
var typeText = document.querySelector('.typeText')
var textToBeTyped = 'software engineer'
var textToBeTypedArr = [' software engineer', ' Freelancer', ' Designer']
var index = 0,
  isAdding = true,
  textToBeTypedIndex = 0

function playAnim() {
  setTimeout(
    function () {
      // set the text of typeText to a substring of the text to be typed using index.
      typeText.innerText = textToBeTypedArr[textToBeTypedIndex].slice(0, index)
      if (isAdding) {
        // adding text
        if (index > textToBeTypedArr[textToBeTypedIndex].length) {
          // no more text to add
          isAdding = false
          typeText.classList.add('showAnim')
          //break: wait 2s before playing again
          setTimeout(function () {
            typeText.classList.remove('showAnim')
            playAnim()
          }, 2000)
          return
        } else {
          // increment index by 1
          index++
        }
      } else {
        // removing text
        if (index === 0) {
          // no more text to remove
          isAdding = true
          //switch to next text in text array
          textToBeTypedIndex =
            (textToBeTypedIndex + 1) % textToBeTypedArr.length
        } else {
          // decrement index by 1
          index--
        }
      }
      // call itself
      playAnim()
    },
    isAdding ? 120 : 60
  )
}
// start animation
playAnim()

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