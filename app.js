var main = function(){
  $('p').click(function(){
   $(this).hide('drop', {direction: 'down'}, 1800); 
  })
};

$(document).ready(main);
