let loop = document.querySelectorAll('.dropdown-content');
let BTN = document.querySelectorAll('.dropbtn');

for (let i = 0; i < BTN.length; i++) {
    BTN[i].addEventListener('click', event => {
        for (let x = 0; x < loop.length; x++) {
            loop[i].classList.toggle("show2");

        }
    })
    document.addEventListener('click', anyTapToClose => {
        for (let y = 0; y < loop.length; y++) {
            if (anyTapToClose.target.closest(".dropbtn")) return
            loop[i].classList.remove("show2");
        }
    })
}