import storageData from './storage.json'  assert { type: 'json' }

import {renderItems} from './card.js'

import {checkboxListener} from './filter.js'

import {search} from './search.js'

renderItems(storageData)

checkboxListener()

search()

const usersCounter = document.querySelector('#user-counter')
usersCounter.textContent = storageData.length