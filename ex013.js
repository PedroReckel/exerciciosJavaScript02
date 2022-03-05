const filtrarNumeros = (array) => {
    console.log(array.filter(item => typeof item === 'number'))
} 

filtrarNumeros(["Javascript", 1, "3", "Web", 20])
filtrarNumeros(['a', 'c'])