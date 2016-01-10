// TODO: MOBILE, one big vertical scroll (completely different from the rest of the site's design philosophy)

function original() {
  $('body').css('background-image','none');
  $('#navbar').css('background-image','url(media/img/first.jpg)');
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
    $('.quote').html("I wanted to live deep and suck out all the marrow of life.");
    $('.quote').append('<cite>Henry David Thoreau, Walden</cite>');
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
    $('#navbar').css('background-position','0% 40%');
    $('#navbar').css('background-image','url(https://lh3.googleusercontent.com/1y8h0znekSh1BZJkTaLs6qRu3i0TZvIrf9tDEN6zv8NZ=w1383-h778-no)');
    $('.quote').html("That's really what history mostly is: masses of people doing ordinary things.");
    $('.quote').append('<cite>Bill Bryson, At Home: A Short History of Private Life</cite>');
  }, original
);

$('#more').hover(
  function() {
    $('#navbar').css('background-position','0% 50%');
    $('#navbar').css('background-image','url(https://lh3.googleusercontent.com/2OeebGW00xvuqnqoIHdRDnomiHYNqTgGDXEzRtnoPfAz=w992-h211-no)');
    $('.quote').html("Hatred is the demonstration of a closed mind.");
    $('.quote').append('<cite>Eric Zhu</cite>');
  }, original
);

original();

