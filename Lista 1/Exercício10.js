let cliente = "Malaquias"
let saldo = 333;

console.log(cliente + "Tinha o saldo de :"+ saldo)

let a = 200;
let b = 199;
let c = 199;
let d = 399;

var soma = b + 39.8

var soma1 = c + 59.7

var soma2 = d + 159.60


if (saldo <= 200) {
    console.log("Seu saldo é" + saldo + ", Você não tem direito")
} else if (saldo >= 201 && saldo <= 400) {
    console.log ("Você tem direito a esse valor: "+ soma)
} else if (saldo >= 401 && saldo <= 600) {
    console.log("Você tem direito a esse valor: "+ soma1)
} else if (saldo => 601) {
    console.log("Você tem direito a esse valor: "+ soma2)
}