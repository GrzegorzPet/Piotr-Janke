const slider = document.querySelectorAll(".slider img");
let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider(){
    if(slider.length > 0){
        slider[slideIndex].classList.add("displaySlide");
        intervalId = setInterval(nextSlide, 5000);
    }
}

function showSlide(index){
    if(index >= slider.length){
        slideIndex = 0;
    }
    else if(index < 0){
        slideIndex = slider.length - 1;
    }
    slider.forEach(slide => {
        slide.classList.remove("displaySlide");
    })
    slider[slideIndex].classList.add("displaySlide");
    intervalId = setInterval(nextSlide, 5000);
}

function prevSlide(){
    clearInterval(intervalId);
    slideIndex--;
    showSlide(slideIndex);
}

function nextSlide(){
    clearInterval(intervalId);
    slideIndex++;
    showSlide(slideIndex);
}