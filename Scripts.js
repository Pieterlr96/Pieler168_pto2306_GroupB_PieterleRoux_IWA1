const MAX_NUMBER = 10
const MIN_NUMBER = -10
const STEP_AMOUNT = 5

const number= document.querySelector('[data-key="number"]')
const subtract = document.querySelector('[data-key="subtract"]')
const add= document.querySelector('[data-key="add"]')

const subtractHandeler = () => {
    const newValue = parseInt(number.value) - STEP_AMOUNT;
    number.value = newValue;
    if (newValue <= MIN_NUMBER) {
        subtract.disabled = true
    } else {
        subtract.disabled = false
    }
    if (add.disabled === true){
        add.disabled = false
}
}
const addHandeler = () => {
    const newValue = parseInt(number.value) + STEP_AMOUNT;
    number.value = newValue;

    if (newValue >= MAX_NUMBER) {
        add.disabled = true
    } else {
        add.disabled = false
    }    
    if (subtract.disabled === true){
        subtract.disabled = false
}
}

subtract.addEventListener('click', subtractHandeler)
add.addEventListener('click', addHandeler)