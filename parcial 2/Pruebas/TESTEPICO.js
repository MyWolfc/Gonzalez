//NO FUNCIONO PORQUE NO SEAS PENDEJO ESTA EN METODO 
//QUIERE DECIR ES UNA VARIABLE LOCAL
//ERROR
// function Hola(){
//     var saludo = 'Hola';
// }
// Hola();
// console.log(saludo);

// console.log("Hola mundo :D");
//NO FUNCIONO PORQUE NO SEAS PENDEJO ESTA EN 
//METODO QUIERE DECIR ES UNA VARIABLE LOCAL
//ERROR
// function Hola() {
//     var saludo = 'hola';
// }
// Hola();
// console.log(saludo);

//ERROR SE IMPRIME PRIMERO LA VARIABLE ANTES DECLARARLA
// function Saludar(){
//     console.log(frase);
//     frase = 'Hola';
//     var frase;
// }
// Saludar();


//SALIDA DE "hola" SE PUEDEN ASIGNAR VALORES A UNA VARIABLE
// ANTES DE DECLARARLAS
// function Saludar(){
//     frase = 'hola';
//     console.log(frase);
//     var frase;
// }
// Saludar();

//UNDEFINED PORQUE SE HACE 
//REFERENCIA ALA VARIABLE PERO NO DECLARA NI 
//SE LE ASIGNA VALOR
// function Saludar(){
//     console.log(frase);
//     var frase = 'Hola';
// }
// Saludar();

//SALIDA "hola" porque var quiere decir que es global 
//
// if(true){
//     var saludo = 'hola';
// }
// console.log(saludo);

//ERROR porque la variable LET solo se queda
//en esa parte del if
// if(true){
//     let saludo = 'hola';
// }
// console.log(saludo);


//ERROR PORQUE ES LET solo se queda ahi 
//y no sale de la funcion
// function Hola(){
//     let saludo = 'Hola';
// }
// Hola();
// console.log(saludo);


//SALIDA hola PORQUE VAR ES VARIABLE GLOBAL SE APLICA 

// if(true){
//     var saludo = 'hola';
// }
// console.log(saludo);


//SALIDA Hola porque al chile no se
// function Hola(){
//     saludo = 'Hola';
// }
// Hola();
// console.log(saludo);
