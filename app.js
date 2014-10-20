var main = function(){
  $('p').click(function(){
   $(this).hide('drop', {direction: 'down'}, 2200); 
  })
};

$(document).ready(main);
