**Módulo 3 - Javascript Avançado**

O desafio foi reduzir o número de ifs dentro de uma função onde diversas condições precisam ser atendidas. 
Foram utilizados os pacotes [readline-sync](https://www.npmjs.com/package/readline-sync) para pedir os inputs do usuário e [lodash](https://www.npmjs.com/package/lodash) para comparação dos objetos Map. Os pacotes podem ser instalados rodando os seguintes comandos no terminal:

```
npm install readline-sync
npm i -g npm
npm i --save lodash
```

Foram criadas três funções para checar se os dados fornecidos pelo usuário correspondem aos dados presentes no "banco de dados". Cada função tem o seguinte funcionamento:
* Simplesmente unir todas as condições necessárias em apenas um if utilizando o operador lógico &&
* Criar dois objetos Map e compará-los. Nesse exemplo foi utilizado o comando Lodash isEqual, porém também poderia-se utilizar o comando JSON.stringify. Mais informações sobre esses comandos podem ser encontradas [aqui](https://www.samanthaming.com/tidbits/33-how-to-compare-2-objects/). Além disso, como apenas um boolean é utilizado nesse caso, também fiz uso do operador ternário ? : ao invés de um condicional if.
* Utilizar o método [every()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/every) para comparar os elementos do array do banco de dados e do array fornecido pelo usuário, além da propriedade [length](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/length) para garantir que ambos os arrays tem o mesmo tamanho.