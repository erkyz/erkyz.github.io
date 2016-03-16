$('#linkedin').click(function() {
  window.open("https://www.linkedin.com/profile/view?id=372310152");
});
$('#github').click(function() {
  window.open("https://github.com/erkyz");
});
$('#instagram').click(function() {
  window.open("https://instagram.com/zhuniversal/");
});

$("#thread").hover(
  function() {
    $("#name").html("Je m'appelle &Eacute;ric");
  }, function() {
    $("#name").text("I'm Eric");
  }
);
$("#more").hover(
  function() {
    $("#name").html("&#25105;&#21483; Eric");
  }, function() {
    $("#name").text("I'm Eric");
  }
);

$(document).ready(function() {
  if (navigator.userAgent.match(/iphone|android|blackberry/ig) || false) $('.more').hide();
});
