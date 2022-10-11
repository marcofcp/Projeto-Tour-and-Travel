const searchBtn = document.getElementById('search-btn');
const closeBtn = document.getElementById('close-btn');
const searchFormBox = document.getElementById('form-main-box');
const userBtn = document.getElementById('user-btn');
const modalCloseBtn = document.getElementById('modal-close-btn');
const modalBox = document.getElementById('main-modal-box');
const hamburgerBtnBox = document.getElementById('hamburger-main-box');
let videoBtn = document.querySelectorAll('.vid-btn');


// Hamburger Menu Open Button / Close Button
$('.hamburger-main-box').click((e) => {
    e.preventDefault();
    $('.hamburger-main-box').css("display", "none");
    $('.hamburger-close-box').css("display", "block");
    $('.hamburger-menu-box').slideToggle("fast");

});

$('.hamburger-close-box').click((e) => {
    e.preventDefault();
    $('.hamburger-close-box').css("display", "none");
    $('.hamburger-main-box').css("display", "block");
    $('.hamburger-menu-box').slideToggle("fast");
});

// Search Bar Open Button / Close Button

$('#search-btn').click((e) => {
    e.preventDefault();
    $('#form-main-box').slideToggle("fast");
    $('#search-btn').css("display", "none");
    $('#close-btn').css("display", "block");
});

$('#close-btn').click((e) => {
    e.preventDefault();
    $('#form-main-box').slideToggle("fast");
    $('#search-btn').css("display", "block");
    $('#close-btn').css("display", "none");
});

// Modal Login Open / Close
$('#user-btn').click((e) => {
    e.preventDefault();
    $('#main-modal-box').slideToggle("fast");
});

$('#modal-close-btn').click((e) => {
    e.preventDefault();
    $('#main-modal-box').slideToggle("fast");
});

// Video Toggle Options

videoBtn.forEach(btn =>{
    btn.addEventListener("click", () => {
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});

