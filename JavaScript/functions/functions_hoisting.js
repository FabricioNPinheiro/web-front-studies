// function hoisting

// Sofre elevação
sayMyName()

function sayMyName(){
    console.log('Mayk')
}

// Não sofre elevação
sayMyName()

var sayMyName = function(){
    console.log('Mayk')
}

var sayMyName = function sayMyName(){
    console.log('Mayk')
}

// ou conts, let
