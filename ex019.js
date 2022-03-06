const calcularMedia = (array) => {
    const tamanhoArray = array.length
    const somaTotal = array.reduce(function (acumulador, atual) {
        return acumulador + atual
    })
    return somaTotal / tamanhoArray
}

console.log(calcularMedia([0, 10]))
console.log(calcularMedia([1, 2, 3, 4, 5]))