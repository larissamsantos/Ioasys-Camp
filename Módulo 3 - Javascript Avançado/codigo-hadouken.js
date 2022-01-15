const nome = "Larissa Menezes";
const idade = 27;
const nacionalidade = "Brasileira";
const estado = "Sergipe";
const cidade = "Aracaju";
const formacao = "ioasysCamp";

const cadastroUsuario = () => {
    if (nome === "Larissa Menezes") {
        if (idade === 27) {
            if (nacionalidade === "Brasileira") {
                if (estado === "Sergipe") {
                    if (cidade === "Aracaju") {
                        if (formacao === "ioasysCamp"){
                            console.log("Cadastrada!");
                        } else console.log("Não cadastrado");
                    } else console.log("Não cadastrado");
                } else console.log("Não cadastrado");
            } else console.log("Não cadastrado");
        } else console.log("Não cadastrado");
    } else console.log("Não cadastrado");
}

cadastroUsuario();