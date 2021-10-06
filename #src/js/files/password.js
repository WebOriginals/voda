document.querySelector("body").addEventListener("click",(e)=>{
        if (e.target.classList.contains("password-control")){
            let newTarget = document.querySelector(`.${e.target.dataset.targetPassword}`);
            if (newTarget.getAttribute('type') == 'password') {
                e.target.classList.add('view');
                newTarget.setAttribute('type', 'text');
            } else {
                e.target.classList.remove('view');
                newTarget.setAttribute('type', 'password');
            }
        }  
    })
