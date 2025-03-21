const slider = document.querySelector(".slider");
const wrapper = document.querySelector(".slider-wrapper"); 
const link = document.getElementById('slider-link'); 
const slidesCount = document.querySelectorAll(".slide").length;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider(){
    slider.style.width = `${slidesCount * 100}%`;
    slider.dataset.prevPercentage = (-100/slidesCount);
    slider.style.transform = `translateX(${slider.dataset.prevPercentage}%)`
    intervalId = setInterval(nextSlide, 5000);
}

function prevSlide(){
    slider.dataset.prevPercentage = parseFloat(slider.dataset.prevPercentage) + (100/slidesCount);
    slider.animate({
        transform: `translateX(${slider.dataset.prevPercentage}%)`
    }, { duration: 300, fill: "forwards" });
    setTimeout(function(){
        slider.dataset.prevPercentage = (-100/slidesCount);
        slider.animate({
            transform: `translateX(${slider.dataset.prevPercentage}%)`
        }, { duration: 0, fill: "forwards"});
        slider.prepend(slider.lastElementChild);
    },300);
    clearInterval(intervalId);
    intervalId = setInterval(nextSlide, 5000);
}

function nextSlide(){
    slider.dataset.prevPercentage = parseFloat(slider.dataset.prevPercentage) + (-100/slidesCount);
    slider.animate({
        transform: `translateX(${slider.dataset.prevPercentage}%)`
    }, { duration: 300, fill: "forwards" });
    setTimeout(function(){
        slider.dataset.prevPercentage = (-100/slidesCount);
        slider.animate({
            transform: `translateX(${slider.dataset.prevPercentage}%)`
        }, { duration: 0, fill: "forwards" });
        slider.appendChild(slider.firstElementChild);
    },325);
    clearInterval(intervalId);
    intervalId = setInterval(nextSlide, 5000);
}

const handleOnDown = (e) => 
{
    clearInterval(intervalId);
    slider.dataset.mouseDownAt = e.clientX;
}

const handleOnUp = () => {
    slider.dataset.mouseDownAt = "0";
    clearInterval(intervalId);
    intervalId = setInterval(nextSlide, 5000);
    if(slider.dataset.percentage < -10)
        nextSlide();
    else if (slider.dataset.percentage > 10)
        prevSlide();
    else 
    {
        slider.animate({
            transform: `translateX(${slider.dataset.prevPercentage}%)`
        }, { duration: 100, fill: "forwards" });
        slider.dataset.prevPercentage = (-100/slidesCount);
    }
    setTimeout(function(){
        link.style.display= 'block';
    },100)
}

const maxDelta = window.innerWidth;

const handleOnMove = (e) => {
    if (slider.dataset.mouseDownAt === "0" || isNaN(slider.dataset.mouseDownAt)) return;
    link.style.display= 'none';
    clearInterval(intervalId);
    const mouseDelta = parseFloat(slider.dataset.mouseDownAt) - e.clientX;
    const percentage = (mouseDelta / maxDelta) * -100;

    const nextPercentage = parseFloat(slider.dataset.prevPercentage) + (percentage/slidesCount);
    slider.dataset.percentage = percentage;
    
    slider.animate({
        transform: `translateX(${nextPercentage}%)`
    }, { duration: 200, fill: "forwards" });
}

wrapper.onmousedown = (e) => handleOnDown(e);

wrapper.ontouchstart = (e) => handleOnDown(e.touches[0]);

wrapper.onmouseup = () => handleOnUp();

wrapper.ontouchend = () => handleOnUp();

wrapper.onmousemove = (e) => handleOnMove(e);

wrapper.ontouchmove = (e) => handleOnMove(e.touches[0]);