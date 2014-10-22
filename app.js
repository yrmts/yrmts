var main = function(){
  
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
  $('#profile-title').hide();
  $('.description').hide();
  $('#profile-img').hide();
    
    
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
  
  $('ul li:nth-child(1)').click(function(){
    var currentPage = $('.visible');
    var Home = $('.home');
    
    if (currentPage.hasClass('home') == false){
      currentPage.fadeOut(1800).removeClass('visible');
      Home.fadeIn(1800).addClass('visible')
    }
  });
  
  $('ul li:nth-child(2)').click(function(){
    var currentPage = $('.visible');
    var Profile = $('.profile');
    
    if (currentPage.hasClass('profile') == false){
      currentPage.fadeOut(1800).removeClass('visible')
      Profile.fadeIn(1800).addClass('visible')
    }
    
    $('.description').delay(800).show('drop', {direction: 'down'}, 1000);
    $('#profile-title').delay(1600).show('drop', {direction: 'down'}, 800);
    
  });
  
  
   
  
};



$(document).ready(main);
