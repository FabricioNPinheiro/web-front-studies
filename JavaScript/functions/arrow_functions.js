// arrow function

const sayMyName = (name) => {
    console.log(name)
}

sayMyName('Fabrício')

// Invés de

const sayMyName = function(name){
    console.log(name)
}

sayMyName('Fabrício')

const sayMyName = function () {}
// troca por:
const sayMyName = () => {}