let data = [];
let btnAdd = document.getElementById('btn-add')
let totalProduct = document.getElementById('total-product')
const displayResult = document.getElementById('display-result')
let checkEdit = false
let indexEdit = 0;

btnAdd.addEventListener('click', function () {
    addItem();
})

document.getElementById('input-product').addEventListener('keypress', (e) => {
    console.log(e.key);
    if (e.key === 'Enter') {
        // e.preventDefault();
        btnAdd.click();
    }
})

// function render () {
//     table.innerHTML = `<tr>
//     <th colspan="2" id="product-name">Product Name</th>
//     <th colspan="2" id="total-product">${data.length} products</th>
//     </tr>`
//     for (let i = 0; i < data.length; i++) {
//         table.innerHTML += `<tr class = "${i % 2 === 0 ? 'red' : null}">
//             <td colspan="2">${data[i]['productName']}</td>
//             <td><button class="btnEdit" onclick = "editItem('${data[i]['productName']}')">Edit</button></td>
//             <td><button class="btnDelete" onclick = "deleteItem('${data[i]['productName']}')">Delete</button></td>
//         </tr>`
//     }
// }

function addItem () {
    let inputProduct = document.getElementById('input-product').value
    let item = {
        productName: inputProduct,
    }

    for (let i = 0; i < data.length; i++) {
        if (data[i]['productName'] === inputProduct){
            alert('san pham da ton tai')
            return
        }
    }

    if (inputProduct.length) {
        if (checkEdit) {
            data.splice(indexEdit, 1, item)
            checkEdit = false
        } else {
            data.push(item)
        }
    }

    render()
    document.getElementById('input-product').value = ''
}

function render () {
    displayResult.innerHTML = ''
    for (let i = 0; i < data.length; i++) {
        displayResult.innerHTML += `<div class="display-grid">
                <div class="grid2 ${i % 2 === 0 ? 'red' : null}">${data[i]['productName']}</div>
                <div class="grid1 ${i % 2 === 0 ? 'red' : null}"><button onclick = "editItem('${data[i]['productName']}')">Edit</button></div>
                <div class="grid1 ${i % 2 === 0 ? 'red' : null}"><button onclick = "deleteItem('${data[i]['productName']}')">Delete</button></div>
            </div>`
    }
    totalProduct.innerText = `${data.length} products`
}


function editItem (e) {
    checkEdit = true;
    indexEdit = data.findIndex(item => item['productName'] === e)
    document.getElementById('input-product').value = data[indexEdit]['productName']
    // for (let i = 0; i < data.length; i++) {
    //     if (data[i]['productName'] === e) {
    //         document.getElementById('input-product').value = data[i]['productName']
    //     }
    // }
    document.getElementById('input-product').focus()
}

function deleteItem (e) {
    for (let i = 0; i < data.length; i++) {
        if (data[i]['productName'] === e) {
            data.splice(i, 1)
            break;
        }
    }
    render()
}