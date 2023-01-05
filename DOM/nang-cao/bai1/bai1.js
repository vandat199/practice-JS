const result = document.getElementById('result')

// const selectOption = ['Option', 'Outstanding', 'Good', 'OK', 'Bad', 'Terrible']

const calculate = document.querySelector('#btn-calculate')
calculate.onclick = function () {
    const billAmount = document.getElementById('totalbill').value
    const people = document.getElementById('people').value
    const option = document.getElementById('form-select').value
    let tip = 0;
    if (option !== 'Option') {
        if (!isNaN(billAmount) && billAmount !== '' && billAmount > 0) {
            if (!isNaN(people) && people !== '' && people > 0) {
                tip = billAmount * option / people / 100
            } else {
                alert('vui long nhap so nguoi hop le')
            }
        } else {
            alert('vui long nhap so bill hop le')
        }
    } else {
        alert('vui long chon muc do hai long cua ban')
    }
    result.innerText = `Tien tip cua moi nguoi la: ${tip}$`
}