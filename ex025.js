const buscarParalavrasSemelhantes = (inicio, palavras) => {
    return palavras.filter(array => array.includes(inicio))
}

console.log(buscarParalavrasSemelhantes('pro', ['programação', 'mobile', 'profissional']))
console.log(buscarParalavrasSemelhantes('python', ['javaScript', 'java', 'c++']))