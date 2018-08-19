// boolean 
// No TypeScript, quando coloca o tipo, essa variavel eh tipada, 
// estah tipando estaticamente, nao consegue mais trocar esse tipo.
let estaPago: boolean = true;
// estaPago = 'Sim';

// number: valores inteiros e decimais.
let idade: number = 20;
let valor: number = 29.99;

// string
let empresa: string  = 'AlgaWorks';

// Template Strings
let nome: string = 'João';
console.log(`Olá, meu nome é ${nome} e tenho ${idade} anos`);
let concatenacaoTradicional = 'Olá, meu nome é ' + nome + ' e tenho ' + idade + ' anos';

// arrays
let notas: number[] = [8, 6, 7, 9];

// tuple
let alunos: [string, number, string] = ['João', 10, 'Matemática'];
console.log(alunos[0]);
console.log(alunos[1]);
console.log(alunos[2]);

// Enum
// Enum eh um novo tipo de dados
enum Cor {Verde, Amarelo, Azul, Branco};

// corFundo eh do tipo Cor. O valor que ela pode receber eh 
let corFundo: Cor = Cor.Verde;

// Any
// Eh uma forma de aceitar qualquer valor. Nao usar tipagem estatica do TypeScript.
let algumValor: any = 4; // Compila
algumValor = 'Agora eh uma string'; // Compila
algumValor = true; // Compila

// Biblioteca de terceiros... Nao sabe exatamente o que vai voltar
// Migracao de JavaScript para TypeScript... Vai usando any para, gradualmente, ir tipando
// o tipo das variaveis com o valor correto.
// Array com varios tipos de dados.
let notasAlunos: any[] = [8, 6, 7, 9, 'a'];

// void
// void eh o oposto do any: nao aceita nada. Eh mais utilizado como o retorno de metodos.
function alerta(): void {

}

// Tipos null e undefined
let u: undefined = undefined; // nao faz muito sentido declarar variaveis assim.
let n: null = null; // nao faz muito sentido declarar variaveis assim. 

// null e undefined sao subtipos dos outros tipos:
nome = undefined;
nome = null;

