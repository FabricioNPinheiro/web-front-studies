/*
    Function() constructor

    * expressão new
    * criar um novo objeto
    * this keyword
*/

// let date = new Date("2021-01-22")
// console.log(date)

// let name = new String("Fabrício")
// console.log(name)


function Person(name) {
    this.name = name;
    this.walk = function() {
        return this.name + " está andando"
    }
}

const mayk = new Person("Mayk");
const joao = new Person("Joao");
console.log(mayk.walk());
console.log(joao.walk());