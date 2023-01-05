// tạo 1 promise1 với tác vụ resovle sau 3 giây (dùng settimeout)
// tạo 1 promise2 tác vụ resolve sau 2 giây
// tạo 1 promise3 tác vụ reject sau 2 giây
// dùng .all  để thực hiện song song tác vụ tiết kiệm time.

let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1)
    }, 3000)
})
let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(2)
    }, 2000)
})
let promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(3)
    }, 2000)
})

let promise = Promise.allSettled([promise1, promise2, promise3])

promise
.then(data => {
    console.log(data);
})
.catch(error => {
    console.log(error);
})