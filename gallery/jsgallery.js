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