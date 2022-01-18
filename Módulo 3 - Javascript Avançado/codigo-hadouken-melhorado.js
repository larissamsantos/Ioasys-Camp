const readlineSync = require('readline-sync');
var _ = require('lodash');

//Dados de entrada
const nome = "larissa menezes";
const idade = 27;
const nacionalidade = "brasileira";
const estado = "sergipe";
const cidade = "aracaju";
const formacao = "ioasyscamp";

const dadosCadastradosMap = new Map();
dadosCadastradosMap.set('nome', nome);
dadosCadastradosMap.set('idade', idade);
dadosCadastradosMap.set('nacionalidade', nacionalidade);
dadosCadastradosMap.set('estado', estado);
dadosCadastradosMap.set('cidade', cidade);
dadosCadastradosMap.set('formacao', formacao);

const dadosCadastradosArray = [nome, idade, nacionalidade, estado, cidade, formacao];

//Primeira forma: utilizar o operador lógico &&
const cadastroUsuario1 = () => {
    if (nome === nomeUsuario && idade === idadeUsuario && nacionalidade === nacionalidadeUsuario && estado === estadoUsuario && cidade === cidadeUsuario && formacao === formacaoUsuario) {
        console.log("Cadastrada!");
    } else console.log("Não cadastrada!");
}

//Segunda forma: utilizar o objeto Map e operador ternário ? :

const cadastroUsuario2 = (dadosUsuario,dadosCadastrados) => {
    const status = (_.isEqual(dadosUsuario,dadosCadastrados)) ? "Cadastrada!" : "Não cadastrada";
    console.log(status);
}

//Terceira forma: utilizar a função every e comparar os arrays
const cadastroUsuario3 = (dadosCadastrados, dadosUsuario) => {
    if (dadosCadastrados.length === dadosUsuario.length && dadosCadastradosArray.every((value, index) => value === dadosUsuarioArray[index])) {
        console.log("Cadastrada!");
    } else console.log("Não cadastrada!");
}


//Obtendo os inputs do usuário

const nomeUsuario = readlineSync.question('Digite seu nome: ').toLowerCase();
const idadeUsuario = Number(readlineSync.question('Digite sua idade: '));
const nacionalidadeUsuario = readlineSync.question('Digite sua nacionalidade: ').toLowerCase();
const estadoUsuario = readlineSync.question('Digite seu estado: ').toLowerCase();
const cidadeUsuario = readlineSync.question('Digite sua cidade: ').toLowerCase();
const formacaoUsuario = readlineSync.question('Digite sua formacao: ').toLowerCase();
const dadosUsuarioArray = [nomeUsuario, idadeUsuario, nacionalidadeUsuario, estadoUsuario, cidadeUsuario, formacaoUsuario];

const dadosUsuarioMap = new Map();
dadosUsuarioMap.set('nome', nomeUsuario);
dadosUsuarioMap.set('idade', idadeUsuario);
dadosUsuarioMap.set('nacionalidade', nacionalidadeUsuario);
dadosUsuarioMap.set('estado', estadoUsuario);
dadosUsuarioMap.set('cidade', cidadeUsuario);
dadosUsuarioMap.set('formacao', formacaoUsuario);

console.log(dadosUsuarioMap);
console.log(dadosCadastradosMap);

cadastroUsuario1();
cadastroUsuario2(dadosUsuarioMap, dadosCadastradosMap);
cadastroUsuario3(dadosCadastradosArray, dadosUsuarioArray);