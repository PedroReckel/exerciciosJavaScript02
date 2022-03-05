const receberPrimeiroEUltimoElemento = (arrayOriginal) => {
    let novoArray = []
    novoArray.push(arrayOriginal.shift(), arrayOriginal.pop())
    console.log(novoArray)
}

receberPrimeiroEUltimoElemento([-100, 'Aplicativo', 16])