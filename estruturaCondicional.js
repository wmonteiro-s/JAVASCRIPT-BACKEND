const prompt = require('prompt-sync')()

let idade = Number(prompt('Informe sua idade: '))

if (idade < 12 && idade >= 0){
    console.log('Você é uma criança')
} else if (idade < 18 && idade >= 13){
    console.log('Você é um adolescente')
} else if (idade >= 18 && idade < 60){
    console.log('Você é um adulto')
} else if (idade >= 60 && idade < 150){
    console.log('Você é idoso')
} else {
    console.log('Impossível validar sua idade')
}