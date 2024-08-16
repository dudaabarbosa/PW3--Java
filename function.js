function somar(a, b){
    return a + b;
}
// console.log(somar(3, 9));

function subtrair(a,b){
   console.log(a-b);;
}
// subtrair(20,15);

var dividir = function(a,b){
    console.log(a/b);
}
dividir(12,3);

var multiplicar = (a,b) => console.log(a*b);
multiplicar (2,3);

var chained = function(){
    return function (a,b){
        console.log(a**b)
    }
}
// chained()(2,50)

var bus = (a) => (a) => console.log(Math.sqrt(a))
bus()(4)