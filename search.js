const searchBar = document.querySelector('#search-bar')

export function search() {
  searchBar.addEventListener('input', () => {
    const filter = searchBar.value.toLowerCase()
    const item = document.querySelectorAll('.accordion-item')
    const searchKey = document.querySelectorAll('.accordion-item h6')
    let counter = 0

    for (let i = 0; i < searchKey.length; i++) {
      const value = searchKey[i].textContent.toLowerCase()

      if (value.includes(filter)) {
        item[i].style.display = 'block'
        counter++
      } else {
        item[i].style.display = 'none'
      }
    }
    const usersCounter = document.querySelector('#user-counter')
    usersCounter.textContent = counter
  })
}
