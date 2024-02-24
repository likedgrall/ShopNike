const hearts = document.querySelectorAll(".heart");
for (let i = 0; i < hearts.length; i++) {
    hearts[i].onclick = function () {
        hearts[i].classList.toggle("heart_active");
    }
}


const check = document.querySelectorAll(".newmodel-card button");
for (let i = 0; i < check.length; i++) {
    check[i].onclick = function () {
        check[i].classList.toggle("check_active")
    }
}


const shopCase = document.querySelector(".shop-case");
let buttonShopCase = document.querySelector("#shopCase");
for (let i = 0; i < shopCase.length; i++) {
    buttonShopCase[i].onclick = function () {
        shopCase.classList.add("shop-case_active");
    }
}

const hamburger = document.querySelector(".hamburger");
const navLogo = document.querySelector(".nav__logo");
const navLinks = document.querySelector(".nav__links");
const navProfile = document.querySelector(".nav__profile");
hamburger.onclick = function () {
    hamburger.classList.toggle("hamburger_active");
    navLinks.classList.toggle("nav__links_active");
    navLogo.classList.toggle("nav__logo_active")
    navProfile.classList.toggle("nav__profile_active");
}
navLogo.onclick = function () {
    menuClose();
}
const navLinksAll = document.querySelectorAll(".nav__links a");
for (let i = 0; i < navLinksAll.length; i++) {
    navLinksAll[i].onclick = function () {
        menuClose();
    }
}
const navProfileAll = document.querySelectorAll(".nav__profile a");
for (let i = 0; i < navProfileAll.length; i++) {
    navProfileAll[i].onclick = function () {
        menuClose();
    }
}
function menuClose() {
    hamburger.classList.remove("hamburger_active");
    navLinks.classList.remove("nav__links_active");
    navLogo.classList.remove("nav__logo_active");
    navProfile.classList.remove("nav__profile_active");
}

const aboutUsBigImg = document.querySelector(".about-us__photo");
const aboutUsSmallImg = document.querySelector(".about-us_imgcontainer");
const aboutUsBlockImg = `<div class="about-us_blockimg">
                            <img src="../img/about-us.png" alt="">
                        </div>
                        `;

if (window.innerWidth < 993) {
    aboutUsSmallImg.innerHTML = aboutUsBlockImg;
} else {
    aboutUsBigImg.innerHTML = aboutUsBlockImg;
}
