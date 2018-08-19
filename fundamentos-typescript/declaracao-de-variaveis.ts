// var, let e const

// var
function iniciarTime(iniciaJogo: boolean) {
    var nome = 'Messi e amigos';

    if (iniciaJogo) {
        var cidade = 'em Uberlândia';
    }

    console.log(`${nome} vão jogar ${cidade}`);

}

iniciarTime(true);