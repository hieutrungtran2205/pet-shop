const $ = document.querySelector.bind(document);
const loginForm = $('.header .login-form');
const loginBtn = $('#login-btn');
const closeFormBtn = $('.closeForm');
const navbar = $('.header .navbar');
const menuBtn = $('#menu-btn');

loginBtn.onclick = () => {
    loginForm.classList.toggle('active');
    navbar.classList.remove('active');
}

closeFormBtn.onclick = () => {
    loginForm.classList.remove('active');
}

menuBtn.onclick = () => {
    navbar.classList.toggle('active');
    loginForm.classList.remove('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
    if (window.scrollY > 0) {
        $('.header').classList.add('active');
    } else {
        $('.header').classList.remove('active');
        loginForm.classList.remove('active');
    }
}

window.onload = () => {
    if (window.scrollY > 0) {
        $('.header').classList.add('active');
    } else {
        $('.header').classList.remove('active');
    }
}