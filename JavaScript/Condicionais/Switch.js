// Switch

let expression = 'a'

switch (expression) {
    case 'a':
        // código
        console.log('a');
        break;
    case 'b':
        // codigo para expression b
        console.log('b');
        break;
    default:
        console.log('default');
        break;
}

// Calculadora

function calculate(number1, operator, number2) {
    let result;

    switch (operator) {
        case '+':
            result = number1 + number2;
            break;
        case '-':
            result = number1 - number2;
            break;
        case '*':
            result = number1 * number2;
            break;
        case '/':
            result = number1 / number2;
            break;   
        default:
            console.log('não implementado');
            break;    
    }

    return result;
}