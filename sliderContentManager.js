const slider = document.querySelector(".content-slider");
const slides = document.querySelectorAll(".content-slide");
let dots;
const slidesQuantity = document.querySelectorAll(".content-slide").length;
let slideCounter = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider(){
    const dotList = document.querySelector(".content-carousel-dot-list");
    for(let i = 0; i < slidesQuantity; i++){
        dotList.innerHTML+=`<ul class="content-carousel-dot" onclick="changeSlide(${i})"></ul>`
    }
    dots = document.querySelectorAll(".content-carousel-dot");
    dots[slideCounter].style.opacity = 1;
    slideHeight = document.querySelector(".content-slide-image").offsetHeight;
    intervalId = setInterval(nextSlide, 5000);
}

function prevSlide(){
    slides[slideCounter].style.opacity = 0;
    dots[slideCounter].style.opacity = 0.5;
    slideCounter--;
    if(slideCounter <= -1) {slideCounter = slidesQuantity-1;}
    slides[slideCounter].style.opacity = 1;
    dots[slideCounter].style.opacity = 1;
    clearInterval(intervalId);
    intervalId = setInterval(nextSlide, 5000);
}

function nextSlide(){
    slides[slideCounter].style.opacity = 0;
    dots[slideCounter].style.opacity = 0.5;
    slideCounter++;
    if(slideCounter >= slidesQuantity) {slideCounter = 0;}
    slides[slideCounter].style.opacity = 1;
    dots[slideCounter].style.opacity = 1;
    clearInterval(intervalId);
    intervalId = setInterval(nextSlide, 5000);
}

function changeSlide(slideNumber){
    if(slideNumber != slideCounter){
        slides[slideCounter].style.opacity = 0;
        dots[slideCounter].style.opacity = 0.5;
        slideCounter = slideNumber;
        slides[slideCounter].style.opacity = 1;
        dots[slideCounter].style.opacity = 1;
    }
    clearInterval(intervalId);
    intervalId = setInterval(nextSlide, 5000);
}

const handleOnDown = (e) => 
{
    clearInterval(intervalId);
    slides[slideCounter].style.transition = "0s";
    slider.dataset.mouseDownAt = e.clientX;
}

const handleOnUp = () => {
    slider.dataset.mouseDownAt = "0";
    slides[slideCounter].style.transition = "0.5s ease";
    clearInterval(intervalId);
    intervalId = setInterval(nextSlide, 5000);
    if(slider.dataset.percentage < -.1)
        nextSlide();
    else if (slider.dataset.percentage > .1)
        prevSlide();
    else slides[slideCounter].style.opacity = 1;
}

const handleOnMove = (e) => {
    if (slider.dataset.mouseDownAt === "0" || isNaN(slider.dataset.mouseDownAt)) return;
    clearInterval(intervalId);
    const maxDelta = document.querySelector(".content-slide-image").offsetWidth;
    const mouseDelta = parseFloat(slider.dataset.mouseDownAt) - e.clientX;
    let percentage = (mouseDelta / maxDelta);
    slider.dataset.percentage = percentage;
    if(percentage < 0) percentage *= -1; 
    console.log(1-percentage);
    slides[slideCounter].style.opacity = 1 - percentage;
}

slider.onmousedown = (e) => handleOnDown(e);

slider.ontouchstart = (e) => handleOnDown(e.touches[0]);

slider.onmouseup = () => handleOnUp();

slider.ontouchend = () => handleOnUp();

slider.onmousemove = (e) => handleOnMove(e);

slider.ontouchmove = (e) => handleOnMove(e.touches[0]);