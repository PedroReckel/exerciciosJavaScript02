function filtrarPorQuantidadeDeDigitos (array, qtdDigitos) {
    return array.filter(a => {
        const getQtd = String(a).length
        return getQtd === qtdDigitos
    })
    
}

console.log(filtrarPorQuantidadeDeDigitos([38, 2, 365, 10, 125, 11], 2))
console.log(filtrarPorQuantidadeDeDigitos([5, 9, 1, 125, 11], 1))