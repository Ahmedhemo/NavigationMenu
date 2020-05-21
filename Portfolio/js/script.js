var navOn = document.querySelector('.nav--menu-toggler');
var navClose = document.querySelector('.nav--menu-close');
var navCloseWrapper = document.querySelector('.nav--menu-wrapper');
var bottomClick = document.querySelector('.wrapper');

navOn.addEventListener("click", function(){
    navCloseWrapper.style.top = '-15%';
    navCloseWrapper.style.transition = '.25s';
})
navClose.addEventListener("click", function(){
    navCloseWrapper.style.top = '-100%';
    navCloseWrapper.style.transition = '.25s';
})
bottomClick.addEventListener("click", function(){
    navCloseWrapper.style.top = '-100%';
    navCloseWrapper.style.transition = '.25s';
})