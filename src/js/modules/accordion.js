export default function accordion(headersSelector, contentSelector, activeSelector) {
  const headers = document.querySelectorAll(headersSelector)

  headers.forEach(header => {
    header.addEventListener('click', function () {
      const item = this.parentNode
      const content = item.querySelector(contentSelector)

      item.classList.toggle(activeSelector)

      item.classList.contains(activeSelector)
        ? (content.style.maxHeight = content.scrollHeight + 'px')
        : (content.style.maxHeight = '0')
    })
  })
}
