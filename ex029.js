function segundoMaior (array) {
    const getMaior = Math.max(...array)
    array = array.filter(a => a != getMaior)
    const segundoMaior = Math.max(...array)
    return segundoMaior
}

console.log(segundoMaior([12, 16, 1, 5]))