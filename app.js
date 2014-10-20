var main = function(){
  $('p').hover(function(){
   $(this).effect("highlight", {color: #fff}, 100); 
  })
};

$(document).ready(main);
