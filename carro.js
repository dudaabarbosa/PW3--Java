const carro = (function (){
    let velocidade = 0;
    function calculandoVelocidade(acelerado) {
        velocidade += acelerado
         
    }
    return {
        acelerando(){
            calculandoVelocidade(5)          
        },
        freiar(){
            calculandoVelocidade( - velocidade)
        },
        exibirVelocidade(){
            console.log("Velocidade atual: " + velocidade)
        }
    }
})()
carro.exibirVelocidade()
carro.acelerando()
carro.acelerando()
carro.exibirVelocidade()
carro.freiar()
carro.exibirVelocidade()
carro.acelerando()
carro.exibirVelocidade()