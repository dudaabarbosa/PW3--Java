// CLOSUREEEE
const jogo = (function (){// primeiro parênteses clausura a função e o segundo executa
    let placar = 0;
    function exibirPlacar(pontuacao){
        placar += pontuacao
    }
    return{
        golaco(){
            exibirPlacar(1)
        },
        carrinho(){
            exibirPlacar(-1)
        },
        exibirPlacar(){
            console.log(placar)
        }
    }
})()

//  console.log (jogo);
 
 jogo.exibirPlacar()
 jogo.golaco()
 jogo.golaco()
 jogo.carrinho()
 jogo.exibirPlacar()
