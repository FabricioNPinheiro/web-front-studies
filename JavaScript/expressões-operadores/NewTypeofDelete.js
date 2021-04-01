/* 
    new

    * left-hand-side expression
    * criar um novo objeto

*/

let nome = new String('Mayk');
nome.surName = "Brito";
let age = new Number(23);
console.log(nome.surName, age);
let date = new Date('2020-12-01')
console.log(date.__proto__)


/* 
    Operadores unários
    typeof
    delete
*/

const person = {
    nome: "Mayk",
    age: 25,
}

delete person.age;

console.log(typeof "maik")