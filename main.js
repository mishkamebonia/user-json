import storageData from './storage.json'  assert { type: 'json' }

import {renderItems} from './card.js'

import {search} from './search.js'

import {filter} from './filter.js'

renderItems(storageData)

search()

filter(storageData)

const usersCounter = document.querySelector('#user-counter')
usersCounter.textContent = storageData.length