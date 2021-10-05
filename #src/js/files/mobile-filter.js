if(document.querySelector('.mobile-filter')){
    document.querySelector('.mobile-filter').addEventListener("click",(e)=>{
        if(e.target.classList.contains("mobile-filter__tab-button")){
            e.target.classList.toggle("mobile-filter__rotate");
            document.querySelector('.mobile-filter__body').classList.toggle("mobile-filter__hidden");
            document.querySelector('.mobile-filter__active-filters').classList.toggle("mobile-filter__hidden");
        }
    })
}