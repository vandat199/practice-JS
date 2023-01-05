// AP DUNG PROMISE
// Hãy tính liệu người mua hàng có đạt đủ điều kiện nhận ưu đãi hay không!
// Điều kiện để tính khách có nhận được ưu đãi
// hay không điều kiện để nhận ưu đãi là khách phải đạt được đủ điểm định mức
// ứng với mỗi loại được khai báo ở array phanLoai và phải có số
// lượng ít nhất bằng với số lượng của mỗi loại đặt ra.
// Công thức tính dinhMuc = trongLuong*heSo 

let danhSach = [
    {ten: 'huy', phanLoai: 'A', giohang:{soLuong: 12, trongLuong: 12}},
    {ten: 'lam', phanLoai:'B', giohang:{soLuong: 8, trongLuong: 7}},
    {ten: 'tung', phanLoai:'C', giohang:{soLuong: 10, trongLuong: 8}},
    {ten: 'hai', phanLoai:'A', giohang:{soLuong: 8, trongLuong: 20}},
    {ten: 'vinh', phanLoai:'A', giohang:{soLuong: 7, trongLuong: 9}},
    {ten: 'nam', phanLoai:'C', giohang:{soLuong: 5, trongLuong: 8}},
    {ten: 'khanh', phanLoai:'B', giohang:{soLuong: 5, trongLuong: 10}},
];

let phanLoai = [
    {Loai: 'A', heSo: 2, dinhMuc:24, soLuong:10},
    {Loai: 'B', heSo: 3, dinhMuc:22, soLuong:7},
    {Loai: 'C', heSo: 1, dinhMuc:10, soLuong:9},
];

danhSach.forEach (customer => {
    let checkPromo = false
    let soLuong = customer['giohang']['soLuong']
    let trongLuong = customer['giohang']['trongLuong']
    let check = new Promise((resolve, reject) => {
        phanLoai.forEach(classify => {
            let heSo = classify['heSo'];
            let dinhMuc = classify['dinhMuc']
            if (customer['phanLoai'] === classify['Loai']) {
                if (soLuong >= classify['soLuong'] && dinhMuc <= trongLuong * heSo) {
                    checkPromo = true
                }
            }
        })
        if (checkPromo) {
            resolve(true)
        } else {
            reject(false)
        }
    })
    
    check
    .then(data => {
        customer['uuDai'] = data
        console.log(customer);
    })
    .catch(error => {
        customer['uuDai'] = error
        console.log(customer);
    })
})
