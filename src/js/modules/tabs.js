export default function tabs(tabsSelector, contentSelector, activeSelector) {
  const tabs = document.querySelectorAll(tabsSelector)
  const allReviews = document.querySelectorAll(contentSelector)

  tabs.forEach(tab => {
    tab.addEventListener('click', function () {
      const targetRevId = this.getAttribute('data-rev-id')

      allReviews.forEach(review => (review.style.display = 'none'))

      const targetReview = document.getElementById(targetRevId)
      targetReview.style.display = 'block'

      tabs.forEach(tab => tab.classList.remove(activeSelector))

      this.classList.add(activeSelector)
    })
  })
}
