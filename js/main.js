//Menu animate
$(document).ready(function(){
    window.addEventListener("scroll", function(){
        if (this.scrollY >= 50){
            $(".AAE-header-nav").addClass("AAE-header-nav-add");
            $(".AAE-logo-menu img").addClass("AAE-header-logo-add");
        }else{
            $(".AAE-header-nav").removeClass("AAE-header-nav-add");
            $(".AAE-logo-menu img").removeClass("AAE-header-logo-add");
        }
    }, false);
    //Galeria inicio
    $('.img-gallery').magnificPopup({
        type: 'image',
        closeBtnInside: false,
        closeOnContentClick: false,
    
    callbacks: {
      open: function() {
        var self = this;
        self.wrap.on('click.pinhandler', 'img', function() {
          self.wrap.toggleClass('mfp-force-scrollbars');
        });
      },
      beforeClose: function() {
            this.wrap.off('click.pinhandler');
        this.wrap.removeClass('mfp-force-scrollbars');
      }
    },
     
    image: {
            verticalFit: false
        }
    });
    //Final galeria
});
