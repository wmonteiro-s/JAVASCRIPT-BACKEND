// sempre que criar uma variavel de controle no for deve-se declarar ela como LET
for (let i = 0; i < 10; i++) {
    console.log(i)
}

let meuArray = ['a', 'e', 'i', 'o', 'u']

for (let i = 0; i < meuArray.length; i++) {
    if (meuArray[i] === 'i') {
        continue
    }
    if (meuArray[i] === 'u') {
        break
    }
    console.log(meuArray[i])
}