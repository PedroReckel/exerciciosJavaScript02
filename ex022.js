function funcaoSorte (valor) {
    const getAleatorio = Math.floor(Math.random() * 10) + 1
    if (valor === getAleatorio) {
        console.log(`Parabéns! O numero sorteado foi o ${getAleatorio}`)
    } else {
        console.log(`Que pena! O numero sorteado foi o ${getAleatorio}`)
    }
}

funcaoSorte(10)