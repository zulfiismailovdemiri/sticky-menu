import $ from 'jquery';
import './style.scss'


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