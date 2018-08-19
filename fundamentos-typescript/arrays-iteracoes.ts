/** arrays eh uma forma de armazenar valores em uma especie de
 * colecao de valores.
 */
let notasDosAlunos: number[] = [10, 8, 8.5, 7];

/** Percorrer esse array, mostrar os valores desse array. */

// indices - in
for (let i in notasDosAlunos) {
    console.log(i);
}

console.log();

// valores - of
for (let notaAluno of notasDosAlunos) {
    console.log(notaAluno);
    
}


