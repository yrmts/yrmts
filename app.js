var main = function(){
  $('p').click(function(){
   $(this).hide('drop', {direction: 'down'}, 1400); 
   $('h1').delay(1400).hide('drop', {direction: 'down'}, 1700);
  })
  
  $('#news').hide();
};

$(document).ready(main);
