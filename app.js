var main = function(){
  $('p').click(function(){
   $(this).hide('drop', {direction: 'down'}, 600); 
  })
};

$(document).ready(main);
