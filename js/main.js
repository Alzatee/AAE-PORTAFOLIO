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
});
