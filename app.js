// Get inputs from DOM
const celsiusInput = document.getElementById('celsius');
const fahrenheitInput = document.getElementById('fahrenheit');
const kelvinInput = document.getElementById('kelvin');

const inputs = document.querySelectorAll("input");

const convertCelsiusToFahrenheit = (temperatureValue) => {
    return Math.round(((temperatureValue * 9/5) + 32) * 100) / 100;
}

const convertCelsiusToKelvin = (temperatureValue) => {
    return Math.round((temperatureValue + 273.15) * 100) / 100;
}

const convertFahrenheitToCelsius = (temperatureValue) => {
    return Math.round((temperatureValue - 32) / (9/5) * 100) / 100;
}

const convertFahrenheitToKelvin = (temperatureValue) => {
    return Math.round((temperatureValue + 459.97) * (5/9) * 100) / 100;
}

const convertKelvinToFahrenheit = (temperatureValue) => {
    return Math.round(((temperatureValue - 273.15) * 9/5 + 32) * 100) / 100;
}

const convertKelvinToCelsius = () => {
    return Math.round((temperatureValue - 273.15) * 100) / 100;
}

inputs.forEach((input) => {
    input.addEventListener('input', (e) => {
    inputName = e.target.name;
    temperatureValue = parseFloat(e.target.value);
    switch(inputName) {
        case 'celsius':
            if (!isNaN(temperatureValue)) {
                fahrenheitInput.value = convertCelsiusToFahrenheit(temperatureValue);
                kelvinInput.value = convertCelsiusToKelvin(temperatureValue);
            } else {
                fahrenheitInput.value = "";
                kelvinInput.value = "";
            }
            break;
        case 'fahrenheit':
            if (!isNaN(temperatureValue)) {
                celsiusInput.value = convertFahrenheitToCelsius(temperatureValue);
                kelvinInput.value = convertFahrenheitToKelvin(temperatureValue);
            } else {
                celsiusInput.value = ""; 
                kelvinInput.value = "";
            }
            break;
        case 'kelvin':
            if (!isNaN(temperatureValue)) {
                fahrenheitInput.value = convertKelvinToFahrenheit(temperatureValue);
                celsiusInput.value = convertKelvinToCelsius(temperatureValue);
                fahrenheitInput.value = "";
                celsiusInput.value = "";
            }
            break;
        default:
            console.log("Invalid Input...")            
    }
  })
})