
$(window).load(function()
{
    $("body").css("overflow","auto");
    $(".loading.overlay").fadeOut(1000);
});

AOS.init({
    duration:800,
  });

  window.addEventListener("load", function () {
    const loader = document.querySelector(".loader");
    loader.className += " hidden"; 
});

$('.js-scroll-trigger').click(function() {
  $('.navbar-collapse').collapse('hide');
});
