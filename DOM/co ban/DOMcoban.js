const submit = document.getElementById('submit')
const input = document.getElementById('input')

submit.onclick = function () {
    const value = input.value;
    // console.log(typeof value);
    console.log(`'${value}'`);
    if (isNaN(value) || value === '') {
        alert('vui lòng nhập vào một số');
    } else if (value % 2 === 0) {
        alert(`${value} là số chẵn`)
    } else {
        alert(`${value} là số lẻ`)
    }
}

const para = document.getElementById('para');
const paraClass = para.classList;
const changeDisplay = document.getElementsByClassName('changeDisplay');

changeDisplay[0].onclick = function () {

    if (changeDisplay[0].innerText === 'hide') {
        changeDisplay[0].innerText = 'display'
    } else {
        changeDisplay[0].innerText = 'hide'
    }
    paraClass.toggle('none')
}

const changeSize = document.getElementsByClassName('changeSize')
const square = document.getElementById('square')
let widthDiv = square.offsetWidth
let heightDiv = square.offsetHeight

changeSize[0].onclick = function () {
    widthDiv *= 0.5;
    heightDiv *= 0.5;
    square.style.width = widthDiv + 'px'
    square.style.height = heightDiv + 'px'
}

changeSize[1].onclick = function () {
    widthDiv *= 2;
    heightDiv *= 2;
    square.style.width = widthDiv + 'px'
    square.style.height = heightDiv + 'px'
}

const calculateBMI = document.getElementById('calBMI')

calculateBMI.addEventListener ('click', function (e) {
    const heightMan = document.getElementById('height').value
    const weightMan = document.getElementById('weight').value
    // console.log(e.target);
    console.log(typeof heightMan);
    console.log(heightMan);
    const BMI = (weightMan / (heightMan ** 2)).toFixed(2)
    console.log(BMI)
    document.getElementById('display').innerText += ` ${BMI}`;
})

const changeContent = document.getElementById('changeContent')
const randomTxt = document.getElementById('randomTxt');
const span = randomTxt.getElementsByTagName('span')

changeContent.addEventListener('click', function () {
    if (changeContent.innerText === 'change') {
        changeContent.innerText = 'back'
    } else {
        changeContent.innerText = 'change'
    }
    span[0].classList.toggle('none')
    span[1].classList.toggle('none')
})

const transImg = document.querySelectorAll('.trans-img');
const img = document.querySelector('#bai6 img');
const width = document.defaultView.innerWidth;
// const posTop = img.offsetTop;
let posLeft = img.offsetLeft;

transImg[0].onclick = function () {
    posLeft -= 100
    if (posLeft < 0) {
        posLeft = 0
    }
    // img.setAttribute('style', `left: ${posLeft}px;`)
    img.style.left = posLeft + 'px'
}
transImg[1].onclick = function () {
    posLeft += 100
    if (posLeft > width - img.offsetWidth) {
        posLeft = width - img.offsetWidth
    }
    // img.setAttribute('style', `left: ${posLeft}px;`)
    img.style.left = posLeft + 'px'
}

let count = 0;
document.getElementById('number').innerHTML = count
const changeNum = document.querySelectorAll('.change-num')

changeNum[0].onclick = function () {
    count--
    document.getElementById('number').innerHTML = count
}
changeNum[1].onclick = function () {
    count++
    document.getElementById('number').innerHTML = count
}

const checkChar = document.getElementById('check-char')
const inputChar = document.getElementById('input-char')

checkChar.onclick = function () {
    const charCode = inputChar.value.charCodeAt(0)
    if (48 <= charCode && charCode <= 57) {
        alert('ban da nhap vao 1 so')
    } else if ((65 <= charCode && charCode <= 90) || (97 <= charCode && charCode <= 122)) {
        alert('ban da nhap vao 1 chu')
    } else {
        alert('ban da nhap vao 1 ky tu dac biet')
    }
}

const inputBai9 = document.getElementById('bai9').getElementsByTagName('input')
const changeColor = document.getElementById('change-color')
const squareItem = document.querySelectorAll('.square-item')

changeColor.onclick = function () {
    let value = inputBai9[0].value
    squareItem[value - 1].setAttribute('style', `background: #${Math.floor(Math.random() * 0xffffff).toString(16)}`)
}

const bai10CheckChar = document.getElementById('bai10-check-char')
const bai10InputChar = document.getElementById('bai10-input-char')

bai10CheckChar.onclick = function () {
    const charCode = bai10InputChar.value.charCodeAt(0)
    if (65 <= charCode && charCode <= 90) {
        alert('ban da nhap vao 1 chu in hoa')
    } else if (97 <= charCode && charCode <= 122) {
        alert('ban da nhap vao 1 chu thuong')
    } else {
        alert('vui long nhap vao 1 chu')
    }
}

const bai11Btn = document.querySelectorAll('.bai11-change')
const bai11Para = document.getElementById('bai11-para')
bai11Btn[0].onclick = function () {
    let fontSize = window.getComputedStyle(bai11Para, null).getPropertyValue('font-size');
    fontSize = parseInt(fontSize)
    bai11Para.style.fontSize = (fontSize + 1) + 'px';

}
bai11Btn[1].onclick = function () {
    bai11Para.style.background  = '#'+ Math.floor(Math.random() * 0xffffff).toString(16)
    bai11Para.style.color  = '#'+ Math.floor(Math.random() * 0xffffff).toString(16)
}

const bai12ContainSquare = document.getElementById('bai12-contain-square')
const bai12SquareItem = document.querySelectorAll('.bai12-square-item')
bai12ContainSquare.addEventListener('click', function (e) {
    e.target.classList.add('none')
})

function fake()
    {
        let text = document.getElementById("bai13-textarea").value;
        let j = text.length;
        if (j > 0)
        {
            for(let i = 1; i <= j; i++)
            {
                str = str + stringDisplay[i];
                if (i === stringDisplay.length)
                {
                    document.getElementById("bai13-textarea").value= "";
                    str = "";
                }
            }
        }
        document.getElementById("bai13-textarea").value = str;
        str = "";
        setTimeout(fake, 1);
    }
let str = ''
let stringDisplay = ' CO CAI LON DIT CON BA MAY!!!'.split('')
const bai13Textarea = document.getElementById('bai13-textarea')

bai13Textarea.onfocus  = function () {
    document.getElementById("bai13-textarea").value = str
    fake();
}

const bai14Btn = document.getElementById('bai14-changebackground')

bai14Btn.addEventListener('click', function () {
    document.body.style.background = '#'+ Math.floor(Math.random() * 0xffffff).toString(16)
})

const bai15Btn = document.getElementById('bai15-login')
const bai15Form = document.getElementById('form-login')
const bai15Xmark = document.getElementById('close-form')

bai15Btn.addEventListener ('click', function (e) {
    bai15Form.classList.remove('none')
})
bai15Xmark.addEventListener ('click', function () {
    bai15Form.classList.add('none')
})

const bai16 = document.getElementById('bai16')

const username = document.querySelector('[name = username]')
username.onblur = function () {
    if (username.value === 'thai123') {
        bai16.classList.remove('none')
        bai16.style.background = '#'+ Math.floor(Math.random() * 0xffffff).toString(16)
    } else {
        bai16.classList.add('none')
    }
}