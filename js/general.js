(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-63978013-2', 'auto');
  ga('send', 'pageview');

$(document).ready(function() {
  if (window.orientation == 0) {
    alert("Please rotate your device to landscape mode.");
    $('body').hide();
    $('html').append("<img id='rotate' src='media/img/mobile_rotate_icon.png'></img>");
    $('html').css('background-color','black');
    $('html').text('Please rotate your device to landscape mode. Make sure auto-portrait mode is turned off.');
    $('#rotate').css('margin','auto');
    $('#rotate').css('width','60%');
    window.addEventListener("orientationchange",function() {
      if (window.orientation != 0) $('body').show();
    });
  }
  window.addEventListener("orientationchange",function() {
    if (window.orientation == 0) {
      $('body').hide();
      window.addEventListener("orientationchange",function() {
        if (window.orientation != 0) $('body').show();
      });
    }
  });
});
