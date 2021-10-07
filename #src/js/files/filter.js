let searchElements =  document.querySelectorAll('.serch-option');

const searchOptions = (event) => {
    let val = event.value.trim().toLowerCase();
    let body = event.closest('.select__options');
    let listElements = body.querySelectorAll('.select__option');
    if(val !== ''){
        listElements.forEach(function (elem){
            if(elem.innerText.toLowerCase().search(val) == -1){
                elem.classList.add('hide');
            } else {
                elem.classList.remove('hide');
            }
        })
    } else {
        listElements.forEach(function (elem){
            elem.classList.remove('hide');
        })
    }
};

searchElements.forEach(searchElement => {
    searchElement.oninput = function (){
        searchOptions(this);
    }
});



