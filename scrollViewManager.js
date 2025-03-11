const content = document.querySelectorAll(".content-block");

document.addEventListener("DOMContentLoaded", function () {
    content.forEach((block) => {
        if(isInView(block)) {
            block.classList.add("content-block-visible");
        }
    });
});

document.addEventListener("scroll", function () {
    content.forEach((block) => {
        if(isInView(block)) {
            block.classList.add("content-block-visible");
        }
    });
});

function isInView(element){
    const rect = element.getBoundingClientRect();
    return(
        rect.bottom > 0 &&
        rect.top < (window.innerHeight - 150 || document.documentElement.clientHeight - 150)
    );
}
