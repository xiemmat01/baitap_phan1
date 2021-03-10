const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const link = $$('.menu-bar .navbar-nav .link-item');
const dot = $$('.container .row .dot');

link.forEach((link, index) => {
    link.onclick = function () {
        $('.link-item.active').classList.remove('active')
        this.classList.add('active');
    }
});

dot.forEach((dot, index) => {
    dot.onclick = function () {
        $('.dot.active').classList.remove('active');
        this.classList.add('active');
    }
});
console.log(dot);