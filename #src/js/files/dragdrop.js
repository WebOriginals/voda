const dragItems = document.querySelectorAll('.aside-transport');
const dragZones = document.querySelectorAll('.table-grid-registry');

// работа с перемещаемыми элементами
dragItems.forEach(dragItem => {
    dragItem.addEventListener('dragstart', handlerDragstart);
    dragItem.addEventListener('dragend', handlerDragend);
})

function handlerDragstart(event) {
    event.dataTransfer.setData("aside-transport", this.dataset.itemId);
    this.classList.add('active');
}

function handlerDragend(event) {
    this.classList.remove('active');
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
    //console.log('dragenter', this);
    this.classList.add('table-grid-registry-blue');
}

function handlerDragleave(event) {
    event.preventDefault();
    //console.log('dragleave', this);
    if (event.currentTarget.contains(event.relatedTarget)) {
        //console.log(event.currentTarget.contains(event.relatedTarget));
        return;
    }
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
    const zonaId = this.dataset.zonaId;
    const zonaName = this.querySelector(".table-bottom-row__element:nth-child(4) b");
    const zonaStatus = this.querySelector(".table-bottom-row__element:nth-child(5)");
    this.classList.remove('table-grid-registry-blue');

    if(zonaStatus.dataset.zonaStatus === 1 || zonaStatus.dataset.zonaStatus === 2 || zonaStatus.dataset.zonaStatus === 3 || zonaStatus.dataset.zonaStatus === 6){
        return;
    }
    if(dragItemStatus === "Занят" || dragItemStatus === "Занят начальником"){
        this.classList.add('table-grid-registry-ellowe');
        zonaName.textContent = dragItemName;
        // this.on('click');
        // this.trigger("click");
    }
    if(dragItemStatus === "Свободен"){
        this.classList.add('table-grid-registry-green');
        zonaName.textContent = dragItemName;
        // this.on('click');
        // this.trigger("click");
    }

    // получаем ID заявки
     console.log(zonaId, 'id заявки');

    // получаем ID стутуса
    console.log(zonaStatus.dataset.zonaStatus, 'id status заявки');

    // получаем ID транспорта
     console.log(dragFlag, 'id транспорта');
}