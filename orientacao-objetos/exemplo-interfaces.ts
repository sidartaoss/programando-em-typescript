/** Interfaces servem para definir um contrato.
 * Essa funcao recebe esse objeto e ele precisa seguir esse contrato aqui: no caso, ter um 
 * atributo do tipo number, pelo menos o atributo number.
 * 
 * Criar o contrato do que pode ser recebido no metodo.
 */

interface Pessoa {
    idade: number;
    /** Pode definir que essa propriedade nao eh obrigatoria colocando a interrogacao na frente */
    sexo?: string;
}

/**
function imprimirIdade(pessoa: { idade: number }) {
    console.log(pessoa.idade);    
}
*/

/** Imagina se tivesse varios parametros que gostaria de forcar para serem passados como parametro
 * na chamada do metodo, ficaria muito grande aqui. Entao, pode criar separado em uma interface
 * o atributo e simplesmente escrever Pessoa, eh do tipo Pessoa.
 */
function imprimirIdade(pessoa: Pessoa) {
    console.log(pessoa.idade);    
}

/** Se tirar idade, para de compilar na chamada do metodo. Eh obrigado a colocar idade. */
// let joaoMarcos = { nome: 'Joao Marcos' };

let joaoMarcos = { nome: 'Joao Marcos', idade: 22 };

imprimirIdade(joaoMarcos);