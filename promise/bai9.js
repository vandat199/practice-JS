// a ) Viết promise in  các trái cây có nơi sản xuất tại VietNam . 
// b ) Viết promise in ra  các trái cây có số lượng (sl) > = 150 . 
// c ) Áp dụng promise Viết function lọc sản phẩm hoa quả  theo tên  .  
// d) Áp dụng promise Viết function lọc sản phẩm hoa quả  theo Nước .  
// e ) Áp dụng promise  viết function tính tổng số lượng theo tên Hoa quả , và theo tên nước . 

let hoaQua = [
{ten:'Xoài',sx:'China',sl:'100'},
{ten:'Xoài',sx:'VietNam',sl:'130'},
{ten:'Xoài',sx:'ThaiLan',sl:'100'},
{ten:'Cam',sx:'China',sl:'200'},
{ten:'Cam',sx:'ThaiLan',sl:'150'},
{ten:'Nho',sx:'VietNam',sl:'120'},
{ten:'Xoài',sx:'ThaiLan',sl:'100'},
];

let fromVN = new Promise((resolve, reject) => {
    let result = hoaQua.filter(product => product['sx'] === 'VietNam')
    resolve(result)
})

fromVN
.then(data => {
    // console.log(data);
})

let over150 = new Promise((resolve, reject) => {
    let result = hoaQua.filter(product => product['sl'] > 150)
    resolve(result);
})

over150
.then(data => {
    // console.log(data);
})

function filterByName (fruitName, dataProduct) {
    let check = false;
    for (let x in dataProduct) {
        if (dataProduct[x]['ten'] === fruitName) {
            check = true;
            break;
        }
    }
    
    let filter =  new Promise((resolve, reject) => {
        if (check) {
            let filter = dataProduct.filter(product => product['ten'] === fruitName)
            resolve(filter)
        } else {
            reject(check)
        }
    })

    return filter
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    })
    
}

// filterByName('Nho', hoaQua)


function filterByCountry (countryName, dataProduct) {
    let check = false;
    for (x in dataProduct) {
        if (dataProduct[x]['sx'] === countryName) {
            check = true;
            break;
        }
    }

    let filter = new Promise((resolve, reject) => {
        if (check) {
            let result = dataProduct.filter(produt => produt['sx'] === countryName)
            resolve(result)
        } else {
            reject(check)
        }
    })

    return filter
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    })
}

// filterByCountry('VietNam', hoaQua)


function totalByName (fruitName, dataProduct) {
    let check = false;
    for (let x in dataProduct) {
        if (dataProduct[x]['ten'] === fruitName) {
            check = true;
            break;
        }
    }

    let sum = new Promise((resolve, reject) => {
        if (check) {
            let result = dataProduct.filter(product => product['ten'] === fruitName)
            .reduce((total, value) => total += Number(value['sl']), 0)
            resolve(result)
        } else {
            reject(check)
        }
    })
    return sum
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    })
}

// totalByName('Xoài', hoaQua)


async function totalByCountry (countryName, dataProduct) {
    let check = false;
    for (let x in dataProduct) {
        if (dataProduct[x]['sx'] === countryName) {
            check = true;
            break;
        }
    }

    let sum = new Promise((resolve, reject) => {
        if (check) {
            let result = dataProduct.filter(product => product['sx'] === countryName)
            .reduce((total, value) => total += Number(value['sl']), 0)
            resolve(result)
        } else {
            reject(check)
        }
    })
    
    return sum
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    })
}

totalByCountry('VietNam', hoaQua)
