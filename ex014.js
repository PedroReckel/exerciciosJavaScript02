function objetoParaArray (obj) {
    const resultado = []
    for (let chave in obj) {
        resultado.push([chave, obj[chave]])
    }
    console.log(resultado)
}

objetoParaArray({
    nome: 'Maria',
    profissao: 'Desenvolvedora de software'
})

objetoParaArray({
   codigo: 11111,
   preco: 12000 
})