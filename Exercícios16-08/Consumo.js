const consumo_energia = (function(){
    let consumo = 0;
    function consumoEnergia(horas, potencia){
        consumo = potencia*horas*30/1000;
    }
    return{
        consumo(hora, potencia){
            consumoEnergia(hora, potencia)
        },
        exibirConsumo(){
            console.log("Microondas: " + consumo)
        }
    }
})()
consumo_energia.consumo(12, 200)
consumo_energia.exibirConsumo();