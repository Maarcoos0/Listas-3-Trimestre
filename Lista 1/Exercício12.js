let = compra = 2;
let código = 1001;
let cliente = "Bruno";

console.log(cliente +"Irá comprar")
/*
0 = 1001
1 = 1324
2 = 6548
3 = 0987
4 = 7623
*/

switch(código) {
    case 0:
        console.log('RS 5.32')
        break
    case 1:
        console.log('RS 6.45')
        break
    case 2:
        console.log('RS 2.37')
        break
    case 3:
        console.log('RS 5.32')
        break
    case 4:
        console.log('RS 6.45 ')
        break
}

let C1001 = 5.32;
let C1324 = 6.45;
let C6548 = 2.37;
let C0987 = 5.32;
let C7623 = 6.45

var multiplicação = C1001 * compra;
console.log(cliente +" Você está devendo: " +multiplicação)