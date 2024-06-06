let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "flex";
    dots[slideIndex-1].className += " active";
}

let onDienstenPage = document.getElementById("diensten");
let restUnactive1 = document.getElementsByClassName("actieflink")[0];
let restUnactive2 = document.getElementsByClassName("actieflink")[1];

let dienstenlink1 = document.getElementsByClassName("dienstenlink")[0];
let dienstenlink2 = document.getElementsByClassName("dienstenlink")[1];

onDienstenPage.addEventListener("mouseover", dienstenActive);
onDienstenPage.addEventListener("mouseout", dienstenUnactive);

function dienstenActive() {
    restUnactive1.style.color="#fff";
    restUnactive2.style.color="#fff";
    dienstenlink1.style.color="#97BF10";
    dienstenlink2.style.color="#97BF10";
}

function dienstenUnactive() {
    restUnactive1.style.color="#97BF10";
    restUnactive2.style.color="#97BF10";
    dienstenlink1.style.color="#fff";
    dienstenlink2.style.color="#fff";
}