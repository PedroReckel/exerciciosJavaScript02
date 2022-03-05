const somarNumeros = (array) => {
    return array.reduce(function (acumulador, atual) {
        // console.log(acumulador, atual)
        return acumulador + atual
    })
}

console.log(somarNumeros([10, 10, 10]))
console.log(somarNumeros([15, 15, 15, 15]))