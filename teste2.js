
function data() {
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    var segundo = data.getSeconds()
    if (hora < 10) {
        hora = '0' + hora
    }
    if (minuto < 10) {
        minuto = '0' + minuto
    }
    if (segundo < 10) {
        segundo = '0' + segundo
    }
    document.querySelector('#horas').innerHTML = hora + ':' + minuto + ':' + segundo
    document.querySelector('#dia').innerHTML = dia(data)
    window.setInterval('data()', 1000)
}

function dia(data) {
    var dia = data.getDay()
    switch (dia) {
        case 0:
            return 'Domingo'
            break
        case 1:
            return 'Segunda-Feira'
            break
        case 2:
            return 'Terça-Feira'
            break
        case 3:
            return 'Quarta-Feira'
            break
        case 4:
            return 'Quinta-Feira'
            break
        case 5:
            return 'Sexta-Feira'
            break
        case 6:
            return 'Sábado'
            break
        default:
            return 'Esse dia ainda não foi criado'
            break
    }

}

function checar(){
    var n1 = document.querySelector('#n1')
    var n2 = document.querySelector('#n2')
    var res = document.querySelector('#res')
 if (n1.value.length == 0 || n2.value.length == 0 ){
    res.innerHTML = `Preencha os campos e tente novamente \u{1F917}`
 } else {
    var num1 = Number(n1.value)
    var num2 = Number(n2.value)
    res.innerHTML = `A soma entre ${num1} e ${num2} é <strong>${num1 + num2}</strong>.<br>`
    res.innerHTML += `A subtração entre ${num1} e ${num2} é <strong>${num1 - num2}</strong>.<br>`
    res.innerHTML += `A multiplicação entre ${num1} e ${num2} é <strong>${num1 * num2}</strong>.<br>`
    res.innerHTML += `A divisão entre ${num1} e ${num2} é <strong>${num1 / num2}</strong>.<br>`
    res.innerHTML += `${num1} elevado a ${num2} é <strong>${num1 ** num2}</strong>.<br>`
    res.innerHTML += `O resto da divisão entre ${num1} e ${num2} é <strong>${num1 % num2}</strong>.<br>`
 }

}



