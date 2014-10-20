var main = function(){
  $('p').click(function(){
   $(this).hide('drop', {direction: 'down'}, 2000); 
  })
};

$(document).ready(main);
