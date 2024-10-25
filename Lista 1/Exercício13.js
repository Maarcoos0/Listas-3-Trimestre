let compra = 3;
let código = "klmp";
let cliente = "Jose";

/*
0 = abcd
1 = xypk
2 = klmp
3 = qrst
*/

switch(código) {
    case 0:
        console.log('RS 5.30')
        break
    case 1:
        console.log('RS 6.00')
        break
    case 2:
        console.log('RS 3.20')
        break
    case 3:
        console.log('2.50')
        break
    default:
        console.log('Código Inválido')
        break
}

let abcd = 5.3;
let xypk = 6.0;
let klmp = 3.2;
let qrst = 2.5;

var multiplicação = klmp * compra;
console.log(cliente +"Está devendo: " +multiplicação)