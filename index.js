
//Crie uma função calculadora
// Essa função receberá os parâmetros número1 (inteiro) número2 (inteiro) 
// e a operação.
// Se a operação for 'soma', retorne o valor da soma entre os elementos
// Se a operação for 'subtração', retorne o valor da subtração entre os elementos
// Se a operação for 'multiplicação', retorne o valor da multiplicação entre os elementos
// Se a operação for 'divisão', retorne o valor da divisão entre os elementos
// se a operação for inválida, retorne o valor 0

//Você deve atribuir o resultado do cálculo executado da função dentro de uma variável e, exibir no console

// const soma = (numero1,numero2) => {
//     return numero1 + numero2;
// }
// const total = soma(5,3)

// console.log(total);

// const calculadora = (num1,num2,operacao) => {

//     if (operacao === "+") return num1 + num2  ;

//     if (operacao === "-") return num1 - num2  ;

//     if (operacao === "*") return num1 * num2  ;

//     if (operacao === "/") return num1 / num2  ;

//     if (operacao === "") return 0 ;

// }
//     const acumulador = calculadora(2,4,"");
//     console.log(acumulador);

// //ou seja criamos uma funcão com as quatro operações chamando a propria função e 
// //ao final se o valor for invalido que o mesmo retorne 0.

// //ja aqui mostrando todas as operações sendo executada 

// const calcular = (numero1, numero2, operacao) => {

//     if (operacao === "+") return numero1 + numero2 ;
//     if (operacao === "-") return numero1 - numero2 ;
//     if (operacao === "*") return numero1 * numero2 ;
//     if (operacao === "/") return numero1 / numero2 ;
//     if (operacao === "")  return 0;
// }
// const totalSoma = calcular(23,22,"+");
// const totalSub = calcular(23,22,"-");
// const totalMult = calcular(23,22,"*");
// const totalDiv = calcular(23,22,"/");

// console.log(totalSoma);
// console.log(totalSub);
// console.log(totalMult);
// console.log(totalDiv);


// mostrar de forma dinamica quando o número é par ou impar 

const chamaPrompt = () => {
    const numeros = prompt('Digite um número');

    if (!numeros) {
        return;
    }

    if (numeros % 2 === 0){
        alert('par')
    } else {
        alert('impar')
    }    
}

chamaPrompt()
