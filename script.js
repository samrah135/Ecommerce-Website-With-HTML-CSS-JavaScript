// Navbar for smaller screens

const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    });
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    });
}

// Product image selection
var MainImg = document.getElementById("Mainimg");
var smallImg = document.getElementsByClassName("small-img");

if (smallImg.length > 0) {
    smallImg[0].onclick = function() {
        MainImg.src = smallImg[0].src;
    };
}
if (smallImg.length > 1) {
    smallImg[1].onclick = function() {
        MainImg.src = smallImg[1].src;
    };
}
if (smallImg.length > 2) {
    smallImg[2].onclick = function() {
        MainImg.src = smallImg[2].src;
    };
}
if (smallImg.length > 3) {
    smallImg[3].onclick = function() {
        MainImg.src = smallImg[3].src;
    };
}
