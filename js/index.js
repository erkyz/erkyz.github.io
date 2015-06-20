function original() {
  $('body').css('background-image','none');
  $('#navbar').css('background-image','url("https://scontent-iad3-1.xx.fbcdn.net/hphotos-xat1/v/l/t1.0-9/11391253_1018770854807621_8363171317753702255_n.jpg?oh=6ddca43e0b184c5065fb3dc90970ab6b&oe=55E8AF23")');
  $('#navbar').css('background-position','initial');
  $('#navbar').css('opacity','0.8');
  $('#navbar').text("");
  $('#navbar').css('color','black');
  $('#title').css('color','black');
  $('#title').html('Welcome to the<br> official<div id="caveat">*</div> website of<br><b>Eric Zhu.</b>');
  $('.quote').text("Life is neither beautiful nor ugly, but it's original!");
  $('.quote').append('<cite>Italio Svevo, Zeno\'s Conscience</cite>');
  $('.quote').css('font-size','18px');
  $('.quote').css('background-color','rgba(0,0,0,0)');
  $('li').css('background-color','rgba(0,0,0,0)');
  $('link[rel=stylesheet][href~="css/whitequote.css"]').remove();
  $('#caveat').hover(
    function() {
      $('#caveatbar').text('*Not to be confused with the imposters at ericzhu.com ');
    },
    function() {
      $('#caveatbar').text('');
    }
  );
}

$('#home').hover(
  function() {
    $('#navbar').css('background-position','0% 60%');
    $('#navbar').css('background-image','url(https://lh3.googleusercontent.com/idbRMqm0h21DX_EDSxyL8rYMV3CHDo8reRmmN61WSREB=w1152-h360-no)');
    $('.quote').html("La vita non &egrave; n&eacute; brutta n&eacute; bella, ma &egrave; originale!");
    $('.quote').append('<cite>Italio Svevo, La coscienza di Zeno</cite>');
  }, original
);

$('#about').hover(
  function() {
    $('#navbar').css('background-image','url(media/img/DSC_0097_5.png)');
    $('#navbar').css('background-position','0% 43%');
    $('.quote').html("But the law of loving others could not be discovered by reason, because it is unreasonable.");
    $('.quote').append('<cite>Leo Tolstoy, Anna Karenina</cite>');
  }, original
);

$('#thread').hover(
  function() {
    $('#navbar').css('background-position','0% 60%');
    $('#navbar').css('background-image','url(https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e15/11248731_1583760518552378_1445514832_n.jpg)');
    $('.quote').html("That's really what history mostly is: masses of people doing ordinary things.");
    $('.quote').append('<cite>Bill Bryson, At Home: A Short History of Private Life</cite>');
  }, original
);

$('#more').hover(
  function() {
    $('#navbar').css('background-position','0% 30%');
    $('#navbar').css('background-image','url(https://lh3.googleusercontent.com/7a92QXKrS7JuA7IYXfE25fOmVyyz8ejN0UDMLdbYSa0s=w1440-h487-no)');
    $('.quote').html("Hatred is the demonstration of a closed mind.");
    $('.quote').append('<cite>Me</cite>');
  }, original
);

original();

$(document).ready(function() {
  if (window.orientation == 0) {
    alert("This website is designed to be viewed in landscape mode. Please change your device's orientation to view content, and view on a desktop for the best experience. (A full mobile site is in the works!)");
    $('body').hide();
    window.addEventListener("orientationchange",function() {
      if (window.orientation != 0) $('body').show();
    });
  }
  window.addEventListener("orientationchange",function() {
    if (window.orientation == 0) {
      alert("This website is designed to be viewed in landscape mode. Please change your device's orientation to view content.");
      $('body').hide();
      window.addEventListener("orientationchange",function() {
        if (window.orientation != 0) $('body').show();
      });
    }
  });


  if (navigator.userAgent.match(/iphone|android|blackberry/ig) || false) $('#more').hide();
});
