const color_btn = document.querySelector(".color-btn");
const icon_btn = document.querySelector(".icon-btn");
const svg_btn = document.querySelector(".svg-btn");
const font_btn = document.querySelector(".font-btn");
const media_btn = document.querySelector(".media-btn");
const box = document.querySelector(".link-box");
const color_link = document.querySelector(".color-link");
const icon_link = document.querySelector(".icon-link");
const svg_link = document.querySelector(".svg-link");
const media_link = document.querySelector(".media-link");
const cpicker_btn = document.querySelector(".cpicker-btn");
const awesome_btn = document.querySelector(".awesome-btn");
const boot_btn = document.querySelector(".boot-btn");
const google_btn = document.querySelector(".google-btn");
const undraw_btn = document.querySelector(".undraw-btn");
const pexels_btn = document.querySelector(".pexels-btn");
const unsplash_btn = document.querySelector(".unsplash-btn");
const chunt_btn = document.querySelector(".chunt-btn");

//go to website 
cpicker_btn.addEventListener('click', gotow3);
function gotow3() {
    window.open("https://www.w3schools.com/colors/colors_picker.asp");
}
chunt_btn.addEventListener('click', gotochunt);
function gotochunt() {
    window.open("https://colorhunt.co/");
}
awesome_btn.addEventListener('click', gotoawesome);
function gotoawesome() {
    window.open("https://fontawesome.com/");
}
boot_btn.addEventListener('click', gotoboot);
function gotoboot() {
    window.open("https://icons.getbootstrap.com/");
}
google_btn.addEventListener('click', gotogoogle);
function gotogoogle() {
    window.open("https://material.io/resources/icons/?style=baseline");
}
undraw_btn.addEventListener('click', gotoundraw);
function gotoundraw() {
    window.open("https://undraw.co/illustrations");
}
pexels_btn.addEventListener('click', gotopexels);
function gotopexels() {
    window.open("https://www.pexels.com/");
}
unsplash_btn.addEventListener('click', gotounsplash);
function gotounsplash() {
    window.open("https://unsplash.com/");
}

//view the subject box
color_btn.addEventListener('click', gotoColor);
function gotoColor() {
    box.style.display = "block";
    svg_link.style.display = "none";
    media_link.style.display = "none";
    icon_link.style.display = "none";
    color_link.style.display = "flex";
}
icon_btn.addEventListener('click', gotoIcon);
function gotoIcon() {
    box.style.display = "block";
    color_link.style.display = "none";
    svg_link.style.display = "none";
    media_link.style.display = "none";
    icon_link.style.display = "flex";
}
svg_btn.addEventListener('click', gotoSvg);
function gotoSvg() {
    box.style.display = "block";
    color_link.style.display = "none";
    icon_link.style.display = "none";
    media_link.style.display = "none";
    svg_link.style.display = "flex";
}
font_btn.addEventListener('click', gotoFont);
function gotoFont() {
    box.style.display = "none";
    window.open("https://fonts.google.com/");
}
media_btn.addEventListener('click', gotoMedia);
function gotoMedia() {
    box.style.display = "block";
    color_link.style.display = "none";
    svg_link.style.display = "none";
    icon_link.style.display = "none";
    media_link.style.display = "flex";
}