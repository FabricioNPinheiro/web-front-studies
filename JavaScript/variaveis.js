/* 
    Variável
    - Nomes simbólicos para receber algum valor
    - Atalhos de código
    - Identificadores
    - 3 palavras reservadas para criar uma variável
        * var
        * let
        * const
    
    - O JS é uma linguagem fracamente tipada e dinâmica
    - Variáveis não precisam ter um tipo previamente definido
    - Podemos mudar o conteúdo da variável (exceto const)

    let clima = true; // bollean
    clima = "Frio"; // string
    console.log(typeof clima);

    Escopo
    - Escopo determina a visibilidade de alguma variável no JS

    # Block statement
    { -> inicia um bloco
      -> aqui dentro é um bloco e posso colocar qualquer código
    } -> aqui fechamos o bloco

    O bloco, também criará um novo escopo. Chamamos de 'block-scoped'

    {
        let temp = 1;
        console.log(temp);
    }

    // var é global e, também local
    // hosting (elevação)

    console.log('Existe x antes do bloco?', x);

    {
        var x = 0;
    }

    console.log('Existe x depois do bloco?', x);

*/

// const e let são locais e só funcionam no escopo onde foi criado

let y = 1;
{
    console.log('Existe y antes do bloco?', y);
}
console.log('Existe y antes do bloco?', y);

const x = 3;

{
    const x = 4;
    console.log('Existe x antes do bloco?', x);
}

console.log('Existe x antes do bloco?', x);

/*
## Para criar nomes

- JS é case-sensitive (sensível ao caso)
- JS aceita a cadeia de caracteres Unicode

- Posso:
    * Iniciar com esses caracteres especiais: $ '_'
    * Iniciar com letras
    * Colocar acentos
    * Letras maísculas e minúsculas fazem diferença
    
- Não Posso:
    * Iniciar com números
    * Colocar espaços vazios no nome
    
- Ideal:
    * Criar nomes que fazem sentido
    * Que explique o que a variável é ou faz
    * camelCase
    * snake_case
    * Escrever em inglês

*/