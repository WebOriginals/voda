// настройки селекта
$(document).ready(function () {
    let multselectopt = {
        allSelectedText:"Выбраны все",
        nonSelectedText:"Не выбраны",
        nSelectedText:"Выбраны",
        numberDisplayed: 10,
    };

    $('.select-mul').multiselect(multselectopt);


// поиск из селекта
    $('.select-mul').on('change',function () {

    });
});
