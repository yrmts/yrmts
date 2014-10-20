var main = function(){
  $('p').click(function(){
   $(this).hide('drop', {direction: 'down'}, 1400); 
   $('h1').delay(1500).hide('drop', {direction: 'down'}, 1800);
  })
};

$(document).ready(main);
