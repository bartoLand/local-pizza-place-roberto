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
        nav.style.top = "-80px";
    }
})


// slider gallery section

// const slideList = [{
//     img: "images/slider1.jpg",
//     text: "pierwszy tekst",
// }, {
//     img: "images/slider2.jpg",
//     text: "drugi tekst",
// }, {
//     img: "images/slider3.jpg",
//     text: "trzeci tekst",
// }]

// // interface for gallery

// const image = document.querySelector("img.slider")
// const sliderText = document.querySelector("p.slider-text");

// const dots = [...document.querySelectorAll(".dots span")];


// const time = 3000;
// let active = 0;

// const changeDot = () => {
//     const activeDot = dots.findIndex(dot => dot.classList.contains('active'));
//     dots[activeDot].classList.remove("active");
//     dots[active].classList.add("active");
// }

// const changeSlide = () => {
//     active++;
//     if (active === slideList.length) {
//         active = 0;
//     }
//     image.src = slideList[active].img;
//     sliderText.textContent = slideList[active].text;
//     changeDot();
// }


// setInterval(changeSlide, time);

// const dotClick = dots.toString


// const dotChangeSlide = () => {
//     console.log(dotClick)
// }



// dotClick.addEventListener('click', dotChangeSlide);







// contact form

const formMail = document.querySelector('.contact-form-input-mail');
const formBtn = document.querySelector('.formBtn');

window.addEventListener("load", () => {
    if (window.location.href == "http://demo.pizzeriaroberto.pl/index.html?mailsend") {
        alert("Twoja wiadomość została wysłana.");
        window.location.href = "http://demo.pizzeriaroberto.pl";
    }
})



formBtn.addEventListener('click', () => {
    if (formMail.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        return
    } else {
        alert('Proszę podać poprawny adres e-mail');
        event.preventDefault()
    }
})









// scroll to by click on buttons


// const pizzeriaBtn = document.querySelector('.pizzeriaBtn');
// const menuBtn = document.querySelector('.menuBtn');
// const galleryBtn = document.querySelector('.galleryBtn');
// const contactBtn = document.querySelector('.contactBtn');
// const reservationBtn = document.querySelector('.reservationBtn');

const pizzeriaBtn2 = document.querySelector('.pizzeriaBtn2');
const menuBtn2 = document.querySelector('.menuBtn2');
const galleryBtn2 = document.querySelector('.galleryBtn2');
const contactBtn2 = document.querySelector('.contactBtn2');
const reservationBtn2 = document.querySelector('.reservationBtn2');

// const pizzeriaBtn3 = document.querySelector('.pizzeriaBtn3');
// const menuBtn3 = document.querySelector('.menuBtn3');
// const galleryBtn3 = document.querySelector('.galleryBtn3');
// const contactBtn3 = document.querySelector('.contactBtn3');
// const reservationBtn3 = document.querySelector('.reservationBtn3');

const menuBannerBtn = document.querySelector('.banner-menu ');

// position of sections

const offsetPizzeria = document.querySelector('.pizzeria').offsetTop;
const offsetMenu = document.querySelector(".section-menu").offsetTop;
const offsetGallery = document.querySelector(".section-gallery").offsetTop;
const offsetContact = document.querySelector(".contact").offsetTop;
const offsetReservation = document.querySelector(".contact-form").offsetTop;


// go to specific section

const goToPizzeria = () => {
    window.scrollTo(0, offsetPizzeria - 130)
}

const goToMenu = () => {
    window.scrollTo(0, offsetMenu - 130);
}

const goToGallery = () => {
    window.scrollTo(0, offsetGallery - 130);

}

const goToContact = () => {
    window.scrollTo(0, offsetContact - 130)
}

const goToReservation = () => {
    window.scrollTo(0, offsetReservation - 130)
}





//functions on every menu button

// pizzeriaBtn.addEventListener('click', goToPizzeria);
// menuBtn.addEventListener('click', goToMenu);
// galleryBtn.addEventListener('click', goToGallery);
// contactBtn.addEventListener('click', goToContact);
// reservationBtn.addEventListener('click', goToReservation);

pizzeriaBtn2.addEventListener('click', goToPizzeria);
menuBtn2.addEventListener('click', goToMenu);
galleryBtn2.addEventListener('click', goToGallery);
contactBtn2.addEventListener('click', goToContact);
reservationBtn2.addEventListener('click', goToReservation);

// pizzeriaBtn3.addEventListener('click', goToPizzeria);
// menuBtn3.addEventListener('click', goToMenu);
// galleryBtn3.addEventListener('click', goToGallery);
// contactBtn3.addEventListener('click', goToContact);
// reservationBtn3.addEventListener('click', goToReservation);

menuBannerBtn.addEventListener('click', goToMenu);


// menuBannerBtn.addEventListener('click', console.log('działa btn'))









// window.addEventListener("scroll", () => {
//     console.log(window.pageYOffset)
// })








// src = "https://cdn.jsdelivr.net/gh/cferdinandi/smooth-scroll@15/dist/smooth-scroll.polyfills.min.js"




// const goToGallery = () => {
//     location.href = "https://www.netflix.com/title/80197526";
// }

function goToGalleryLink() {
    location.href = "gallery/gallery.html";

}



const hamburger = document.querySelector('.fa-bars');
// const navMobile = document.querySelector('.nav-list');


// hamburger.addEventListener('click', function () {
//     const navMobile = document.querySelector('.nav-list');
//     if (navMobile.classList) {
//         navMobile.classList.toggle("navOn")
//         console.log("działa")
//     }
// })



// const mobileButtonList = document.querySelectorAll(".nav-list2 >ul >li");
// mobileButtonList.forEach(function (e) {
//     e.onclick = function () {
//         console.log("działa")

//     }
// })




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