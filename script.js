const scrollers = document.querySelectorAll(".scroller");
if (!wondow.matchmedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
}

function addAnimation() {
    scrollers.forEach(scroller => {
        scroller.setAttribute("data-animated", true)
    });
}