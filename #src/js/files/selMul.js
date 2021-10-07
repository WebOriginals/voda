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
        var txt = $(".multiselect-selected-text").text().trim();
        if(txt.length > 10){
            console.log('----');
            $(".multiselect-selected-text").text( txt.substring(0,10) + '...1');
        }
    });
});
