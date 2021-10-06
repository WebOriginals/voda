const dragItems = document.querySelectorAll('.aside-transport');
const dragZones = document.querySelectorAll('.table-grid-registry');

// работа с перемещаемыми элементами
dragItems.forEach(dragItem => {
    dragItem.addEventListener('dragstart', handlerDragstart);
    dragItem.addEventListener('dragend', handlerDragend);
    dragItem.addEventListener('drag', handlerDrag);

})

function handlerDragstart(event) {
    event.dataTransfer.setData("aside-transport", this.dataset.itemId);
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
    dragZone.addEventListener('dragover', handlerDragover);
    dragZone.addEventListener('drop', handlerDrop);
})

function handlerDragenter(event) {
    event.preventDefault();
    console.log('dragenter', this);
    this.classList.add('table-grid-registry-blue');
}

function handlerDragleave(event) {
    event.preventDefault();
    console.log('dragleave', this);
    this.classList.remove('table-grid-registry-blue');
}

function handlerDragover(event) {
    event.preventDefault();
}

function handlerDrop(event) {
    const dragFlag = event.dataTransfer.getData("aside-transport");
    const dragItem = document.querySelector(`[data-item-id="${dragFlag}"]`)
    const dragItemName = dragItem.querySelector('.aside-transport__name').textContent;
    const dragItemStatus = dragItem.querySelector('.aside-transport__status').textContent.trim();
    const zonaId = this.dataset.id;
    const zonaName = this.querySelector(".table-bottom-row__element:nth-child(4) b");
    const zonaStatus = this.querySelector(".table-bottom-row__element:nth-child(5)");
    this.classList.remove('table-grid-registry-blue');
    if(zonaStatus.textContent === "Утверждена" || zonaStatus.textContent === "Забронирован"){
        return;
    }
    if(dragItemStatus === "Занят" || dragItemStatus === "Занят начальником"){
        this.classList.add('table-grid-registry-ellowe');
        zonaName.textContent = dragItemName;
        zonaStatus.textContent = dragItemStatus;
    }
    if(dragItemStatus === "Свободен"){
        this.classList.add('table-grid-registry-green');
        zonaName.textContent = dragItemName;
        zonaStatus.textContent = dragItemStatus;
    }
}