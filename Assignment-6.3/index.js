// variable declarations 
var celsiusToFahrenheit = 0;
var fahrenheitToCelsius = 0;
var temperatureInCelsius = 40;
var temperatureInFahrenheit = 104;

// celsius to fahrenheit conversion stored in a variable
celsiusToFahrenheit = (temperatureInCelsius*9)/5+32;
console.log(`Temperature of ${temperatureInCelsius} Celsius , will be ${celsiusToFahrenheit} Fahrenheit`);

// fahrenheit to celsius conversion stored in a variable
fahrenheitToCelsius = ((temperatureInFahrenheit-32)*5)/9;
console.log(`Temperature of ${temperatureInFahrenheit} Fahrenheit , will be ${fahrenheitToCelsius} Celsius`);
