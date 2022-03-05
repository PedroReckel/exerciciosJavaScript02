let getYear = new Date()
getYear = getYear.getFullYear()

const checarAnoBissexto = (ano) => {
    if (ano % 4 == 0 && ano % 100 != 0 || ano % 400 == 0) {
        console.log(true, '. O ano é bissexto!')
    } else {
        console.log(false, '. O ano não é bissexto!')
    }
}

checarAnoBissexto(getYear)