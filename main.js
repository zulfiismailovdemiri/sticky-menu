// import $ from 'jquery';
import './style.scss'


// Vanilla JS
(function() {
    // Switch to NodeList
    // NodeList.prototype.forEach = Array.prototype.forEach;

    // sticky-menu used selectors
    var menuBlock = document.querySelector('.sticky-menu--nav');
    var menuBtn = document.querySelector('.sticky-menu--nav button');
    var stickyMenu = document.querySelector('.sticky-menu');
    var slideMenu = document.querySelector('.slide-menu');
    var slideMenuItem = document.querySelector('.slide-menu-item');
    var subMenuButton = document.querySelectorAll('.slide-menu--item button span');
    var slideMenuBack = document.querySelectorAll('.slide-menu-item .back');

    // Toggle Sticky-Menu
    menuBtn.addEventListener('click', function (){
        stickyMenu.classList.toggle('active')
        if(stickyMenu.classList.contains('active')){
            menuBtn.innerHTML = '<ion-icon class="close" name="close-outline"></ion-icon>';
        } else {
            menuBtn.innerHTML = 'Menu';
        }
    })

    // Toggle Sticky-Sub-Menu
    subMenuButton.forEach(function(el){
        el.addEventListener('click', function (e){
            slideMenu.classList.add('is-open');
            // console.log(e.currentTarget.parentNode.parentNode.querySelector('ul'));
            e.currentTarget.parentNode.parentNode.querySelector('ul').classList.add('active');
            var activeHeight = e.currentTarget.parentNode.parentNode.querySelector('ul').offsetHeight;
            stickyMenu.style.height = (activeHeight + 40) + "px";
        })
    })

    slideMenuBack.forEach(function (el){
        el.addEventListener('click', function (){
            slideMenu.classList.remove('is-open')
            slideMenuItem.classList.remove('active')
            var activeHeight = slideMenu.clientHeight;
            stickyMenu.style.height = (activeHeight + 40) + "px";
        })
    })

    // Sticky-Menu On Scroll Event
    var myScrollFunc = function() {
        if(!stickyMenu.classList.contains('active')){
            var y = window.scrollY;
            if(y > 100) {
                menuBlock.classList.remove('inactive')
            } else {
                menuBlock.classList.add('inactive')
            }
        }
    };

    window.addEventListener("scroll", myScrollFunc);
})();


// jQuery
/*
$(document).ready(function(){
    const menuBlock = $('.sticky-menu--nav');
    const menuBtn = $('.sticky-menu--nav button');
    const stickyMenu = $('.sticky-menu');
    const slideMenu = $('.slide-menu');
    const slideMenuItem = $('.slide-menu-item');


    $(window).scroll(function (){
        if(!stickyMenu.hasClass('active')){
            const scrollPos = $(window).scrollTop();
            if(scrollPos > 100) {
                menuBlock.removeClass('inactive')
            } else {
                menuBlock.addClass('inactive')
            }
        }
    })


    menuBtn.click(function (e) {
        e.preventDefault();
        stickyMenu.toggleClass('active')
        if(stickyMenu.hasClass('active')){
            $(this).html('<ion-icon class="close" name="close-outline"></ion-icon>')
        } else {
            $(this).text('Menu')
        }
    })

    const subMenuButton = $('.slide-menu--item button span');
    const slideMenuBack = $('.slide-menu-item .back');
    subMenuButton.click(function (){
        slideMenu.addClass('is-open')
        $(this).parent().siblings('.slide-menu-item').addClass('active')
        let activeHeight = $(this).parent().siblings('ul').height();
        $('.sticky-menu').css("height", (activeHeight + 40) + "px")
    })
    slideMenuBack.click(function (){
        slideMenu.removeClass('is-open')
        slideMenuItem.removeClass('active')
        let activeHeight = slideMenu.height();
        $('.sticky-menu').css("height", (activeHeight + 40) + "px")
    })
})
*/