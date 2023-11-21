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
