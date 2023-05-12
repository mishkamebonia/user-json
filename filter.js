const genderList = document.querySelectorAll('input[name="gender"]')

let maleArr = []
let femaleArr = []
let otherArr = []

export function filter(data) {
  genderList.forEach(item => {
    item.addEventListener('click', () => {
      const value = item.value.toLowerCase()
      const display = document.querySelectorAll('.accordion-item')
  
      if (item.checked) {
        for (let i = 0; i < data.length; i++) {
          const dataValue = data[i].gender.toLowerCase()

          if (value === dataValue) {

            if ('male' === dataValue) {
              maleArr.push(dataValue)
              display[i].style.display = 'none'
              console.log(value, dataValue, maleArr.length)
            } else if ('female' === dataValue) {
              femaleArr.push(dataValue)
              display[i].style.display = 'none'
              console.log(value, dataValue, femaleArr.length)
            } else if ('other' !== dataValue) {
              otherArr.push(dataValue)
              display[i].style.display = 'none'
              console.log(value, dataValue, otherArr.length)
            }

          }

      //     else if (!value === !dataValue) {
      //   if ('male' === dataValue) {
      //     maleArr.push(dataValue)
      //     display[i].style.display = 'none'
      //     console.log(value, dataValue, maleArr.length + 'close')
      //     console.log(value, dataValue, maleArr)
      //   } else if ('female' === dataValue) {
      //     femaleArr.push(dataValue)
      //     display[i].style.display = 'none'
      //     console.log(value, dataValue, maleArr.length + 'close')
      //   } else {
      //     otherArr.push(dataValue)
      //     display[i].style.display = 'none'
      //     console.log(value, dataValue, maleArr.length + 'close')
      //   }
      // }
  
        }
      } 
  
    })
  })
}