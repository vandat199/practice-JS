// promise1 xử lý tác vụ 3s  cho ra kết quả là 2
// promise2 xử lý tác vụ 3s và CẦN data của tác vụ 1 trả ra kết quả giá trị x3 kết quả tác vụ 1 (=6)
// promis3 CẦN data của tác vụ 2 để xác định kết quả tác vụ 2 có > 10 hay không
// in ra màn hình true hoặc false. 

new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, 4)
})
.then(data => {
    console.log(data);
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 3000, data * 3)
    })
})
.then(data => {
    console.log(data);
    console.log(data > 10);
})