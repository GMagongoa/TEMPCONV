//We create an event listener that triggers when the convert button is clicked.
document.querySelector('form').addEventListener('submit', function (event) {
  event.preventDefault();

  //We declare the variables that will store the input temperature and the selected option.
  var inputTemperature = document.getElementById('degreesInput').value;
  var selectedOption = document.querySelector('select').value;

  //We declare the variables that will store the output temperature and the symbol.
  var outputTemperature;
  var symbol;

  //We create a conditional statement that will check the selected option and convert the temperature accordingly.
  if (selectedOption === 'celcius') {
    outputTemperature = ((inputTemperature - 32) * 5) / 9;
    symbol = '°C';
  } else {
    outputTemperature = (inputTemperature * 9) / 5 + 32;
    symbol = '°F';
  }

  //We display the output temperature in the output field.
  document.getElementById('degreesOutput').value =
    outputTemperature.toFixed(2) + symbol;
});
