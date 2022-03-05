const receberSomenteOsParesDeIndicesPares = (array) => {
    return array.filter((numero, indice) => {
        const numeroPar = numero % 2 === 0
        const indicePar = indice % 2 === 0
        return numeroPar && indicePar
    })
} 

console.log(receberSomenteOsParesDeIndicesPares([10, 70, 22, 43]))