// nav scroll and fixed to window

const nav = document.querySelector("div.bar-pannel");

window.addEventListener("scroll", function () {
    // console.log(scrollY);
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


// const pizzeriaBtn = document.querySelector('.pizzeriaBtn');
// const menuBtn = document.querySelector('.menuBtn');
// const galleryBtn = document.querySelector('.galleryBtn');
// const contactBtn = document.querySelector('.contactBtn');
// const reservationBtn = document.querySelector('.reservationBtn');

// const pizzeriaBtn2 = document.querySelector('.pizzeriaBtn2');
// const menuBtn2 = document.querySelector('.menuBtn2');
// const galleryBtn2 = document.querySelector('.galleryBtn2');
// const contactBtn2 = document.querySelector('.contactBtn2');
// const reservationBtn2 = document.querySelector('.reservationBtn2');

// const pizzeriaBtn3 = document.querySelector('.pizzeriaBtn3');
// const menuBtn3 = document.querySelector('.menuBtn3');
// const galleryBtn3 = document.querySelector('.galleryBtn3');
// const contactBtn3 = document.querySelector('.contactBtn3');
// const reservationBtn3 = document.querySelector('.reservationBtn3');

// const menuBannerBtn = document.querySelector('.banner-menu ');

// position of sections

// const offsetPizzeria = document.querySelector('.pizzeria').offsetTop;
// const offsetMenu = document.querySelector(".section-menu").offsetTop;
// const offsetGallery = document.querySelector(".section-gallery").offsetTop;
// const offsetContact = document.querySelector(".contact").offsetTop;
// const offsetReservation = document.querySelector(".contact-form").offsetTop;


// go to specific section

// const goToPizzeria = () => {
//     location.replace("https://www.w3schools.com")
//     window.scrollTo(0, offsetPizzeria - 130)
// }

// const goToMenu = () => {
//     window.scrollTo(0, offsetMenu - 130);
// }

// const goToGallery = () => {
//     window.scrollTo(0, offsetGallery - 130).animateScroll(target);

// }

// const goToContact = () => {
//     window.scrollTo(0, offsetContact - 130)
// }

// const goToReservation = () => {
//     window.scrollTo(0, offsetReservation - 130)
// }





//functions on every menu button

// pizzeriaBtn.addEventListener('click', goToPizzeria);
// menuBtn.addEventListener('click', goToMenu);
// galleryBtn.addEventListener('click', goToGallery);
// contactBtn.addEventListener('click', goToContact);
// reservationBtn.addEventListener('click', goToReservation);

// pizzeriaBtn2.addEventListener('click', goToPizzeria);
// menuBtn2.addEventListener('click', goToMenu);
// galleryBtn2.addEventListener('click', goToGallery);
// contactBtn2.addEventListener('click', goToContact);
// reservationBtn2.addEventListener('click', goToReservation);

// pizzeriaBtn3.addEventListener('click', goToPizzeria);
// menuBtn3.addEventListener('click', goToMenu);
// galleryBtn3.addEventListener('click', goToGallery);
// contactBtn3.addEventListener('click', goToContact);
// reservationBtn3.addEventListener('click', goToReservation);

// menuBannerBtn.addEventListener('click', goToMenu);



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