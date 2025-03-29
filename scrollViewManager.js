const content = document.querySelectorAll(".motto-block, .content-block, .content-categories");

document.addEventListener("DOMContentLoaded", function () {
    content.forEach((block) => {
        if(isInView(block)) {
            block.classList.add("visible");
        }
    });
});

document.addEventListener("scroll", function () {
    content.forEach((block) => {
        if(isInView(block)) {
            block.classList.add("visible");
        }
        if(isntInView(block)) {
            block.classList.remove("visible");
        }
    });
});

function isInView(element){
    const rect = element.getBoundingClientRect();
    return(
        rect.bottom > 0 &&
        rect.top < (window.innerHeight || document.documentElement.clientHeight)
    );
}

function isntInView(element){
    const rect = element.getBoundingClientRect();
    return(
        rect.bottom < 0 ||
        rect.top > (window.innerHeight || document.documentElement.clientHeight)
    );
}
