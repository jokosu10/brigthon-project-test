// no 2
function convertToSeparatorThousand(number) {
  return number.toLocaleString();
}
const num1 = parseInt(77777);
var outputDiv = document.getElementById('jsResult');

// no 3
var developerName = 'Joko Susilo';
var addRole = developerName + ' CrossTechnoDeveloper';
let resultString = addRole.replace(/o/gi, 'A');

// no 4
var cities = [];
cities = ['Surabaya', 'Jakarta', 'Semarang', 'Makassar'];
var resultCity = '';
var resultCityChange = '';
var resultCityPush = '';
for (let index = 0; index < cities.length; index++) {
  resultCity += `${index + 1}. ${cities[index]} \n`;
}
cities[2] = 'Samarinda';
for (let index = 0; index < cities.length; index++) {
  resultCityChange += `${index + 1}. ${cities[index]} \n`;
}
cities.push('Aceh');
for (let index = 0; index < cities.length; index++) {
  resultCityPush += `${index + 1}. ${cities[index]} \n`;
}

// no 5
var things = [];
things['fruit'] = 'Orange';
things['animal'] = 'Dog';
things['bird'] = 'Eagle';
things['food'] = 'Rice';
var resultThings = '';
var resultThingsChange = '';
for (var key in things) {
  if (things.hasOwnProperty(key)) {
    resultThings += key + ': ' + things[key] + '<br>';
  }
}
things['animal'] = 'Cat';
for (var key in things) {
  if (things.hasOwnProperty(key)) {
    resultThingsChange += key + ': ' + things[key] + '<br>';
  }
}

// print to html
var outputDiv1 = document.getElementById('jsResult1');
var outputDiv2 = document.getElementById('jsResult2');
var outputDiv3 = document.getElementById('jsResult3');
var outputDiv4 = document.getElementById('jsResult4');
var outputDiv5 = document.getElementById('jsResult5');
var outputDiv6 = document.getElementById('jsResult6');
var outputDiv7 = document.getElementById('jsResult7');
var outputDiv8 = document.getElementById('jsResult8');

outputDiv1.innerHTML = convertToSeparatorThousand(num1);
outputDiv2.innerHTML = resultString;
outputDiv3.innerHTML = resultCity;
outputDiv4.innerHTML = resultCityChange;
outputDiv5.innerHTML = resultCityPush;
outputDiv6.innerHTML = resultThings;
outputDiv7.innerHTML = resultThingsChange;
