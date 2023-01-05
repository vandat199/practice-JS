// áp dụng hợp lý, promise1 xử lý 2s retrun 3. promise2 xử lý 5s return 7
// Bài toán Cần data của 2 tác vụ trên, biết prmise1 vs promise2 không phụ thuộc nhau. 
// Viết chương trình sao cho kết quả trả về 3+7=10 trong thời gian ngắn nhất

let promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, 3)
})

let promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 5000, 7)
})

let promise = Promise.all([promise1, promise2])

promise
.then(data => {
    console.log(`${data[0]} + ${data[1]} = `,data[0] + data[1]);
})