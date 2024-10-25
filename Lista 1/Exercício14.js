let funcionário = 2;

/*
0 = Gerente 101 3.000
1 = Engenheiro 102 3.100
2 = Técnico 103 3.500
*/

switch (funcionário) {
    case 0:
        console.log("Ele tem um salário de 3.000 e é o Gerente")
        break
    case 1:
        console.log("Ele tem um salário de 3.100 e é Engenheiro")
        break
    case 2:
        console.log("Ele tem um salário de 3.500 e é técnico")
        break
    default :
        console.log("Como o funcionário não está na tabela, ele terá um aumento de 40% em seu salário")
}

var novoSalarTec = 3.500 + 1.050;
var diferença = novoSalarTec - 3.500
console.log("O Técnico tinha um salário de R$ 3.500,00")
console.log("E passou a receber um salário de R$ " + novoSalarTec)
console.log("Com uma diferença de R$ " + diferença)