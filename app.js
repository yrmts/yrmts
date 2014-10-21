var main = function(){
  $('p').click(function(){
   $(this).hide('drop', {direction: 'down'}, 1300); 
   $('h1').delay(1400).hide('drop', {direction: 'down'}, 1700);
   $('#news').delay(2000).fadeIn(1900);
   $('#news-title').delay(2000).fadeIn(1900);
   $('#menu-icon').delay(2000).fadeIn(1900);
  })
  
  $('#news').hide();
  $('#news-title').hide();
  $('#menu-icon').hide();
  $('.menu').hide();
  
  $('#menu-icon').click(function(){
    $('.menu').fadeIn(600)
  });
  
};



$(document).ready(main);
