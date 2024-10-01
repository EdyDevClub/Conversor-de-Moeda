const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector("currency-select")

function convertValues(){
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")

    console.log(currencySelect)

    const dolarToday = 5.45
    const euroToday = 6.25

    const convertValue = inputCurrencyValue / dolarToday

    currencyValueConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(convertValue)

    console.log(convertValue)
}

convertButton.addEventListener("click", convertValues)