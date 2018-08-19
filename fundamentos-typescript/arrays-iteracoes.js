/** arrays eh uma forma de armazenar valores em uma especie de
 * colecao de valores.
 */
var notasDosAlunos = [10, 8, 8.5, 7];
/** Percorrer esse array, mostrar os valores desse array. */
// indices - in
for (var i in notasDosAlunos) {
    console.log(i);
}
console.log();
// valores - of
for (var _i = 0, notasDosAlunos_1 = notasDosAlunos; _i < notasDosAlunos_1.length; _i++) {
    var notaAluno = notasDosAlunos_1[_i];
    console.log(notaAluno);
}
