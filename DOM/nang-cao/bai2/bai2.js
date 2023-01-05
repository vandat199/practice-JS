const dataUser = [
    {username: 'thai123', password: '999999999', email: 'thai123@gmail.com', phone: +84989403315},
    {username: 'thai456', password: '123456789', email: 'thai456@gmail.com', phone: +84989403315},
    {username: 'thai789', password: '123456789', email: 'thai789@gmail.com', phone: +84989403315},
];
const chooseAction = document.getElementById('choose-action');
const btnFormLogin = document.getElementsByClassName('btn-form-login');
const btnFormSignin = document.getElementsByClassName('btn-form-signin');
const formLogin = document.getElementById('login');
const formSignin = document.getElementById('signin');
const btnLogin = document.getElementById('btn-login');
const btnSignin = document.getElementById('btn-signin');
const emailRegis = document.getElementById('email-regis')
const phoneNumberRegis = document.querySelector('#phone-number-regis')
const usernameRegis = document.getElementById('username-regis');
const passwordRegis = document.getElementById('password-regis');

const regexEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
const regexPhone = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/

let checkEmail = true
    let checkPhone = true
    let checkUser = true
    let checkPass = true

function checkInfoRegis () {
    
    emailRegis.addEventListener('blur', () => {
        if (!regexEmail.test(emailRegis.value)) {
            emailRegis.nextElementSibling.classList.remove('none');
            checkEmail = true
            console.log('checkEmail', checkEmail);  
        } else {
            emailRegis.nextElementSibling.classList.add('none')
            checkEmail = false
            console.log('checkEmail', checkEmail); 
        }
    })
    
    emailRegis.addEventListener('focus', () => {
        emailRegis.nextElementSibling.classList.add('none')
        // checkEmail = false
    })
    
    phoneNumberRegis.addEventListener('keyup', () => {
        if ((!regexPhone.test(phoneNumberRegis.value)) && phoneNumberRegis.value.length) {
            phoneNumberRegis.nextElementSibling.classList.remove('none'); 
        } else {
            phoneNumberRegis.nextElementSibling.classList.add('none')
        }
    })
    
    phoneNumberRegis.addEventListener('blur', () => {
        if (!regexPhone.test(phoneNumberRegis.value)) {
            phoneNumberRegis.nextElementSibling.classList.remove('none')
            checkPhone = true
            // console.log(checkPhone);
        } else {
            phoneNumberRegis.nextElementSibling.classList.add('none')
            checkPhone = false
            // console.log(checkPhone);
        }
    })
    
    usernameRegis.addEventListener('blur', () => {
        if (!usernameRegis.value.length) {
            usernameRegis.nextElementSibling.classList.remove('none')
            checkUser = true  
        } else {
            usernameRegis.nextElementSibling.classList.add('none')
            checkUser = false
        }
    })
    
    usernameRegis.addEventListener('focus', () => {
        usernameRegis.nextElementSibling.classList.add('none')
    })
    
    passwordRegis.addEventListener('blur', () => {
        if (passwordRegis.value.length < 8) {
            passwordRegis.nextElementSibling.classList.remove('none')
            checkPass = true 
        } else {
            passwordRegis.nextElementSibling.classList.add('none')
            checkPass = false
        }
    })
    
    passwordRegis.addEventListener('focus', () => {
        passwordRegis.nextElementSibling.classList.add('none')
    })

    return !(checkEmail || checkPhone || checkUser || checkPass)
}

btnFormLogin[0].onclick = function () {
    formLogin.classList.remove('none');
    formSignin.classList.add('none');
    chooseAction.classList.add('none');
}
btnFormLogin[1].onclick = function () {
    formLogin.classList.remove('none');
    formSignin.classList.add('none');
}
btnFormSignin[0].onclick = function () {
    formSignin.classList.remove('none');
    formLogin.classList.add('none');
    chooseAction.classList.add('none');
}
btnFormSignin[1].onclick = function () {
    formSignin.classList.remove('none');
    formLogin.classList.add('none');
}
checkInfoRegis()
btnSignin.addEventListener('click', function (e) {
    // let checkSignin = checkInfoRegis()
    let email = document.getElementById('email-regis').value;
    let phone = document.getElementById('phone-number-regis').value;
    let username = document.getElementById('username-regis').value;
    let password = document.getElementById('password-regis').value;
    if (checkInfoRegis()) {
        let check = false;
        for (let i in dataUser) {
            if (dataUser[i]['username'] === username) {
                check = true;
                alert('tai khoan da ton tai');
                break;
            }
        }
        if (!check) {
                dataUser.push({username, password, email, phone})
                alert('dang ki thanh cong')
                chooseAction.classList.remove('none')
                formSignin.classList.add('none');
            } 
        } else {
            document.querySelectorAll('.error-message').forEach(value => value.classList.remove('none'))
        }
    }
)

btnLogin.addEventListener('click', function (e) {
    let username = document.getElementById('username-login').value;
    let password = document.getElementById('password-login').value;
    let check = false;
    let checkUser = false;
    if (username.length === 0 || password.length === 0) {
        alert('tai khoan hoac mat khau khong duoc de trong')
    } else {
        for (let i of dataUser) {
            if (i['username'] === username) {
                if (i['password'] === password) {
                    check = true
                    break;
                } else {
                    checkUser = true;
                }
            }
        }
        if (check) {
            // formLogin.classList.add('none');
            newDoc()
        } else if (checkUser) {
            alert('sai mat khau')
        } else {
            alert('tai khoan khong ton tai')
        }
    }
})

function newDoc () {
    // window.location.href = 'F:\Javascript\baitap\DOM\nang-cao\bai2\test.html'
    window.location.href = 'https:\\wwww.facebook.com'
}