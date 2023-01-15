var num = document.getElementById('num')
var list = document.getElementById('list')
var res = document.getElementById('res')
var value = []


// Função que verifica se o num que entrou no input é um número valido de 0 a 100
function isNum(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}
// Função que verifica atráves do indexOf se o número já está ou não na lista
function inList(n, list) {
    if (list.indexOf(Number(n)) == -1) {
        return true
    } else {
        return false
    }
}

function addNum() {
    if (isNum(num.value) && inList(num.value, value)) {
        value.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        list.appendChild(item)
        res.innerHTML = ''

    } else {
        window.alert('Valor inválido ou ja está na lista.')
    }
    num.value = ''
    num.focus()
}

function finish() {
    if (value.length >= 1) {
        res.innerHTML = ''
        let total = value.length
        let bigger = value[0]
        let smaller = value[0]
        let sum = 0
        let average = 0

        for (pos in value) {
            sum += value[pos]
            if (value[pos] > bigger) {
                bigger = value[pos]
            } if (value[pos] < smaller) {
                smaller = value[pos]
            }
        }
        average = sum / total
        res.innerHTML += `<p> Foi adicionado o total de ${total} números na lista.</p>`
        res.innerHTML += `<p> O maior número adicionado é ${bigger}. </p>`
        res.innerHTML += `<p> O menor número adicionado é ${smaller}.</p>`
        res.innerHTML += `<P> A soma dos valores da lista é ${sum}.</P>`
        res.innerHTML += `<p> A média dos valores da lista é ${average.toFixed(2).replace('.', ',')}.</p>`
    } else {
        window.alert('Adicione valores antes de finalizar!')
    }



}