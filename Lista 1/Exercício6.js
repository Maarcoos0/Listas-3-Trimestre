let codigoAluno = 12;
let nota1 = 20;
let nota2 = 30;
let nota3 = 11;

let peso1 = 4;
let peso2 = 3;
let peso3 = 3;
 var soma = nota1 * peso1 + nota2 * peso2 + nota3 * peso3
 var divisao = soma / nota1 + nota2 + nota3;
 console.log(divisao)

 console.log("Aluno "+ codigoAluno + nota1 + nota2 + nota3)

 if (divisao >= 50) {
    console.log("Foi aprovado com a média de: " + divisao)
 } else {
    console.log("Foi reprovado")
 }