$(document).ready(function () {
  var size = screen.width
  if (size >= '1024') { //SOLO FUNCIONARÁ EL FULL PAGE EN DISPOSITIVOS GRANDES, COMPUTADORAS
    $('#AAE-fullpage').fullpage({
      anchors: ['Inicio', 'Sobre_mi', 'Información', 'Servicios', 'Proyectos'],//Nombres de las secciones en la url
      navigation: true, //Show barra navegación
      navigationPosition: 'right',//Posición barra de navegación
      navigationTooltips: ['Inicio', 'Sobre mi', 'Información', 'Servicios', 'Proyectos'],//Nombres barra de navegación
      scrollBar: true,//Mostrar scroll bar
      scrollingSpeed: 1200,

      //Movimiento de la imagen de fondo al hacer scroll
      afterRender: function (index, nextIndex, direction) {
        var movimiento_scroll_img = $('.AAE-background-parallax');
        movimiento_scroll_img.paroller({
          factor: 0.5,
          type: 'background',
          direction: 'vertical',
        });
      },
      // Reforzar 
      afterResize: function() {
        var movimiento_scroll_img = $('.AAE-background-parallax');
        movimiento_scroll_img.paroller({
          factor: 0.5,
          type: 'background',
          direction: 'vertical'
        });
      }
    });
  }
});
//Para conectar el menú nav hay que agregarle a los <a> en el href la id de la sección ej: <a href="#Inicio"
//Las ids están nombradas en este archivo en Tooltips




  