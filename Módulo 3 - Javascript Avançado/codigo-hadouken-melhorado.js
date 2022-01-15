const nome = "Larissa Menezes";
const idade = 27;
const nacionalidade = "Brasileira";
const estado = "Sergipe";
const cidade = "Aracaju";
const formacao = "ioasysCamp";

//Primeira forma: utilizar o operador lógico &&

const cadastroUsuario1 = () => {
    if (nome === "Larissa Menezes" && idade === 27 && nacionalidade === "Brasileira" && estado === "Sergipe" && cidade === "Aracaju" && formacao === "ioasysCamp") {
        console.log("Cadastrada!");
    } else console.log("Não cadastrada!");
}

//Segunda forma: utilizar o objeto Map e operador ternário ? :

const meusDados = new Map();
meusDados.set('nome', 'Larissa Menezes');
meusDados.set('idade', 27);
meusDados.set('nacionalidade', 'Brasileira');
meusDados.set('estado', 'Sergipe');
meusDados.set('cidade', 'Aracaju');
meusDados.set('formacao', 'ioasysCamp');

const dadosCadastrados = new Map();
dadosCadastrados.set('nome', 'Larissa Menezes');
dadosCadastrados.set('idade', 27);
dadosCadastrados.set('nacionalidade', 'Brasileira');
dadosCadastrados.set('estado', 'Sergipe');
dadosCadastrados.set('cidade', 'Aracaju');
dadosCadastrados.set('formacao', 'ioasysCamp');

const cadastroUsuario2 = () => {
    const status = (JSON.stringify(meusDados) === JSON.stringify(dadosCadastrados)) ? "Cadastrada!" : "Não cadastrada";
    console.log(status);
}

cadastroUsuario1();
cadastroUsuario2();