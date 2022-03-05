function repetir (elemento, numVez) {
    let myArray = []
    for (let i = 0; i < numVez; i++) {
        myArray.push(elemento)
    }
    return myArray
}

console.log(repetir('Código', 2))