(function(){
    var $body = document.querySelector('body');
    $body.classList.remove('no-js')
    $body.classList.add('js')

    var $btnMenu = document.querySelector('.header-btnMenu');
    $btnMenu.removeAttribute('style');



    var menu = new menu({
        container:'.header-nav',
        toggleBtn:'.header-btnMenu',
        widthEnabled:1024
    })




})()