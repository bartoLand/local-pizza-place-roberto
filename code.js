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

// const dotClick = dots.toString


// const dotChangeSlide = () => {
//     console.log(dotClick)
// }



// dotClick.addEventListener('click', dotChangeSlide);







// contact form

const formMail = document.querySelector('.contact-form-input-mail');
const formBtn = document.querySelector('.formBtn');


// document.querySelector('.contact-form-input-subject').textContent = "Odpoweidź na wiadomość z formularza ze strony";



// console.log(window.location.href);


window.addEventListener("load", () => {
    if (window.location.href == "http://demo.pizzeriaroberto.pl/index.html?mailsend") {
        alert("Twoja wiadomość została wysłana.");
        window.location.href = "http://demo.pizzeriaroberto.pl";
    }
})

// formBtn.addEventListener("mouseover", function () {
//     console.log('działa')
// })


// const mailAlert = () => {
//     // const formMail = document.querySelector('.contact-form-input-mail');
//     let val = formMail.textContent.value
//     // if (val.includes('@')) {
//     //     return
//     // } else {
//     //     alert('Proszę podać poprawny adres e-mail');
//     //     formBtn.disabled = true;
//     // }


//     if (val = val.includes('a')) {
//         return
//     } else {
//         alert('Proszę podać poprawny adres e-mail');
//         formBtn.disabled = true;
//     }
// }




// formMail.addEventListener('input', mailAlert)



// const validate = formMail.addEventListener('input', (e) => {
//     console.log(e.target.value)

// if (e.target.value.includes('a')) {
//     return
// } else {
//     alert('Proszę podać poprawny adres e-mail');
//     formBtn.disabled = true;
// }



// formMail.addEventListener('focusout', () => {
//         if (e.target.value.includes('@')) {
//             // document.form1.mail.focus();
//             formBtn.disabled = false;
//             return true;

//         } else {
//             // document.form1.mail.focus();
//             // return false;
//             alert('Proszę podać poprawny adres e-mail');
//             // document.form1.mail.focus();
//             // formMail.required = true;
//             formBtn.disabled = true;
//             return false;
//         }
//     }

// )




// })



// const validate = formMail.addEventListener('focusout', (e) => {
//         if (e.target.value.includes('@')) {
//             // document.form1.mail.focus();
//             // formBtn.disabled = false;
//             // formBtn.setAttribute("abled", "abled")
//             return true;


//         } else {
//             // document.form1.mail.focus();
//             // return false;
//             alert('Proszę podać poprawny adres e-mail');
//             // document.form1.mail.focus();
//             // formMail.required = true;
//             // formBtn.disabled = true;
//             // formBtn.setAttribute("disabled", "disabled")
//             return false;
//         }





//     }

// )

// formBtn.addEventListener('click', () => {
//     console.log('button')
// })




// formBtn.addEventListener('click', () => {

//     formMail.addEventListener('input', (e) => {
//             if (e.target.value.includes('@')) {

//                 // return true;
//                 return


//             } else {

//                 alert('Proszę podać poprawny adres e-mail');

//                 // return false;
//             }





//         }

//     )


// })

formBtn.addEventListener('click', () => {
    if (formMail.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        return
    } else {
        alert('Proszę podać poprawny adres e-mail');
        // formBtn.disabled = true;
        // formBtn.disabled = false;
        event.preventDefault()
    }
})



// formBtn.addEventListener('click', () => {
//     if (formMail.value.includes('@')) {
//         return
//     } else {
//         alert('Proszę podać poprawny adres e-mail');
//         // formBtn.disabled = true;
//         // formBtn.disabled = false;
//         event.preventDefault()
//     }
// })












// formBtn.addEventListener('click', function validateMyForm() {
//     if (formMail.value.includes('@')) {
//         alert("validation failed false");
//         returnToPreviousPage();
//         return false;
//     }

//     alert("validations passed");
//     return true;
// })





// formBtn.addEventListener('click', () => {
//     if (validate == true) {
//         return
//     } else {
//         alert('Proszę podać poprawny adres e-mail');
//     }
// })




// formMail.addEventListener('focusout', () => {
//         if (curentInput.includes('@')) {
//             return
//         } else {
//             alert('Proszę podać poprawny adres e-mail');
//             formBtn.disabled = true;
//         }
//     }

// )

// function ValidateEmail(inputText) {
//     var mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
//     if (inputText.value.match(mailformat)) {
//         alert("You have entered a valid email address!"); //The pop up alert for a valid email address
//         document.form1.text1.focus();
//         return true;
//     } else {
//         alert("You have entered an invalid email address!"); //The pop up alert for an invalid email address
//         document.form1.text1.focus();
//         return false;
//     }
// }