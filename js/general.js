(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-63978013-2', 'auto');
  ga('send', 'pageview');

$(document).ready(function() {
  if (window.orientation == 0) {
    $('body').hide();
    $('html').append("<div id='rotate'><img style='margin:auto;width:90%' src='media/img/mobile_rotate_icon.png'></img><div style='padding-top:50px'>Please rotate your device.</div></div>");
    $('html').css('background-color','black');
    $('#rotate').css('color','white');
    $('#rotate').css('margin','auto');
    $('#rotate').css('width','60%');
    $('#rotate').css('font-size',"50px");
    $('#rotate').css('padding-top',"200px");
    window.addEventListener("orientationchange",function() {
      if (window.orientation != 0) { 
        $('body').show();
        $('#rotate').hide();
      }
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
