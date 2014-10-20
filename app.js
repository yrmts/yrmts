var main = function(){
  $('p').click(function(){
   $(this).hide('drop', {direction: 'down'}, 1200); 
  })
};

$(document).ready(main);
