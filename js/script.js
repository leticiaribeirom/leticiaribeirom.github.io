
// niceScroll
$("html").niceScroll();

// Deixando menu em posicao fixa
$(".menu").sticky({topSpacing:0});

// Usando masonry para elementos do grid de portfolio
$(function(){
  var $container = $('.grid');
  $container.imagesLoaded( function(){
    $container.masonry({
      itemSelector : 'li'
    });
  });
});

// Ao clicar em item do menu redireciona para a section onde ele se encontra
// muda o item do menu ativo enquanto o usuario dá scroll na pagina
var lastId,
topMenu = $("#menu"),
topMenuHeight = topMenu.outerHeight()+15,
menuItems = topMenu.find("a"),
scrollItems = menuItems.map(function(){
  var item = $($(this).attr("href"));
  if (item.length) {
    return item;
  }
});

$('a[href*=#]').bind('click', function(e) {
  e.preventDefault();
  var target = $(this).attr("href");
  $('html, body').stop().animate({
    scrollTop: $(target).offset().top-140 }, 1000, function() {
  });
  return false;
});

$(window).scroll(function(){
  var fromTop = $(this).scrollTop()+topMenuHeight;
  var cur = scrollItems.map(function(){
   if ($(this).offset().top < fromTop)
     return this;
  });

  cur = cur[cur.length-1];
  var id = cur && cur.length ? cur[0].id : "";

  if (lastId !== id) {
     lastId = id;
     menuItems
       .parent().removeClass("active")
       .end().filter("[href=#"+id+"]").parent().addClass("active");
  }
});

// Elementos FadeTo
if ( $(window).width() > 1023) {
  tiles = $("h2, h3, .contact-icons, #first-column, #second-column, #last-column, .grid li").fadeTo(0, 0);
  $(window).scroll(function(d,h) {
    tiles.each(function(i) {
        a = $(this).offset().top + $(this).height();
        b = $(window).scrollTop() + $(window).height();
        if (a < b)
          $(this).fadeTo(1000,1);
    });
  });
}

//Abrindo o menu mobile clicando no icone de menu
$( "#nav-icon" ).click(function() {
  $(this).toggleClass('open');
  $("ul.menu-click").slideToggle( "slow", function() {
  });
});

$(window).load(function(){

  $(".preloader").delay(1000).fadeOut("slow")

  // Parallax
  if ($('.parallax-background').length) {
    $(".parallax-background").parallax();
  }
});
