// throw(lançar)

function sayMyName(name = '') {
    if(name === '') {
        throw 'Nome é obrigatório'
    }

    console.log('depois do erro')
}

// try(tentar)...catch(pegar)
try {
    sayMyName();
} catch(e) {
    console.log(e);
}