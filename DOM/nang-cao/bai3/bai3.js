// const readfileBase64 = document.querySelector('#readfile-base64')
// const output = document.querySelector('#output-base64')

// readfileBase64.addEventListener ('change', (e) => {
//     const reader = new FileReader();
//     reader.onloadend = () => {
//         output.setAttribute('src', reader.result)
//     }
//     reader.onerror = (err) => {console.log(err)}
//     reader.readAsDataURL(e.target.files[0])
// })

const expression = document.querySelector('#expression')
const result = document.getElementById('result')
const number = document.querySelectorAll('.number')
const operator = document.querySelectorAll('.operator')
const clear = document.getElementById('clear')
const calculate = document.getElementById('calculate')
const backspace = document.getElementById('backspace')
// const table = document.getElementsByTagName('table')[0]
const history = document.getElementById('history')
const clearHistory = document.getElementById('clear-history')
history.style.height = document.getElementById('calculator').offsetHeight + 'px'


const writeExpression = (e) => {
    if (result.innerText) {
        history.innerHTML += `<p>${expression.innerText} = ${result.innerText}</p>`
        expression.innerText = '';
        result.innerText = '';
    }
    expression.innerText += e.target.innerText;
}

for (let i = 0; i < number.length; i++) {
    number[i].addEventListener('click', writeExpression)
}
for (let i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click', writeExpression)
}

calculate.addEventListener('click', function () {
    displayResult();
    backspace.removeEventListener('click', deleteLastChar)
    // for (let i = 0; i < number.length; i++) {
    //     number[i].removeEventListener('click', writeExpression)
    // }
    // for (let i = 0; i < operator.length; i++) {
    //     operator[i].removeEventListener('click', writeExpression)
    // }
})

clear.addEventListener('click', function () {
    if (result.innerText) {
        history.innerHTML += `<p>${expression.innerText} = ${result.innerText}</p>`
        expression.innerText = '';
        result.innerText = '';
        // for (let i = 0; i < number.length; i++) {
        //     number[i].addEventListener('click', writeExpression)
        // }
        // for (let i = 0; i < operator.length; i++) {
        //     operator[i].addEventListener('click', writeExpression)
        // }
        backspace.addEventListener('click', deleteLastChar)
    } else {
        expression.innerText = '';
        result.innerText = '';
    }
})

function displayResult () {
    let resultBuff = (parseFloat(eval(expression.innerText))).toFixed(14)
    let indexNum = []
    for (let i = 0; i < resultBuff.length; i++) {
        if (resultBuff[i] !== '0') {
            indexNum.push(i)
        }
    }
    let max = Math.max(...indexNum)
    let newResult = resultBuff.slice(0, max+1)
    if (newResult.endsWith('.')) {
        newResult = newResult.slice(0, -1)
    }
    result.innerText = newResult
}

function deleteLastChar () {
    if (expression.innerText.length) {
        expression.innerText = expression.innerText.slice(0, -1)
    }
}
backspace.addEventListener('click', deleteLastChar)

clearHistory.addEventListener ('click', function () {
    history.innerHTML = '';
})