$(document).ready(() => {
    const btnGetUser = document.querySelector('#get-user')
    btnGetUser.addEventListener('click', function () {
        getUser()
        renderBtn()
        btnGetUser.setAttribute("style", "display: none;")
    })
    
})

let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiVGVzdEFjY291bnQiLCJwaG9uZSI6IjA4NjY2MzM4MDUiLCJkYXlzT2ZmIjoxMiwic3RhdHVzIjoiYWN0aXZlIiwiYXZhdGFyIjoiaHR0cHM6Ly9jbGFzcy5ub2RlbXkudm4vYXBpL3B1YmxpYy9pbWFnZXMvbG9nby5wbmciLCJyb2xlIjoidXNlciIsInRpY2tldCI6MCwibGlua0ZCIjoiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL25hbS5ub2RlbXkiLCJkZWxldGVNb2NrIjpbXSwiZGF0ZU9mQmlydGgiOiIxNjY0MTAzNzA2NDc0IiwiX2lkIjoiNjFhYTYzNmJhYzlhODAwMDE0OGM5ZmJlIiwiZW1haWwiOiJ0ZXN0ZXJAbm9kZW15LnZuIiwidm90ZXMiOltdLCJjcmVhdGVkQXQiOiIyMDIxLTEyLTAzVDE4OjM1OjIzLjMxOVoiLCJ1cGRhdGVkQXQiOiIyMDIxLTEyLTAzVDE4OjM1OjIzLjMxOVoiLCJfX3YiOjAsImlhdCI6MTY2NzQ0NDkxNiwiZXhwIjoxNjY4MzQ0OTE2fQ.SgO688J_VhX8nF3Dpagp8BSe4tuTgMccdVfbRa56HSI'
let lastPage = 33;
function renderBtn () {
    let findActive = document.querySelector('.active')
    let currentActive = findActive ? findActive.dataset.page : '1'
   
    let page = $(`
      <li class="page-item"><a class="page-link prev-btn">Previous</a></li>
      ${(currentActive * 1 - 1) > 0 ? `<li class="page-item"><a class="page-link page-num" data-page="${currentActive * 1 - 1}">${currentActive * 1 - 1}</a></li>` : '' }
      <li class="page-item"><a class="page-link page-num active" data-page="${currentActive}">${currentActive}</a></li>
      
      ${(currentActive * 1 + 1) > lastPage ?  '' : `<li class="page-item"><a class="page-link page-num" data-page="${currentActive * 1 + 1}">${currentActive * 1 + 1}</a></li>`}
      ${(currentActive * 1 + 2) > lastPage ?  '' : `<li class="page-item"><a class="page-link page-num" data-page="${currentActive * 1 + 2}">${currentActive * 1 + 2}</a></li>`}
      ${(currentActive * 1 + 3) > lastPage ?  '' : `<li class="page-item"><a class="page-link page-num" data-page="${currentActive * 1 + 3}">${currentActive * 1 + 3}</a></li>`}
      ${(currentActive * 1 - 1) > 0 ?  '' : `<li class="page-item"><a class="page-link page-num" data-page="${currentActive * 1 + 4}">${currentActive * 1 + 4}</a></li>`}
      <li class="page-item"><a class="page-link next-btn">Next</a></li>
    `)
    $('.pagination').html(page)
    if (currentActive === '1') {
        document.querySelector('.prev-btn').classList.add('disabled')
    }
    if (currentActive === `${lastPage}`) {
        document.querySelector('.next-btn').classList.add('disabled')
    }
    let pageNum = document.querySelectorAll('.page-num')
    pageNum.forEach(element => {
        element.addEventListener('click', function (e) {
        let findActive = document.querySelector('.active')
        findActive.classList.remove('active')
        e.target.classList.add('active')
        getUser(e.target.innerText * 1)
        renderBtn()
    })
    })

    document.querySelector('.next-btn').onclick = function(e) {
        let findActive = document.querySelector('.active')
        if (findActive.dataset.page === `${lastPage}`) {
            return
        }
        findActive.classList.remove('active')

        let next = findActive.parentElement.nextElementSibling.firstChild

        next.classList.add('active')
        getUser(next.innerText * 1)
        renderBtn()
    }

    document.querySelector('.prev-btn').onclick = function(e) {
        let findActive = document.querySelector('.active')
        if (findActive.dataset.page === '1') {
            return
        }
        findActive.classList.remove('active')

        let previous = findActive.parentElement.previousElementSibling.firstChild

        previous.classList.add('active')
        getUser(previous.innerText * 1)
        renderBtn()
    }
}

// function changeActive() {
//     let currentActive = document.querySelector('.active')
// }

function getUser(page = 1) {
    // console.log(page);
    $.ajax({
        url: `https://class.nodemy.vn/api/mock/users?page=${page}&size=10`,
        headers: {
            Authorization: `bearer ${token}`
        },
        type: 'GET'
    })
    .then (response => {
        // console.log(response);
        let dataUser = response.data;
        let displayUser = $('.display-user')
        displayUser.html('')
        dataUser.forEach(element => {
            let card = $(`<div class="card" style="width: 18rem;">
                <img src="${element.avatar}" class="card-img-top" alt="">
                <div class="card-body">
                <h5 class="card-title">${element.name}</h5>
                <p class = "phone">${element.phone}</p>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="${element.linkFB}" class="btn btn-primary">Facebook</a>
                </div>
            </div>`)
          displayUser.append(card)
        });
    })
    .catch (err => {
        console.log('err', err);
    })
}