// cho tài khoản khách số dư 10 tr thực hiện mua hàng 3 tr và nhận hoàn tiền 10%
// tài khoản shop dư 100tr
// viết promise1 kiểm tra số dư trong 1s và trả về true nếu số dư của khách đủ để thanh toán 
// false nếu khách không đủ số dư
// viết promise2 để chuyển tiền từ khách sang shop ( khách - 3 , shop + 3) và trả về số dư của 2 bên
// viết promise3 để hoàn tiền 10% sau khi đã thanh toán ở promise2 và trả về số dư của 2 bên
// (khách + 10% * 3 ,  shop - 3 * 10%) 

let khachHang = 10;
let shop = 100;
let price = 3;

let promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, khachHang > price)
})

promise1
.then(data => {
    if (data) {
        khachHang -= price;
        shop += price;
    } else {
        return new Promise((resolve, reject) => {
            reject('khong du so du')
        })
    }
})
.then(data => {
    khachHang += price / 10;
    shop -= price /10;
    console.log('tai khoan khach hang:', khachHang);
    console.log('tai khoan shop:', shop);
})
.catch(error => {
    console.log(error);
})
