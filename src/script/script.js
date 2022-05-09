'use strict'

const btn = document.querySelector('.navigation__button');
const nav = document.querySelector('.navigation');
const popup = document.querySelector('.popup');
const popupLinks = document.querySelectorAll('.btn[href="#popup"]');
const closePopup = document.querySelector('.popup__close');


btn.addEventListener('click', function() {
    nav.classList.toggle('open');
});

popupLinks.forEach(link => {
    link.addEventListener('click', function(){
        popup.classList.add('open');
    })
});

closePopup.addEventListener('click', function() {
    popup.classList.remove('open');
})