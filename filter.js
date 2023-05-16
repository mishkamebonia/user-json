import storageData from './storage.json'  assert { type: 'json' }

import {renderItems} from './card.js'

const usersCounter = document.querySelector('#user-counter')

const searchBar = document.querySelector('#search-bar')

const checkboxes = document.querySelectorAll('.form-check-input')

let itemsArr = []

export function checkboxListener() {
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', (event) => {
      const value = checkbox.value.toLowerCase()
      searchBar.value = ''

      if (checkbox.checked) {
        itemsArr.push(value)
      } else {
        const index = itemsArr.indexOf(value)
        
        if (index > -1) {
          itemsArr.splice(index, 1)
        }
      }
      filter()
    })
  })
}

function filter() {
  const filteredData = storageData.filter(data => {
    const dataValue = data.gender.toLowerCase()
    
    const checked = itemsArr.includes(dataValue)
    
    if (itemsArr.includes('other')) {
      if (dataValue !== 'male' && dataValue !== 'female') {
        return itemsArr.includes('other')
      }
    }

    if (itemsArr.length === 0) {
      return data
    }
    return checked
  })

  usersCounter.textContent = filteredData.length

  renderItems(filteredData)
}