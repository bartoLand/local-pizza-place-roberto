// nav scroll and fixed to window

const nav = document.querySelector("div.bar-pannel");

window.addEventListener("scroll", function () {
    const bodyScroll = document.body.scrollTop;
    const docScroll = document.documentElement.scrollTop;


    if (bodyScroll > 615 || docScroll > 615) {
        nav.style.position = "fixed";
        nav.style.top = "0";
    } else {
        nav.style.top = "-100px";
    }
})



// scroll to by click on buttons

const pizzeriaBtn2 = document.querySelector('.pizzeriaBtn2');
const menuBtn2 = document.querySelector('.menuBtn2');
const galleryBtn2 = document.querySelector('.galleryBtn2');
const contactBtn2 = document.querySelector('.contactBtn2');
const reservationBtn2 = document.querySelector('.reservationBtn2');



//functions on menu button

pizzeriaBtn2.addEventListener('click', goToMainPage);
menuBtn2.addEventListener('click', goToMainPage);
galleryBtn2.addEventListener('click', goToMainPage);
contactBtn2.addEventListener('click', goToMainPage);
reservationBtn2.addEventListener('click', goToMainPage);


function goToMainPage() {
    location.href = "/index.html";
}


const hamburger = document.querySelector('.fa-bars');

hamburger.addEventListener('click', function () {
    const navMobile = document.querySelector('.nav-list2');


    navMobile.classList.toggle("navOn")
    hamburger.classList.toggle("fasOn")

    const mobileButtonList = document.querySelectorAll(".nav-list2 >ul >li");

    mobileButtonList.forEach(function (e) {
        e.onclick = function () {
            navMobile.classList.toggle("navOn")
            hamburger.classList.toggle("fasOn")
        }
    })


})