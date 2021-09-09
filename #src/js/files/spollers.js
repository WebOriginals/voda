//Spollers =======================
let spollers = document.querySelectorAll("._spoller");
let spollersGo = true;
if (spollers.length > 0) {

    function spollerCLick(e) {
        const spoller = e.target;
        if (spollersGo) {
            spollersGo = false;

            if (spoller.closest('._spollers').classList.contains('_one')) {
                let curent_spollers = spoller.closest('._spollers').querySelectorAll('._spoller');
                for (let i = 0; i < curent_spollers.length; i++) {
                    let el = curent_spollers[i];
                    if (el != spoller) {
                        el.classList.remove('_active');
                        _slideUp(el.nextElementSibling);
                    }
                }
            }


            if(spoller.classList.contains('_spoller')){
                spoller.classList.toggle('_active');
            }else{
                spoller.parentNode.classList.toggle('_active');
            }
            if(spoller.classList.contains('_spoller')){
                _slideToggle(spoller.nextElementSibling);
            }else{
                _slideToggle(spoller.parentNode.nextElementSibling);
            }


            setTimeout(function () {
                spollersGo = true;
            }, 500);
        }
    }

    function spollersInit() {
        for (let index = 0; index < spollers.length; index++) {
            const spoller = spollers[index];
            let spollerMax = spoller.getAttribute('data-max');

            if (spollerMax && window.innerWidth > spollerMax) {
                if (spoller.classList.contains('_init')) {
                    spoller.classList.remove('_active');
                    spoller.classList.remove('_init');
                    spoller.nextElementSibling.style.cssText = '';
                    spoller.removeEventListener("click", spollerCLick);
                }
            } else if (!spoller.classList.contains('_init')) {
                spoller.classList.add('_init');
                spoller.addEventListener("click", spollerCLick);
            }
        }
    }

    function spollersShowActive() {
        for (let index = 0; index < spollers.length; index++) {
            const spoller = spollers[index];
            if (spoller.classList.contains('_active')) {
                _slideToggle(spoller.nextElementSibling);
            }
        }
    }

    window.addEventListener("resize", spollersInit);

    setTimeout(function () {
        spollersShowActive();
        spollersInit();
    }, 0);
}
//Spollers =======================