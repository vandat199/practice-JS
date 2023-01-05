// Áp dụng setIterval  , tạo một function có tác dụng giống với đồng hồ đếm ngược.
// Đầu vào số giây cần đếm ngược  .
// nếu Người dùng cố tình nhập vào một số âm thì  in ra “ Hãy nhập số > 0 “ 
// Nếu số giây đã đếm hết (tức số đếm hiện tại <= 0) thì hiển thị thông báo: Bạn đã hết giờ làm bài.
//  Nếu số giây còn thì hiển thị số giây còn lại
const countDown = time => {
    if (time < 0) {
        console.log('hay nhap so > 0');
    } else {
        console.log(time--);
        let count = setInterval(() => {
            console.log(time--);
            if (time < 0) {
                clearInterval(count)
                console.log('ban da het gio lam bai');
            }
        }, 1000)
    }
    
}
countDown(-10)