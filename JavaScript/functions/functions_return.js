// function expression
// function anonymous

// parâmetros (parameters)
const sum = function(number1, number2){
    let total = number1 + number2;
    return total;
}

let number1 = 34
let number2 = 25

// console.log(`O número 1 é ${number1}`)
// console.log(`O número 2 é ${number2}`)
console.log(`A soma é ${sum(number1, number2)}`)
console.log(total)

// Entendendo melhor o retorno da função

// Função é um liquidificador

function fazerSuco(fruta1, fruta2) {
    return 'Suco de: ' + fruta1 + fruta2;
}

const copo = fazerSuco('banana', 'maçã')

console.log(copo)