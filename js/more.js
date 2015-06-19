$(document).ready(function() {
  $('.snippet').smoothDivScroll({});

  var myCirclePlayer = new CirclePlayer("#jplayer",
  {
    m4a: "media/audio/hannah-snippet.m4a"
  }, {
    cssSelectorAncestor: "#container1"
  });
  var myCirclePlayer2 = new CirclePlayer("#jplayer2",
  {
    m4a: "media/audio/emperor-snippet.m4a"
  }, {
    cssSelectorAncestor: "#container2"
  });
  var myCirclePlayer3 = new CirclePlayer("#jplayer3",
  {
    m4a: "media/audio/prokofiev-snippet.m4a"
  }, {
    cssSelectorAncestor: "#container3"
  });
  var myCirclePlayer4 = new CirclePlayer("#jplayer4",
  {
    m4a: "media/audio/mountain-sound-snippet.m4a"
  }, {
    cssSelectorAncestor: "#container4"
  });
});
