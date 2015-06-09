function original() {
  $('body').css('background-image','none');
  $('#navbar').css('background-image','url("https://scontent-iad3-1.xx.fbcdn.net/hphotos-xat1/v/l/t1.0-9/11391253_1018770854807621_8363171317753702255_n.jpg?oh=6ddca43e0b184c5065fb3dc90970ab6b&oe=55E8AF23")');
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
    $('body').css('background-image','url(https://lh3.googleusercontent.com/idbRMqm0h21DX_EDSxyL8rYMV3CHDo8reRmmN61WSREB=w1152-h360-no)');
    $('#navbar').css('background-image','none');
    $('#navbar').css('background-color','white');
    $('#navbar').css('opacity','0.5');
    $('#navbar').text("You're already here.");
    $('.quote').html("La vita non &egrave; n&eacute; brutta n&eacute; bella, ma &egrave; originale!");
    $('.quote').append('<cite>Italio Svevo, La coscienza di Zeno</cite>');
    $('head').append('<link rel="stylesheet" href="css/whitequote.css" type="text/css" />');
  }, original
);

$('#about').hover(
  function() {
    $('body').css('background-image','url(img/DSC_0097_5.jpg)');
    $('#navbar').css('background-image','none');
    $('#navbar').css('background-color','white');
    $('#navbar').css('opacity','0.5');
    $('#navbar').text("Find out more.");
    $('#title').text("");
    $('li').css('background-color','rgba(234,234,234,0.5)');
    $('.quote').html("But the law of loving others could not be discovered by reason, because it is unreasonable.");
    $('.quote').append('<cite>Leo Tolstoy, Anna Karenina</cite>');
    $('head').append('<link rel="stylesheet" href="css/whitequote.css" type="text/css" />');
  }, original
);

$('#thread').hover(
  function() {
    $('body').css('background-image','url(https://lh3.googleusercontent.com/iZJUzv-QSdPPlEakyic_stwOE5GzEp_ecBnc-BRd38M7=w1106-h622-no)');
    $('#navbar').css('background-image','none');
    $('#navbar').css('background-color','red');
    $('#navbar').css('opacity','0.5');
    $('#title').text("");
    $('#navbar').text("See what I've been up to.");
    $('#navbar').css('color','white');
    $('.quote').html("Sometimes I can feel my bones straining under the weight of all the lives I'm not living.");
    $('.quote').append('<cite>Jonathan Safran Foer, Extremely Loud and Incredibly Close</cite>');
    $('.quote').css('background-color','rgba(0,0,0,0.3)');
    $('head').append('<link rel="stylesheet" href="css/whitequote.css" type="text/css" />');
  }, original
);

$('#contact').hover(
  function() {
    $('body').css('background-image','url(https://lh3.googleusercontent.com/7PthQl5NDvqgAbfXjn1bofFQiUu4Nj_kxKeJlxvsx7A=w1106-h622-no)');
    $('#navbar').css('background-image','none');
    $('#navbar').css('background-color','white');
    $('#navbar').css('opacity','0.5');
    $('#navbar').text("Get in touch!");
    $('#title').text("");
    $('.quote').html("Death really did not matter to him but life did, and therefore the sensation he felt when they gave their decision was not a feeling of fear but of nostalgia.");
    $('.quote').css('font-size','14px');
    $('.quote').append('<cite> Gabriel Garc&iacute;a M&aacute;rquez, One Hundred Years of Solitude</cite>');
    $('head').append('<link rel="stylesheet" href="css/whitequote.css" type="text/css" />');
  }, original
);

original();
