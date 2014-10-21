var main = function(){
  
  var currentPage = $('.current');
  
  $('p').click(function(){
   $(this).hide('drop', {direction: 'down'}, 1300); 
   $('h1').delay(1400).hide('drop', {direction: 'down'}, 1700);
   $('#news').delay(2000).fadeIn(1900);
   $('#news-title').delay(2000).fadeIn(1900);
   $('#menu-icon').delay(2000).fadeIn(1900);
  });
  
  $('#news').hide();
  $('#news-title').hide();
  $('#menu-icon').hide();
    
  $('#menu-icon').click(function(){
    if ($('#menu-icon').hasClass('active')){
      $('#menu-icon').delay(200).animate({left: "3.9%"}, 600);
      $('.menu').animate({left: "-285px"}, 600);
      $('#menu-icon').removeClass('active');
    }
    
        
    else {
      $('#menu-icon').animate({left: "285px"}, 600);
      $('.menu').animate({left: "0px"}, 1300);
      $('#menu-icon').addClass('active');
    }
  });
  
  $('.menu ul li:nth-child(2)').click(function(){
    $('currentPage').animate({ direction: 'left' }, 2000, 'easeOutSine');
    $('.profile').animate({ direction: 'left' }, 2000, 'easeInSine');
    
    $('currentPage').removeClass('current');
    $('.profile').addClass('current');
  });
  
  $('.menu ul li:nth-child(1)').click(function(){
    $('currentPage').animate({ direction: 'left' }, 2000, 'easeOutSine');
    $('.home').animate({ direction: 'left' }, 2000, 'easeInSine');
    
    $('currentPage').removeClass('current');
    $('.home').addClass('current');
  });
  
};



$(document).ready(main);
