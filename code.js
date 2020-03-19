// nav scroll and fixed to window

const nav = document.querySelector("div.bar-pannel");

window.addEventListener("scroll", function () {
    const bodyScroll = document.body.scrollTop;
    const docScroll = document.documentElement.scrollTop;


    if (bodyScroll > 615 || docScroll > 615) {
        nav.style.position = "fixed";
        nav.style.top = "0";
    } else {
        nav.style.top = "-80px";
    }
})

// contact form

const formMail = document.querySelector('.contact-form-input-mail');
const formBtn = document.querySelector('.formBtn');

window.addEventListener("load", () => {
    if (window.location.href == "http://pizzeriaroberto.pl/index.html?mailsend") {
        alert("Twoja wiadomość została wysłana.");
        window.location.href = "http://pizzeriaroberto.pl";
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


const pizzeriaBtn2 = document.querySelector('.pizzeriaBtn2');
const menuBtn2 = document.querySelector('.menuBtn2');
const galleryBtn2 = document.querySelector('.galleryBtn2');
const contactBtn2 = document.querySelector('.contactBtn2');
const reservationBtn2 = document.querySelector('.reservationBtn2');

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





//functions on menu button

pizzeriaBtn2.addEventListener('click', goToPizzeria);
menuBtn2.addEventListener('click', goToMenu);
galleryBtn2.addEventListener('click', goToGallery);
contactBtn2.addEventListener('click', goToContact);
reservationBtn2.addEventListener('click', goToReservation);

menuBannerBtn.addEventListener('click', goToMenu);




function goToGalleryLink() {
    location.href = "gallery/gallery.html";
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