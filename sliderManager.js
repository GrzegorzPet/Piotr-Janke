const slider = document.querySelector(".slider");
const carousel = document.querySelector(".carousel"); 
var direction = -1;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider(){
    intervalId = setInterval(nextSlide, 5000);
}

function prevSlide(){
    if(direction === -1){
        slider.appendChild(slider.firstElementChild);
        direction = 1;
    }
    clearInterval(intervalId);
    carousel.style.justifyContent = 'flex-end';
    slider.style.transform = 'translateX(calc(100% / 3))';
    intervalId = setInterval(nextSlide, 5000);
}

function nextSlide(){
    if(direction === 1){
        slider.prepend(slider.lastElementChild);
        carousel.style.justifyContent = 'flex-start';
        direction = -1;
    }
    clearInterval(intervalId);
    slider.style.transform = 'translateX(calc(100% / -3))';
    intervalId = setInterval(nextSlide, 5000);
}

slider.addEventListener('transitionend', function(){
    if (direction === -1){
        slider.appendChild(slider.firstElementChild);
    } else if (direction === 1){
        slider.prepend(slider.lastElementChild);
    }

    slider.style.transition = 'none';
    slider.style.transform = 'translate(0)';
    setTimeout(function(){
        slider.style.transition = 'all 0.5s';
    })
})