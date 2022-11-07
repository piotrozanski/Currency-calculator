{
    const exchangeUSD = (value, outputCurrency) => {
        switch (outputCurrency) {
            case "USD":
                return value;
            case "PLN":
                return value * 5.53;
            case "EUR":
                return value * 1.03;
        }
    }

    const exchangePLN = (value, outputCurrency) => {
        const usd = 4.89;
        const euro = 4.84;


        switch (outputCurrency) {
            case "PLN":
                return value;
            case "USD":
                return value / usd;
            case "EUR":
                return value / euro;
        }
    }

    const exchangeEUR = (value, outputCurrency) => {
        switch (outputCurrency) {
            case "EUR":
                return value;
            case "USD":
                return value * 0.9694;
            case "PLN":
                return value * 4.84;
        }
    }

        const currencyExchange = (value, inputcurrency, outputCurrency) => {

            switch (inputcurrency) {
                case "USD":
                    return exchangeUSD(value, outputCurrency);
                case "PLN":
                    return exchangePLN(value, outputCurrency);
                case "EUR":
                    return exchangeEUR(value, outputCurrency);
            }
        };


    const onFormSubmit = (event) => {
        event.preventDefault();

        const valueElement = document.querySelector(".js-value");
        const resultElement = document.querySelector(".js-result");
        const inputElement = document.querySelector(".js-inputCurrency");
        const outputElement = document.querySelector(".js-outputCurrency");

        const value = +valueElement.value;
        const inputCurrency = inputElement.value;
        const outputCurrency = outputElement.value;
        const result = currencyExchange(value, inputCurrency, outputCurrency);

        resultElement.innerHTML = `${result.toFixed(2)} ${outputCurrency}`;
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    };

    init();
};