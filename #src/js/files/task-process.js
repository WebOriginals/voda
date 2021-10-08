/*if (document.querySelector(".task-process")){

    const process = document.querySelector(".task-process");
    const processItems = document.querySelectorAll(".task-process__item");
    let position = 0;
    let thisBody;

    function aaa(position){
        thisBody = document.querySelectorAll(".task-process__body")[position]
        processItems[position].classList.remove("task-process__item-lock");
        processItems[position].classList.add("task-process__item-active");
    }

    if(processItems){
        
        aaa(position)
        
        document.querySelector(".task-process").addEventListener("click",(e)=>{
            if (e.target.classList.contains("nextBlock")&&e.target.parentNode.isEqualNode(thisBody)){
                processItems[position].classList.remove("task-process__item-active");
                processItems[position].classList.add("task-process__item-success");
                position++;
                aaa(position)
            }
        })
        
    }
}

*/