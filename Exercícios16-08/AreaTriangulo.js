const areaT = (function (){
    let area
    function triangulo_retangulo(altura, base){
        return altura*base/2
    }
    return{
        area (altura, base){
            console.log('Área: ' + triangulo_retangulo(altura, base))
        }
    }
})()
areaT.area(5,2)