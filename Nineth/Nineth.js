// 9. The Temperature Converter
// Create a function called Celsius to Fahrenheit:
// ● Store a Celsius temperature into a variable.
// ● Convert it to Fahrenheit and output "NN°C is NN°F".
// Create a function called Fahrenheit to celsius:
// ● Now store a Fahrenheit temperature into a variable.
// ● Convert it to celsius and output "NN°F is NN°C."
// Conversion of Celcius To Farenheit
function convertToFarenheit(celsius) {
    // make the given fahrenheit variable equal the given celsius value
    // multiply the given celsius value by 9/5 then add 32
    let fahrenheit = celsius * 9/5 + 32
    // return the variable fahrenheit as the answer
    return celsius+"NN°C is "+fahrenheit+"NN°F";
  }
  
  console.log(convertToFarenheit(30));




//   Conversion of Farenheit To Celcius 
  function celciusToFarenheit(Farenheit) 
{
  var cTemp = Farenheit;
  var cToFahr = (cTemp-32) * 5 / 9 ;
  var message = cToFahr;
   return Farenheit+"NN°F is "+message+"NN°C";
}
console.log(celciusToFarenheit(86))