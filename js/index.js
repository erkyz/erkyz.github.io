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
    $('#navbar').css('background-image','url(https://lh3.googleusercontent.com/EikC8jD0tR05n_7aEyXaKvZtY2nLYRlY9Lm0u4y9umyjsLYKXNCd2bQxEBcN77VgBFMp5xkJmi3v68Lg4s_w5sjcOylyFgnxWlXQknh3uwFIHBo5HXpALRsoYdPp7G-Boo-vs3NJHPooTolauIoLdVedDnJgjHT7jl17QHJ2vtgsy8zgYwz_Zmw2cNyd54LKI7BJSC71jnH3jnrtp5Xv27DExIReQZvDtf0cClUHzeqlct2vj6D87WJnm3X9j2Rcu5Q5RME9WSlcJZgUK2Jge1mh45S_wakrLVcANHJ0HLp-tbnGIc__GAfJ1VXE6p4EYqYQv0hIQz-KSqBZgkElif6q3iGTc-mdkwr-h-komdQHzd1_WjxLT3Gk8TM7cdtbVwcV5zQbeDqBuVsn46BLPdRQEBeGxtaFHnDP1RDDVQO1HdfnznXu83O9TNSJBammGvs23QgxnwBRYs4AKiV98s3dWquqrlW1yuU69wsuYSx31vqFMwaArqPQulll9cslLVrwxGtnnajeRW_lZbTY2vtyx8LYEdGXShH8H106mCpxgwxLlUJeZX-Uq1zu_sRFrEnQKg=w1440-h477-no)');
    $('#navbar').css('background-position','0% 38%');
    $('.quote').html("But the law of loving others could not be discovered by reason, because it is unreasonable.");
    $('.quote').append('<cite>Leo Tolstoy, Anna Karenina</cite>');
  }, original
);

$('#thread').hover(
  function() {
    $('#navbar').css('background-position','0% 50%');
    $('#navbar').css('background-image','url(https://lh3.googleusercontent.com/2OeebGW00xvuqnqoIHdRDnomiHYNqTgGDXEzRtnoPfAz=w992-h211-no)');
    $('.quote').html("That's really what history mostly is: masses of people doing ordinary things.");
    $('.quote').append('<cite>Bill Bryson, At Home: A Short History of Private Life</cite>');
  }, original
);

$('#more').hover(
  function() {
    $('#navbar').css('background-position','0% 39%');
    $('#navbar').css('background-image','url(https://lh3.googleusercontent.com/1y8h0znekSh1BZJkTaLs6qRu3i0TZvIrf9tDEN6zv8NZ=w1383-h778-no)');
    $('.quote').html("Hatred is the demonstration of a closed mind.");
    $('.quote').append('<cite>Eric Zhu</cite>');
  }, original
);

$(document).ready(function() {
  if (navigator.userAgent.match(/iphone|android|blackberry/ig) || false) $('.more').hide();
});

original();

