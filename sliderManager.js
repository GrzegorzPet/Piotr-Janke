const slider = document.querySelector(".slider");
const wrapper = document.querySelector(".slider-wrapper"); 
const link = document.getElementById('slider-link');
var direction = -1;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider(){
    intervalId = setInterval(nextSlide, 5000);
    slider.dataset.prevPercentage = (-100/3);
}

function prevSlide(){
    slider.dataset.prevPercentage = parseFloat(slider.dataset.prevPercentage) + (100/3);
    slider.animate({
        transform: `translateX(${slider.dataset.prevPercentage}%)`
    }, { duration: 250, fill: "forwards" });

    setTimeout(function(){
        slider.prepend(slider.lastElementChild);
        slider.animate({
            transform: `translateX(${(-100/3)}%)`
        }, { duration: 0, fill: "forwards" });
    },250)
    slider.dataset.prevPercentage = (-100/3);
}

function nextSlide(){
    slider.dataset.prevPercentage = parseFloat(slider.dataset.prevPercentage) + (-100/3);
    slider.animate({
        transform: `translateX(${slider.dataset.prevPercentage}%)`
    }, { duration: 250, fill: "forwards" });
    setTimeout(function(){
        slider.appendChild(slider.firstElementChild);
        slider.animate({
            transform: `translateX(${(-100/3)}%)`
        }, { duration: 0, fill: "forwards" });
    },250)
    slider.dataset.prevPercentage = (-100/3);
}

const handleOnDown = (e) => 
    slider.dataset.mouseDownAt = e.clientX;

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
        slider.dataset.prevPercentage = (-100/3);
    }
    setTimeout(function(){
        link.style.display= 'block';
    },100)
}

const maxDelta = window.innerWidth;

const handleOnMove = (e) => {
    if (slider.dataset.mouseDownAt === "0") return;

    link.style.display= 'none';
    clearInterval(intervalId);
    const mouseDelta = parseFloat(slider.dataset.mouseDownAt) - e.clientX;
    const percentage = (mouseDelta / maxDelta) * -100;

    const nextPercentage = parseFloat(slider.dataset.prevPercentage) + (percentage/3);
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