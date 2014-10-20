var main = function(){
  $('p').hover(function(){
   $(this).effect("highlight", {color: #fff}, 600); 
  })
};

$(document).ready(main);
