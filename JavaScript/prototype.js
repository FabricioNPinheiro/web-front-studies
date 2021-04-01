/* 
    Prototype

    * prototype-based language
    * prototype chain
    * __proto__
*/

// Toda variável é embrulhada em um objeto
// Possuem diversas propriedades e funcionalidades
// A jogada mestre do javascript

/* 
    Type conversion (typecasting) (explícito) vs Type coersion (Implícito)

    Alteração de um tipo de dado para outro tipo
*/

console.log('9' + 5); // coersion
console.log(Number('9') + 5); // conversion

/* 
    Manipulando Strings e Números

*/

// Transformar String em Número e Número em string
let string = "123";
console.log(Number(string));
let number = 321;
console.log(String(number));

// Contar quantos caracteres tem uma palavra e quantos digitos tem um numero
let word = "Paralelepipedo";
console.log(word.length);
let number = 1234;
console.log(String(number).length);

// Transformar um número quebrado com 2 casa decimais e trocar ponto por vírgula
let number = 345.43454657
console.log(number.toFixed(2).replace(".", ",")); // string

// Transforme letras minúsculas em maiúsculas. Faça o contrário disso também
let word = "Programar é muito bacana!";
console.log(word.toUpperCase()); // Maiúsculas
console.log(word.toLowerCase()); // Minúsculas
console.log(word.toLowerCase().toUpperCase());

// Verificar se o texto contém a palavra Amor

let phrase = "Eu quero viver Amor!";
console.log(phrase.includes("Amor"));

// Separe um texto que contem espaços, em um novo array onde cada texto é uma posição
// do array. Depois disso, transforme o array em um texto e onde eram espaços, coloque _
let phrase = "Eu quero viver o Amor!"
let myArray = phrase.split(" ")
let phraseWithUndescore = myArray.join("_")
console.log(phraseWithUndescore)

// Criar Array com construtor
let myArray = new Array("a", "b", "c");
console.log(myArray);

// Contar elementos de um Array
console.log([
    "a",
    {type: "array"},
    function() { return "alo"},
][2]());

console.log([
    "a",
    {type: "array"},
    function() { return "alo"},
][2].type);

console.log(["a", "b", "c"].length)

// Transformar uma cadeia de caracteres em elementos de um array
let word = "manipulação";
console.log(Array.from(word));

