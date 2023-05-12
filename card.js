const accordion = document.querySelector('#accordion')

export function renderItems(data) {
  accordion.innerHTML = data.map(e => {
    return `<div class="accordion-item border">
          <h2 class="accordion-header" id="heading-${e.id}">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-${e.id}" aria-expanded="false" aria-controls="collapse-${e.id}">
              <h6>${e.first_name} ${e.last_name}</h6>
            </button>
          </h2>
          <div id="collapse-${e.id}" class="accordion-collapse collapse" aria-labelledby="heading-${e.id}" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <p>full name: <span class='text-primary'>${e.first_name} ${e.last_name}</span></p>
              <p>email: <span class='text-primary'>${e.email}</span></p>
              <p>gender: <span class='text-primary'>${e.gender}</span></p>
              <p>ip address: <span class='text-primary'>${e.ip_address}</span></p>
            </div>
          </div>
        </div>`
  }).join('')
}