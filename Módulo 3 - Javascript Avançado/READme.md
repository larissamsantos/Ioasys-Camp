**Módulo 3 - Javascript Avançado**

O desafio foi reduzir o número de ifs dentro de uma função onde diversas condições precisam ser atendidas. Para isso, foram utilizados dois métodos:

* Simplesmente unir todas as condições necessárias em apenas um if utilizando o operador lógico &&
* Criar dois objetos Map e compará-los. Nesse exemplo foi utilizado o comando JSON.stringify, porém também poderia-se utilizar o comando Lodash isEqual. Mais informações sobre esses comandos podem ser encontradas [aqui](https://www.samanthaming.com/tidbits/33-how-to-compare-2-objects/). Além disso, como apenas um boolean é utilizado nesse caso, também fiz uso do operador ternário ? : ao invés de um condicional if.