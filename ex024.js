function contarCaractere (letra, frase) {
    let tudoMinusculo = frase.toLowerCase()
    return tudoMinusculo.split(letra).length - 1
}

console.log(contarCaractere('r', 'A sorte favorece os audazes'))
console.log(contarCaractere('c', 'Conhece-te a ti mesmo'))