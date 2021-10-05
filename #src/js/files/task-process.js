if (document.querySelector(".task-process")){

    const process = document.querySelector(".task-process");
    const processItems = document.querySelectorAll(".task-process__item");
    let position = 0;
    let thisBody;
    let thisPreview;
    let thisPagination;
    function aaa(position){
        thisPagination = document.querySelectorAll(".task-process__pagination")[position]
        thisPreview = document.querySelectorAll(".task-process__preview")[position]
        thisBody = document.querySelectorAll(".task-process__body")[position]
        thisPagination.classList.remove("task-process__pagination-lock");
        thisPagination.classList.add("task-process__pagination-active");
        thisPreview.classList.toggle("task-process__hidden");
        thisBody.classList.toggle("task-process__hidden");
        
    }
    if(processItems){
        
        aaa(position)
        
        document.querySelector(".task-process").addEventListener("click",(e)=>{
            if (e.target.classList.contains("nextBlock")&&e.target.parentNode.isEqualNode(thisBody)){
                thisPagination.classList.remove("task-process__pagination-active");
                thisPagination.classList.add("task-process__pagination-success");
                thisPreview.classList.toggle("task-process__hidden");
                thisPreview.classList.toggle("task-process__preview-success");
                thisBody.classList.toggle("task-process__hidden");
                position++;
                aaa(position)
            }
        })
        

    }
   








}