var main = function(){
  
  $('p').click(function(){
   $(this).hide('drop', {direction: 'down'}, 1200); 
   $('h1').delay(1200).hide('drop', {direction: 'down'}, 1600);
   $('#news').delay(1900).fadeIn(1600);
   $('#news-title').delay(1900).fadeIn(1600);
   $('#menu-icon').delay(1900).fadeIn(1600);
  });
  
  $('#news').hide();
  $('#news-title').hide();
  $('#menu-icon').hide();
    
    
  $('#menu-icon').click(function(){
    if ($('#menu-icon').hasClass('active')){
      $('#menu-icon').delay(200).animate({left: "3.9%"}, 500);
      $('.menu').animate({left: "-285px"}, 500);
      $('#menu-icon').removeClass('active');
    }
    
        
    else {
      $('#menu-icon').animate({left: "285px"}, 500);
      $('.menu').animate({left: "0px"}, 1200);
      $('#menu-icon').addClass('active');
    }
  });
  
  $('ul li:nth-child(1)').click(function(){
    $('#news').hide();
    $('#news-title').hide();
    
    var currentPage = $('.visible');
    var Home = $('.home');
    
    if (currentPage.hasClass('home') == false){
      currentPage.fadeOut(800).removeClass('visible');
      Home.fadeIn(700).addClass('visible')
    }
    
    $('#news').delay(300).show('drop', {direction: 'down'}, 1200);
    $('#news-title').delay(800).show('drop', {direction: 'down'}, 800);
  });
  
  $('ul li:nth-child(2)').click(function(){
    $('#profile-title').hide();
    $('.description').hide();
    $('#profile-img').hide();
        
    var currentPage = $('.visible');
    var Profile = $('.profile');
    
    if (currentPage.hasClass('profile') == false){
      currentPage.fadeOut(800).removeClass('visible')
      Profile.fadeIn(700).addClass('visible')
    }
    
    $('.description').delay(300).show('drop', {direction: 'down'}, 1200);
    $('#profile-title').delay(800).show('drop', {direction: 'down'}, 800);
    $('#profile-img').delay(300).show('drop', {direction: 'down'}, 1200);
  });
  
  $('ul li:nth-child(3)').click(function(){
    
    $('.notes-post').hide();

    var currentPage = $('.visible');
    var Notes = $('.notes');
    
    if (currentPage.hasClass('.notes') == false){
      currentPage.fadeOut(800).removeClass('visible')
      Notes.fadeIn(700).addClass('visible')
    }
    
    $('.notes-post').delay(300).show('drop', {direction: 'down'}, 800);
  });
    
  $('ul li:nth-child(4)').click(function(){
    
    $('#contact-sns').hide();
    $('#contact-email').hide();

    var currentPage = $('.visible');
    var Contact = $('.contact');
    
    if (currentPage.hasClass('.notes') == false){
      currentPage.fadeOut(800).removeClass('visible')
      Contact.fadeIn(700).addClass('visible')
    }
    
     $('#contact-sns').delay(300).show('drop', {direction: 'down'}, 800);
     $('#contact-email').delay(500).show('drop', {direction: 'down'}, 800);
  });
  
};



$(document).ready(main);
