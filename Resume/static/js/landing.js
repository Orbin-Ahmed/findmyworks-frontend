// const text = document.querySelector('.text');
// text.innerHTML  = text.textContent.replace(/\S/g, "<span>$&</span>");
// const element = document.querySelectorAll('span');
// for (let i = 0; i < element.length; i++) {
//     element[i].style.transform = "rotate(" + i * 5 + "deg)"
//     console.log(element.length)
// }
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}



AOS.init({
    duration: 1200,
    easing: 'ease-in-out',
    offset: 100
});



document.addEventListener("mousemove", parallax);
function parallax(e) {
    document.querySelectorAll(".movement").forEach(function (move) {
        var moving_value = move.getAttribute("data-value");
        var x = (e.clientX * moving_value) / 500;
        var y = (e.clientY * moving_value) / 500;

        move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
    });
}
