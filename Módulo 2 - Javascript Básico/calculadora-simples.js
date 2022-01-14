let calcularValor = operacao => {
    if (operacao == '+') {
        return var1 + var2;
    }
    else if (operacao == '-') {
        return var1 - var2;
    }
    else if (operacao == '*') {
        return var1 * var2;
    }
    else if (operacao == '/') {
        return var1 / var2;
    }
    return ('Operação não encontrada');
}


const prompt = require('prompt-sync')();

let var1 = prompt('Digite a primeira variável: ');
let var2 = prompt('Digite a segunda variável: ');
let operacao = prompt('Qual operação deseja executar? Opções disponíveis: + - * / ');
console.log(calcularValor(operacao));
