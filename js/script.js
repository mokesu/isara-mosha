$(function(){
  $('.questionlist dt').click(function(){
     $(this).next().slideToggle();
     return false;
  });

  $('.flowlist dt').click(function(){
    $(this).next('.flowlist dd').slideToggle();
    $('.flowlist dt').not($(this)).next('.flowlist dd').slideUp();
    return false;
  });

  var topBtn=$('#pageTop');
topBtn.hide();

$(window).scroll(function(){
  if($(this).scrollTop()>80){
    topBtn.fadeIn();

  }else{
    topBtn.fadeOut();

  }
});

topBtn.click(function(){
  $('body,html').animate({
  scrollTop: 0},500);
  return false;

});

});
