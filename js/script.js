{
    const buttonElement = document.querySelector(".js-button");
    const formElement = document.querySelector(".js-form");
    const sumElement = document.querySelector(".js-sum");
    const inputElement = document.querySelector(".js-inputCurrency");
    const outputElement = document.querySelector(".js-outputCurrency");
    const resultElement = document.querySelector(".js-result");
    
    const caculatedResult = () => {
        const PlnToEur = 0.18476;
        const PlnToUsd = 0.21453;
        const UsdToEur = 0.99190;

        formElement.addEventListener("submit", (event) => {
            event.preventDefault();

            const inputCurrency = inputElement.value;
            const outputCurrency = outputElement.value;
            const sum = sumElement.value;

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
    }
    caculatedResult()
}