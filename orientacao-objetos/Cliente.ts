class Cliente {
    
    nome: string;
    idade: number;

    /** No TypeScript, pode-se definir apenas um Construtor. */

    /** Para o que receberia os parametros no Construtor?
     * Para jah inicializar as propriedades da Classe.
     */
    constructor(nome: string, idade: number) {
        /** This eh utilizado para definir que 
         * estah acessando este objeto que estah sendo construido
         * de Cliente. this.nome: o nome faz parte do objeto que 
         * estah sendo construido.
         */
        this.nome = nome;
        this.idade = idade;
    }

    apresentar() {
        return `Olá, eu sou ${this.nome} e tenho ${this.idade} anos`
    }    

}

/** Saindo do escopo da classe, eh o JavaScript normal. */
// let x: number = 10;
// let valor: number = 29.90;

/** Criar um objeto do tipo Cliente */
/** Variavel joao do tipo Cliente */
let joao: Cliente = new Cliente('Joao', 25);
let apresentacao: string = joao.apresentar();

console.log(apresentacao);

let maria: Cliente = new Cliente('Maria', 23);
console.log(maria.apresentar());



/** Como cria o objeto do tipo Cliente? Usa a palavra-chave new. 
 * Quando abre/fecha parenteses, estah chamando o Construtor padrao
 * desta classe. Chama o Construtor apenas quando declara-se new (quando
 * estah construindo o objeto.)
*/