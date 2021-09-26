let serchElemrnt =  document.querySelector('.serch-option');
console.log(serchElemrnt);
serchElemrnt.oninput = function (){
    console.log('======');
    let val = this.value.trim().toLowerCase();
    let listElements = document.querySelectorAll('.select__options .select__option');
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
}

