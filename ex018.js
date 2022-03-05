function despesasTotais (array) {
    return array.map(a => a.preco).reduce(function (acumulador, atual) {
        return `R$ ${acumulador + atual}`
    })
}

console.log(despesasTotais([
    {nome: 'Jornal online', categoria: 'Informação', preco: 89.99},
    {nome: 'Cinema', categoria: 'Entretenimento', preco: 150}
]))

console.log(despesasTotais([
    {nome: 'Galaxy S20', categoria: 'Eletrônicos', preco: 3599.99},
    {nome: 'Macbook Pro', categoria: 'Eletrônicos', preco: 30999.90}
]))