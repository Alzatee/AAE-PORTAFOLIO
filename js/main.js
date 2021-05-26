$(document).ready(function(){
    /* --- BLOOB ANIMATION INICIO --- */
    const TWO_PI = Math.PI * 2;
    const HALF_PI = Math.PI / 2;
    const canvas = document.createElement("canvas");
    const c = canvas.getContext("2d");
    
    canvas.width = window.innerWidth;
    canvas.height = 1000;
    document.body.appendChild(canvas);
    
    class Blob {
      constructor() {
        this.wobbleIncrement = 0;
        // use this to change the size of the blob
        this.radius = 1450;
        // think of this as detail level
        // number of conections in the `bezierSkin`
        this.segments = 30;
        this.step = HALF_PI / this.segments;
        this.anchors = [];
        this.radii = [];
        this.thetaOff = [];
    
        const bumpRadius = 100;
        const halfBumpRadius = bumpRadius / 2;
    
        for (let i = 0; i < this.segments + 2; i++) {
          this.anchors.push(0, 0);
          this.radii.push(Math.random() * bumpRadius - halfBumpRadius);
          this.thetaOff.push(Math.random() * 2 * Math.PI);
        }
    
        this.theta = 0;
        this.thetaRamp = 0;
        this.thetaRampDest = 12;
        this.rampDamp = 25;
      }

      update() {
        this.thetaRamp += (this.thetaRampDest - this.thetaRamp) / this.rampDamp;
        this.theta += 0.03;
    
        this.anchors = [0, this.radius];
        for (let i = 0; i <= this.segments + 2; i++) {
          const sine = Math.sin(this.thetaOff[i] + this.theta + this.thetaRamp);
          const rad = this.radius + this.radii[i] * sine;
          const x = rad * Math.sin(this.step * i);
          const y = rad * Math.cos(this.step * i);
          this.anchors.push(x, y);
        }
    
        c.save();
        c.translate(-10, -10);
        c.scale(0.5, 0.5);
        c.fillStyle = "#2c2f33";
        c.beginPath();
        c.moveTo(0, 0);
        bezierSkin(this.anchors, false);
    
        c.lineTo(0, 0);
        c.fill();
        c.restore();
      }
    }
    
    const blob = new Blob();
    
    function loop() {
      c.clearRect(0, 0, canvas.width, canvas.height);
      blob.update();
      window.requestAnimationFrame(loop);
    }
    loop();
    
    // array of xy coords, closed boolean
    function bezierSkin(bez, closed = true) {
      const avg = calcAvgs(bez);
      const leng = bez.length;
    
      if (closed) {
        c.moveTo(avg[0], avg[1]);
        for (let i = 2; i < leng; i += 2) {
          let n = i + 1;
          c.quadraticCurveTo(bez[i], bez[n], avg[i], avg[n]);
        }
        c.quadraticCurveTo(bez[0], bez[1], avg[0], avg[1]);
      } else {
        c.moveTo(bez[0], bez[1]);
        c.lineTo(avg[0], avg[1]);
        for (let i = 2; i < leng - 2; i += 2) {
          let n = i + 1;
          c.quadraticCurveTo(bez[i], bez[n], avg[i], avg[n]);
        }
        c.lineTo(bez[leng - 2], bez[leng - 1]);
      }
    }
    
    // create anchor points by averaging the control points
    function calcAvgs(p) {
      const avg = [];
      const leng = p.length;
      let prev;
    
      for (let i = 2; i < leng; i++) {
        prev = i - 2;
        avg.push((p[prev] + p[i]) / 2);
      }
      // close
      avg.push((p[0] + p[leng - 2]) / 2, (p[1] + p[leng - 1]) / 2);
      return avg;
    }
    /* --- BLOOB ANIMATION FIN --- */

    /* --- ANIMATION NAVBAR INICIO --- */
    window.addEventListener("scroll", function(){
        if (this.scrollY >= 50){
            $(".AAE-header-nav").addClass("AAE-header-nav-add");
            $(".AAE-logo-menu img").addClass("AAE-header-logo-add");
        }else{
            $(".AAE-header-nav").removeClass("AAE-header-nav-add");
            $(".AAE-logo-menu img").removeClass("AAE-header-logo-add");
        }
    }, false);
    /* --- ANIMATION NAVBAR FIN --- */

    /* --- GALERÍA DE PROYECTOS INICIO --- */
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
    /* --- GALERÍA DE PROYECTOS FIN --- */

    //Ancla en dispositivos móviles
    $('.AAE-ancle-up').click(function(anclaMovile){				
		anclaMovile.preventDefault();		//evitar el eventos del enlace normal
		var strAncla=$(this).attr('href'); //id del ancla
			$('body,html').stop(true,true).animate({				
				scrollTop: $(strAncla).offset().top
			},1000);
    });

    //Animaciones de la sección de habilidades, responsive
    var size = screen.width
    if (size >= '767') { 
        window.addEventListener("scroll", function(){
            if (this.scrollY >= 900){
                $(".AAE-responsiveImg-pc").fadeIn(700);
                $(".AAE-responsiveImg-tablet").delay(500).fadeIn(700);
                $(".AAE-responsiveImg-cel").delay(1000).fadeIn(700);
                $(".AAE-ocult-text").delay(700).fadeIn(1500)
            }else{
                $(".AAE-responsiveImg-pc").hide();
                $(".AAE-responsiveImg-tablet").hide();
                $(".AAE-responsiveImg-cel").hide();
                $(".AAE-ocult-text").hide();
            }
        }, false);
    }
    //A escala de dispositivos móviles
    if (size < '767') {
        window.addEventListener("scroll", function(){
            if (this.scrollY >= 2200){
                $(".AAE-responsiveImg-pc").fadeIn(700);
                $(".AAE-responsiveImg-tablet").delay(500).fadeIn(700);
                $(".AAE-responsiveImg-cel").delay(1000).fadeIn(700);
                $(".AAE-ocult-text").delay(700).fadeIn(1500)
            }else{
                $(".AAE-responsiveImg-pc").hide();
                $(".AAE-responsiveImg-tablet").hide();
                $(".AAE-responsiveImg-cel").hide();
                $(".AAE-ocult-text").hide();
            }
        }, false);
    }
    
    //Remove carousel
    if (size < '767') {
        $(".carousel-item").removeClass("carousel-item")
    }

    //Sección de estudios Online 
    $("#AAE-estudios-online").click(function(){
        $(".AAE-info-ux").show();
        $(".AAE-info-ux").animate({
            marginLeft: "-0.1px",
        },500);
    });
    $("#AAE-volver-skulls").click(function(){
        $(".AAE-info-ux").animate({ 
            marginLeft: "650px"
        });
        $(".AAE-info-ux").delay(250).hide(0)
    });

    //Sección de experiencia de trabajo
    $("#AAE-experiencia").click(function(){
      $(".AAE-info-experience").show();
      $(".AAE-info-experience").animate({
          marginLeft: "-0.1px",
      },500);
    });
    $("#AAE-volver-skulls-two").click(function(){
        $(".AAE-info-experience").animate({ 
            marginLeft: "650px"
        });
        $(".AAE-info-experience").delay(250).hide(0)
    });   

});

