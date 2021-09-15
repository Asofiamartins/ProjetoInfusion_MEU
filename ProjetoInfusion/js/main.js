(function(){
    var $body = document.querySelector('body');
    $body.classList.remove('no-js')
    $body.classList.add('js')

  



    var menu = new Menu({
        container:'.header-nav',
        toggleBtn:'.header-btnMenu',
        widthEnabled:1024
    });



    //para por o carrossel a funcionar
    var carouselImgs = new Carousel({
        container:'.laptop-slider .slideshow',
        itens : 'figure',
        btnPrev:'.prev',
        btnNext:'.next'
    })


var carouselQuotes = new Carousel({
        container:'.quote-container .quote-slideshow',
        itens : 'figure',
        btnPrev:'.prev',
        btnNext:'.next'
    })




})()