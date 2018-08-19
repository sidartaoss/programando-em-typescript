class Funcionario {

    nome: string;
    salario: number;

    constructor(nome: string, salario: number) {
        this.nome = nome;
        this.salario = salario;
    }

    /** Definir valores default para parametros de metodos no TypeScript */
    /** Definir nome variavel, tipo, valor 7.5 se nao for informado, quero que assuma o valor de 7.5 */
    pagarImposto(taxa: number = 7.5) {
        console.log(`Pagando ${this.salario * taxa / 100} de imposto`);
        
    }

}

class Secretario extends Funcionario {
}

class Executivo extends Funcionario {
    /** Sobrescrever metodo pagarImposto() */
    pagarImposto(taxa: number = 27.5) {
        console.log(`Executivo paga mais!`);
        super.pagarImposto(taxa);
    }
}

let sarah = new Secretario('Sarah', 2000);
sarah.pagarImposto();

console.log();

let jorge = new Executivo('Jorge', 30000);
jorge.pagarImposto();
