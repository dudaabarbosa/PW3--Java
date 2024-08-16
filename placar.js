// CLOSUREEEE
const jogo = (function (){// primeiro parênteses clausura a função e o segundo executa
    let placar = [0,0];
    function exibirPlacar(time, pontuacao){
        placar[time-1] += pontuacao
    }
    return{
        golaco(time){
            exibirPlacar(time, 1)
        },
        carrinho(time){
            exibirPlacar(time, -1)
        },
        exibirPlacar(){
            console.log(`Time 1: ${placar[0]} X Time 2: ${placar[1]}`)
        }
    }
})()

//  console.log (jogo);
 
 jogo.exibirPlacar()
 jogo.golaco(1)
 jogo.golaco(2)
 jogo.carrinho(2)
 jogo.exibirPlacar()
