var main = function(){
  $('p').click(function(){
   $(this).hide('drop', {direction: 'down'}, 2400); 
  })
};

$(document).ready(main);
