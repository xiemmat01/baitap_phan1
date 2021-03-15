const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const link = $$('.collapse .navbar-top-2 .nav-item .nav-link');
const point = $$('.carousel-indicators .point');
// const dot = $$('.container .row .dot');

link.forEach((link, index) => {
    link.onclick = function () {
        $('.nav-link.active').classList.remove('active')
        this.classList.add('active');
    }
});

// dot.forEach((dot, index) => {
//     dot.onclick = function () {
//         $('.dot.active').classList.remove('active');
//         this.classList.add('active');
//     }
// });

const toggle = $(".toggle");
toggle.addEventListener("click", () => {
    toggle.classList.toggle("change");
});

point.forEach((active) => {
    active.onclick = function () {
        $('.point.active').classList.remove('active');
        this.classList.add('active');
    } 
});
console.log(point);