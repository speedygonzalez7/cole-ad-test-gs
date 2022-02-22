// import AOS from 'aos';
// AOS.init();

$(function() {
    $(".menu--open").click(function() {
        $(".nav-menu").toggleClass("nav-menu--toggle");
        $('body').addClass("overflow-hidden");
    });
});
$(function() {
    $(".close-btn").click(function() {
        $(".nav-menu").toggleClass("nav-menu--toggle");
        $('body').removeClass("overflow-hidden");
    });
});

$(function(){
   $(".nav-menu__copy ul li a").each(function(){
      
     if ($(this).attr("href").indexOf(window.location.pathname) != -1)   {
          $(this).addClass("active-link");
       }
   });
});