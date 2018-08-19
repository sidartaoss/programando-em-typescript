/** Template String
 * Eh definir um template de string que serah
 *  substituido por uma string de verdade, ou seja, quando for 
 * avaliado.
 */

const precos = ['10', '23', '19'];

const acimaDeVinte = precos
        .filter(preco => preco > 20)
        .map(preco => `R$ ${preco},00`);
        // .map(preco => 'R$ ' + preco + ',00');

console.log(acimaDeVinte);