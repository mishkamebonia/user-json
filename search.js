const searchBar = document.querySelector('#search-bar')

export function search() {
  searchBar.addEventListener('input', () => {
    const valueFilter = searchBar.value.toLowerCase()
    const cards = document.querySelectorAll('.accordion-item')
    const searchTitle = document.querySelectorAll('.accordion-item h6')
    let counter = 0

    for (let i = 0; i < cards.length; i++) {
      const value = searchTitle[i].textContent.toLowerCase()

      if (value.includes(valueFilter)) {
        cards[i].style.display = 'block'
        counter++
      } else {
        cards[i].style.display = 'none'
      }
    }
    const usersCounter = document.querySelector('#user-counter')
    usersCounter.textContent = counter
  })
}