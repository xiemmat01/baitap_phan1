const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const link = $$('.collapse .navbar-top-2 .nav-item .nav-link');
const dot = $$('.container .row .dot');

link.forEach((link, index) => {
    link.onclick = function () {
        $('.nav-link.active').classList.remove('active')
        this.classList.add('active');
    }
});

dot.forEach((dot, index) => {
    dot.onclick = function () {
        $('.dot.active').classList.remove('active');
        this.classList.add('active');
    }
});
console.log(link);