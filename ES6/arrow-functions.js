/** Arrow functions:
 * Forma de criar uma funcao reduzida para deixar o 
 * codigo mais legivel.
 *  Nao eh um conceito novo, eh apenas a forma de escrever a funcao. 
 */

/** Quer retornar esses valores formatados.
 * Colocar o cifrao na frente concatenado com virgula e 00.
 */
const precos = ['10', '23', '19'];

/** Funcao map()
 * Vai mapear esses valores, trabalhar em cima deles, em cada um dos deles; fazer o 
 * mapeamento eh aplicar uma funcao em cima deles, em cada um deles. O que retornar
 * dessa funcao sera o novo array.
 * 
 * Dentro dos parenteses do map coloca uma funcao, abre/fecha chaves dentro dessa funcao.
 * O parametro que recebe na funcao eh cada um dos elementos do array precos.
 * Dentro dessa funcao que estah sendo executada, para cada elemento vai chamar de preco,
 * mas estah trabalhando em cada um dos elementos do array precos.
 */
/** -- FORMA TRADICIONAL -- */
// const precosEmReais = precos.map(function(preco) {
//     return 'R$ ' + preco + ',00';
// });


/** -- ARROW FUNCTIONS -- */

/** Versao 1.0 */
const precosEmReais = precos.map((preco) => { return 'RS ' + preco + ',00'; });

/** precos: estou mapeando: para cada preco, quero que seja retornado a expressao:
 * 'RS ' + preco + ',00' 
 * */
/** Versao 2.0 */
const precosEmReais2 = precos.map(preco => 'RS ' + preco + ',00');

// console.log(precosEmReais);
// console.log(precosEmReais2);

/** Aplicar arrow functions para varias coisas:
 * 
 * Para pegar os precos acima de 20 reais.
 * 
 * O que faz o filter? Vai aplicar uma funcao que precisa retornar
 * true ou false. Se for true, mantem o valor dentro do array precos.
 * Para cada preco, vai aplicar uma funcao que vai testar se eh acima de 20. 
 * */
/** Versao 3.0 */
// const acimaDeVinte = precos.filter(preco => preco > 20);
// console.log(acimaDeVinte);

/** Primeiro filtrar e, depois, aplicar um mapa no resultado. */
/** Versao 4.0 */
const acimaDeVinte2 = precos
        .filter(preco => preco > 20)
        .map(preco => 'RS ' + preco + ',00');
console.log(acimaDeVinte2);