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

    //Ancla en dispositivos móviles
    $('.AAE-ancle-up').click(function(e){				
		e.preventDefault();		//evitar el eventos del enlace normal
		var strAncla=$(this).attr('href'); //id del ancla
			$('body,html').stop(true,true).animate({				
				scrollTop: $(strAncla).offset().top
			},1000);
    });

    //Animaciones de la sección de habilidades, responsive
    var size = screen.width
    if (size >= '767') {
        window.addEventListener("scroll", function(){
            if (this.scrollY >= 1200){
                $(".AAE-responsiveImg-pc").fadeIn(700);
                $(".AAE-responsiveImg-tablet").delay(500).fadeIn(700);
                $(".AAE-responsiveImg-cel").delay(1000).fadeIn(700);
                $(".AAE-ocult-text").delay(700).fadeIn(1500)
            }else{
                $(".AAE-responsiveImg-pc").hide();
                $(".AAE-responsiveImg-tablet").hide();
                $(".AAE-responsiveImg-cel").hide();;
                $(".AAE-ocult-text").hide();
            }
        }, false);
    }
    //A escala de dispositivos móviles
    if (size < '767') {
        window.addEventListener("scroll", function(){
            if (this.scrollY >= 2300){
                $(".AAE-responsiveImg-pc").fadeIn(700);
                $(".AAE-responsiveImg-tablet").delay(500).fadeIn(700);
                $(".AAE-responsiveImg-cel").delay(1000).fadeIn(700);
                $(".AAE-ocult-text").delay(700).fadeIn(1500)
            }else{
                $(".AAE-responsiveImg-pc").hide();
                $(".AAE-responsiveImg-tablet").hide();
                $(".AAE-responsiveImg-cel").hide();;
                $(".AAE-ocult-text").hide();
            }
        }, false);
    }
});

