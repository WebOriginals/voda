let serchElemrnt =  document.querySelector('.serch');

serchElemrnt.oninput = function (){
    let val = this.value.trim();
    let listElements = document.querySelectorAll('.list__itams');
    if(val !== ''){
        listElements.forEach(function (elem){
            if(elem.innerText.search(val) == -1){
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

