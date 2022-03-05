const estaEntre = (minimo, maximo, numero, inclusivo = false) => {
    if (inclusivo) {
        return numero >= minimo && numero <= maximo
    } else {
        return numero > minimo && numero < maximo
    }
} 

console.log(estaEntre(10, 100, 10, true))