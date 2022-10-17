const input = document.querySelector("input");
const convertButton = document.querySelector("button");
const lengthPara = document.getElementById("length-p");
const volumePara = document.getElementById("volume-p");
const massPara = document.getElementById("mass-p");

function convertLength(value) {
  const feet = (value * 3.281).toFixed(3);
  const meter = (value * 0.3048).toFixed(3);

  return { meter, feet };
}

function convertVolume(value) {
  const gallon = (value * 0.264).toFixed(3);
  const liter = (value * 3.78541178).toFixed(3);

  return { liter, gallon };
}

function convertMass(value) {
  const pound = (value * 2.204).toFixed(3);
  const kilo = (value * 0.45359237).toFixed(3);

  return { kilo, pound };
}

function renderValues(length, volume, mass, value) {
  const lengthHtml = `${value} meters = ${length.feet} feet | ${value} feet = ${length.meter} meters`;
  const volumeHtml = `${value} liters = ${volume.gallon} gallons | ${value} gallons = ${volume.liter} liters`;
  const massHtml = `${value} kilos = ${mass.pound} pounds | ${value} pounds = ${mass.kilo} kilos`;

  lengthPara.innerHTML = lengthHtml;
  volumePara.innerHTML = volumeHtml;
  massPara.innerHTML = massHtml;
}

convertButton.addEventListener("click", function () {
  const lengthValues = convertLength(input.value);
  const volumeValues = convertVolume(input.value);
  const massValues = convertMass(input.value);

  renderValues(lengthValues, volumeValues, massValues, input.value);
});
