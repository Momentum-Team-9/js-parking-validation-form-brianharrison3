const carYear = document.querySelector('#car-field')
const numberDays = document.querySelector("#days-field")
const cvv = document.querySelector("#cvv-field")
let formIsValid

function validateCarYear () {
    if (carYear.value > 1900 && carYear.value < 2021 ) {
      const error = document.createElement('div')
      carYear.classList.add('input-invalid')
      document.querySelector('.car-field').appendChild(error).innerText = 'This field is required.'
    } else {
      formIsValid = true
    }
  }

  function validateNumberDays (){
    if (numberDays.value > 0 && numberDays.value < 31 ) {
        const error = document.createElement('div')
        numberDays.classList.add('input-invalid')
        document.querySelector('.days-field').appendChild(error).innerText = 'This field is required.'
      } else {
        formIsValid = true
      }

  }

  function validateCVV (){
    if (cvv.length != 3) {
        const error = document.createElement('div')
        cvv.classList.add('input-invalid')
        document.querySelector('.cvv-field').appendChild(error).innerText = 'This field is required.'
      } else {
        formIsValid = true
      }

  }

