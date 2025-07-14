function convert() {
  const degreeInput = document.getElementById("degrees").value;
  const type = document.getElementById("type").value;
  const resultDiv = document.getElementById("result");

  const temp = parseFloat(degreeInput);
  if (isNaN(temp)) {
    resultDiv.innerText = "Please enter a valid number!";
    return;
  }

  let celsius;

  if (type === "Celsius") {
    celsius = temp;
  } else if (type === "Fahrenheit") {
    celsius = ((temp - 32) * 5) / 9;
  } else if (type === "Kelvin") {
    celsius = temp - 273.15;
  }

  const fahrenheit = (celsius * 9) / 5 + 32;
  const kelvin = celsius + 273.15;

  resultDiv.innerText =
    `Celsius: ${celsius.toFixed(2)} °C\n` +
    `Fahrenheit: ${fahrenheit.toFixed(2)} °F\n` +
    `Kelvin: ${kelvin.toFixed(2)} K`;
}
