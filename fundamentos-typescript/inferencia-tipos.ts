/**
 * A inferencia de tipo eh o TypeScript determinar qual eh o tipo de uma variavel
 * mesmo que nao se escreva esse tipo da variavel.
 * 
 */
/** Exemplo: Nao declarou que eh do tipo number. */
let quantidade = 20;

/** Entao, o TypeScript vai inferir. Se estah atribuindo um valor do tipo 20, 
 * significa que essa variavel eh do tipo number.
 */

// quantidade = 'qualquer'; - nao compila.

// Supondo um array. O TypeScript tambem vai inferir um tipo para esse array. Vai analisar
// e determinar que eh um array de number.
let x = [1, 2, null];

// x[0] = true; -> nao compila.

/** Contextual Typing */
/** Quando o mouse for clicado, associa uma funcao para isso.
 * Nao declarou qual eh o tipo do evento. Poderia ter colocado que eh um objeto do tipo
 * MouseEvent, mas nao definiu.
 * Isso significa que o TypeScript tambem vai inferir o tipo desse objeto, porque ele 
 * sabe que o onmousedown estah esperando uma funcao que recebe, como primeiro, tipo,
 * o this, que eh o window, e o segundo como um MouseEvent.
 */
window.onmousedown = function(evento) {
    /** Logar no console o botao que clicou. */
    console.log(evento.button); // OK
    // console.log(evento.buton); -> nao compila.
    
}

/** Boa pratica recomenda que defina-se sempre os tipos explicitamente. */

