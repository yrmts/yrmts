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
  
  $('#menu-icon').click(function(){
    $('#menu-icon').animate(toggle, {
      left: "285px"
    }, 500)
    
    $('.menu').animate(toggle, {
      left: "0px"
      }, 1300);
  });
  
};



$(document).ready(main);
