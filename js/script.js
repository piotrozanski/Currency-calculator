let buttonElement = document.querySelector(".js-button");
let formElement = document.querySelector(".js-form");
let sumElement = document.querySelector(".js-sum");
let inputElement = document.querySelector(".js-inputCurrency");
let outputElement = document.querySelector(".js-outputCurrency");
let resultElement = document.querySelector(".js-result");

let PlnToEur = 0.18476;
let PlnToUsd = 0.21453;
let UsdToEur = 0.99190;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let inputCurrency = inputElement.value;
    let outputCurrency = outputElement.value;
    let sum = sumElement.value;

    switch (inputCurrency) {
        case "PLN":
            if (outputCurrency === "PLN") result = (sum * 1);
            else if (outputCurrency === "EUR") result = (sum * PlnToEur);
            else if (outputCurrency === "USD") result = (sum * PlnToUsd);
            break;
        case "USD":
            if (outputCurrency === "USD") result = (sum * 1);
            else if (outputCurrency === "EUR") result = (sum * UsdToEur);
            else if (outputCurrency === "PLN") result = (sum / PlnToUsd);
            break;
        case "EUR":
            if (outputCurrency === "EUR") result = (sum * 1);
            else if (outputCurrency === "PLN") result = (sum / PlnToEur);
            else if (outputCurrency === "USD") result = (sum / UsdToEur);
            break;
    }
    resultElement.innerText = `${result.toFixed(2)} ${outputCurrency}`;
});
