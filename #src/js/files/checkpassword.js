if(document.querySelector(".newpassword")&&document.querySelector(".repeatpassword")){
    const pass = document.querySelector(".newpassword");
    const passrep = document.querySelector(".repeatpassword");
    const passmess = document.querySelector(".error-password-message");
    passrep.addEventListener("keyup",()=>{
        if(passrep.value.length>=pass.value.length&&passrep.value!==pass.value){
            passrep.classList.add("error-password");
            passmess.classList.add("pass-watch");
        }
        else{
            passrep.classList.remove("error-password");
            passmess.classList.remove("pass-watch");
        }
    })
    
}