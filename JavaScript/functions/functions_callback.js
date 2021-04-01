// callback function

function sayMyName(name) {
    console.log('antes de executar a funcao callback')
    name();
    console.log('depois de executar a funcao callback')
}

sayMyName(
    () => {
            console.log('Estou em uma callbak')
    }
)


// Invés/Mesmo de: 

function sayMyName() {
    console.log('antes de executar a funcao callback')

    function name() {
        console.log('Estou em uma callbak')
    }
    name();

    console.log('depois de executar a funcao callback')
}

sayMyName()