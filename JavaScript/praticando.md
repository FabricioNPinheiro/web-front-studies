// Variáveis e tipos de dados
// declaração or declaration
## var name

// assignment or atribuição de valores
## name = "Mike"

// que tipo de dado foi colocado na variável
## console.log(typeof name)

// agrupando declarações
## let age, isHuman
## age = 15
## isHuman = true

// multiplos argumentos na funcao
## console.log(name, age isHuman);

// escrita de texto + variaveis
## console.log('o ' + name + ' tem ' + age + ' anos.');

// interpolando valores com template literals or template strings
## console.log(`o ${name} tem ${age} anos.`);

// Object
## const person = {
    name: 'John',
    age: 30,
    weight: 88.6,
    isAdmin: true
## };

## console.log(`${person.name} tem ${person.age} anos.`);

// Arrays

## const animals = [
    'Lion', 
    'Monkey',
    {
        nome: 'Cat',
        age: 3
    }
## ];

// acessar valores dentro do Array
## console.log(animals[2].nome);
## console.log(animals.length);
## console.log(animals[1]);