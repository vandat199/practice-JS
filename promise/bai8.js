// c1 viết promise in ra tất cả các sản phẩm của cửa hàng nếu không ra thì trả về (false) .
// c2: viết promise in ra tất cả các sản phẩm theo từng loại A,B,C .
// c3 viết promise in ra tất cả các sản phẩm có giá >=15000 .
// c4: Tính tiền theo biên lai .Nếu số lượng trong cửa hàng không đủ thì in ra “ cửa hàng k đủ sản phẩm“ 
let cuaHang = [{
        ten: 'Bia',
        loai: 'A',
        gia:10000,
        soLuong:200
    }, {
        ten: 'Rượu',
        loai: 'A',
        gia:20000,
        soLuong:50
    }, {
        ten: 'Coca',
        loai: 'A',
        gia:15000,
        soLuong:100
    }, {
        ten: 'Bia Tươi',
        loai: 'B',
        gia:12000,
        soLuong:55
    }, {
        ten: 'Rượu Vang',
        loai: 'B',
        gia:50000,
        soLuong:250
    }, {
        ten: 'Bánh Đa',
        loai: 'C',
        gia:5000,
        soLuong:300
    }, {
        ten: 'Lạc giang',
        loai: 'C',
        gia:12000,
        soLuong:200
    }, {
        ten: 'Lạc luộc',
        loai: 'B',
        gia:14000,
        soLuong:150
    }, 
];
let bienLai = [{
    ten:'Lạc luộc',
    soLuong:20
},
{
    ten:'Bia',
    soLuong:10000
},
{
    ten:'Bánh Đa',
    soLuong:20
}]

let promise1 = new Promise((resolve, reject) => {
    if (cuaHang.length) {
        resolve(cuaHang)
    } else {
        reject(false)
    }
})

promise1
.then(data => {
    // for (let x of data) {
    //     console.log(x);
    // }
    return data;
})
.then(data => {
    let result = {}
    data.forEach(product => {
        let {ten, gia, soLuong} = product;
        if (!result['loai ' + product['loai']]) {
            result['loai ' + product['loai']] = [{ten, gia, soLuong}]
        } else {
            result['loai ' + product['loai']].push({ten, gia, soLuong})
        }
    });
    // console.log(result);
    return data
})
.then(data => {
    let result = []
    data.forEach(product => {
        if (product['gia'] >= 15000) {
            result.push(product)
        }
    })
    // console.log(result);
    return data;
})
.then(data => {
    // console.log(data);
    let bill = 0;
    let checkStore = true;
    bienLai.forEach(billItem=> {
        data.forEach(product => {
            if (product['ten'] === billItem['ten']) {
                if (product['soLuong'] >= billItem['soLuong']) {
                    product['soLuong'] -= billItem['soLuong']
                    bill += billItem['soLuong'] * product['gia']
                } else {
                    checkStore = false;
                    console.log(`cua hang khong du san pham ${billItem['ten']}`);
                }
            }
        })
    })
    if (checkStore) {
        console.log('tong hoa don:', bill);
    }
})
.catch(error => {
    console.log(error);
})

