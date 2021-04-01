// if...else

let temperature = 36.5;

if(temperature >= 37) {
    console.log('Febre')
} else {
    console.log('Saudável')
}

// ou

if(temperature >= 37.5) {
    console.log('Febre alta')
} else if(temperature < 37.5 && temperature >= 37) {
    console.log('Febre Moderada')
} else {
    console.log('Saudável')
}

// ou

let highTemperature = temperature >= 36.9;
let mediumTemperature = temperature < 37.5 && temperature >= 37

if(highTemperature) {
    console.log('Febre alta')
} else if(mediumTemperature) {
    console.log('Febre moderada')
} else {
    console.log('Saudável')
}