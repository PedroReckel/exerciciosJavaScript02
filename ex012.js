function removerPropriedade(objeto, nomeDaPropriedade) {
    const copia = Object.assign({}, objeto)
    delete copia[nomeDaPropriedade]
    return copia
    }
    

console.log(removerPropriedade({
    id: 20,
    nome: 'Caneta',
    descricao: 'Não preenchido'
}, 'descricao'))

console.log(removerPropriedade({
    a: 1,
    b: 2
}, 'a'))