const prompt = require('prompt-sync')()

let numero = Number(prompt('Digite um número para saber seu fatorial: '))

let fatorial = 1
for (let i = 1;  i <= numero; i++) {
    fatorial = fatorial * i
}
console.log(fatorial)