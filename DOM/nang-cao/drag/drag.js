const dragItem = document.getElementById('drag-item')
const dropTarget = document.querySelectorAll('.drop-target')
// dragItem.setAttribute('draggable', false)



dragItem.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData("text", e.target.id);
})

for (let i = 0; i < dropTarget.length; i++) {
    dropTarget[i].addEventListener('dragover', (e) => {
        e.preventDefault();
    })
}

for (let i = 0; i < dropTarget.length; i++) {
    dropTarget[i].addEventListener('drop', (e) => {
        e.preventDefault();
        let result = e.dataTransfer.getData('text');
        e.target.appendChild(document.getElementById(result));
    })
}


