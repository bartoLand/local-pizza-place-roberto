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

const slideList = [{
    img: "images/slider1.jpg",
    text: "pierwszy tekst",
}, {
    img: "images/slider2.jpg",
    text: "drugi tekst",
}, {
    img: "images/slider3.jpg",
    text: "trzeci tekst",
}]

// interface for gallery

const image = document.querySelector("img.slider")
const sliderText = document.querySelector("p.slider-text");

const dots = [...document.querySelectorAll(".dots span")];


const time = 3000;
let active = 0;

const changeDot = () => {
    const activeDot = dots.findIndex(dot => dot.classList.contains('active'));
    dots[activeDot].classList.remove("active");
    dots[active].classList.add("active");
}

const changeSlide = () => {
    active++;
    if (active === slideList.length) {
        active = 0;
    }
    image.src = slideList[active].img;
    sliderText.textContent = slideList[active].text;
    changeDot();
}


setInterval(changeSlide, time);

const dotClick = dots.toString


const dotChangeSlide = () => {
    console.log(dotClick)
}



dotClick.addEventListener('click', dotChangeSlide);