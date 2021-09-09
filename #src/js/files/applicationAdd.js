const formElement = document.querySelector('.form__transport__body');
const transportAddTemplate = document.querySelector('#transport').content.querySelector('.form__transport');
const BtnAddTransport = document.querySelector('.add-transport');


let addClickHandler = function () {
    const transportAddTemplate = document.querySelectorAll('.form__transport');
    for (let transportBlock of transportAddTemplate) {
       let btn = transportBlock.querySelector('.remove');
        btn.addEventListener('click', function () {
            btn.parentNode.parentNode.remove();
        });
    }
};

addClickHandler();
BtnAddTransport.addEventListener('click', () => {
    const transportAddElement = transportAddTemplate.cloneNode(true);
    formElement.appendChild(transportAddElement);
    addClickHandler();
});






