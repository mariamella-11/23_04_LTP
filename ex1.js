const prompt = require('prompt-sync')();


let pessoa = {
    nome:"Maria",
    idade: 30,
    profissão: "Engenheira",
    saudacao: function() {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`)
    }
};
pessoa.saudacao();

console.log(pessoa instanceof Object);
console.log(pessoa instanceof Array);


class Pessoa{
    constructor(nome,idade,altura,sexo){
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
        this.sexo = sexo;
    }
}

const pessoa1 = new Pessoa("João", 16, 1.70, "Masculino")

console.log(pessoa1.nome)
console.log(pessoa1.idade)
console.log(pessoa1.altura)
console.log(pessoa1.sexo)

let nome = prompt("Digite o nome da pessoa: ")
let idade = prompt("Digite a idade da pessoa: ")
let altura = prompt("Digite a altura da pessoa: ")
let sexo = prompt("Digite o sexo da pessoa: ")

const pessoa2 = new Pessoa(nome, idade, altura, sexo)

console.log(pessoa2)