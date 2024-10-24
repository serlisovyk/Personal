export default function burger(burgerSelector, navLinksSelector, navOpenSelector) {
  const burger = document.querySelector(burgerSelector)

  burger.addEventListener('click', () =>
    document.documentElement.classList.toggle(navOpenSelector)
  )

  const navLinks = document.querySelectorAll(navLinksSelector)

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      document.documentElement.classList.remove(navOpenSelector)
    })
  })
}
