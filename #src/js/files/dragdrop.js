const dragItems = document.querySelectorAll('.aside-transport');
const dragZones = document.querySelectorAll('.table-grid-registry');

// работа с перемещаемыми элементами
dragItems.forEach(dragItem => {
    dragItem.addEventListener('dragstart', handlerDragstart);
    dragItem.addEventListener('dragend', handlerDragend);
    dragItem.addEventListener('drag', handlerDrag);

})

function handlerDragstart(event) {
    this.classList.add('active');
}

function handlerDragend(event) {
    this.classList.remove('active');
}

function handlerDrag(event) {

}


// работа с зонами
dragZones.forEach(dragZone => {
    dragZone.addEventListener('dragenter', handlerDragenter);
    dragZone.addEventListener('dragleave', handlerDragleave);
})

function handlerDragenter(event) {
    console.log("dragenter", this);
    this.classList.add('table-grid-registry-blue');
}

function handlerDragleave(event) {
    console.log("dragleave", this);
    this.classList.remove('table-grid-registry-blue');
}