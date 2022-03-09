const removerVogais = (palavra) => {
    return palavra.replace(/[aeiou]/ig, '')    // The G do a global search for "is":
}

console.log(removerVogais('Cod3r'))
console.log(removerVogais('Fundamentos'))