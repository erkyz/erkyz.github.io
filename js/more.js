$(document).ready(function() {
  $('#snippet1').smoothDivScroll({
    hotSpotScrollingStep: 5,
    autoScrollingStep: 1,
    autoScrollingInterval: 70,
    touchScrolling: true,
    autoScrollingDirection: "right"
  });
  $('#snippet2').smoothDivScroll({
    hotSpotScrollingStep: 5,
    autoScrollingStep: 1,
    autoScrollingInterval: 30,
    touchScrolling: true,
    autoScrollingDirection: "right"
  });
  $('#snippet3').smoothDivScroll({
    hotSpotScrollingStep: 5,
    autoScrollingStep: 1,
    autoScrollingInterval: 18,
    touchScrolling: true,
    autoScrollingDirection: "right"
  });
  $('#snippet4').smoothDivScroll({
    hotSpotScrollingStep: 5,
    autoScrollingStep: 1,
    autoScrollingInterval: 5,
    touchScrolling: true,
    autoScrollingDirection: "right"
  });

  $('#play1').bind('click',function() {
    $('#snippet1').smoothDivScroll('startAutoScrolling');
  });
  $('#pause1').bind('click',function() {
    $('#snippet1').smoothDivScroll('stopAutoScrolling');
  });
  $('#play2').bind('click',function() {
    $('#snippet2').smoothDivScroll('startAutoScrolling');
  });
  $('#pause2').bind('click',function() {
    $('#snippet2').smoothDivScroll('stopAutoScrolling');
  });
  $('#play3').bind('click',function() {
    $('#snippet3').smoothDivScroll('startAutoScrolling');
  });
  $('#pause3').bind('click',function() {
    $('#snippet3').smoothDivScroll('stopAutoScrolling');
  });
  $('#play4').bind('click',function() {
    $('#snippet4').smoothDivScroll('startAutoScrolling');
  });
  $('#pause4').bind('click',function() {
    $('#snippet4').smoothDivScroll('stopAutoScrolling');
  });
  $('#jplayer1').bind($.jPlayer.event.ended,function() {
    $('#snippet1').smoothDivScroll('stopAutoScrolling');
  });
  $('#jplayer2').bind($.jPlayer.event.ended,function() {
    $('#snippet2').smoothDivScroll('stopAutoScrolling');
  });
  $('#jplayer3').bind($.jPlayer.event.ended,function() {
    $('#snippet3').smoothDivScroll('stopAutoScrolling');
  });
  $('#jplayer4').bind($.jPlayer.event.ended,function() {
    $('#snippet4').smoothDivScroll('stopAutoScrolling');
  });

  var myCirclePlayer = new CirclePlayer("#jplayer1",
  {
    m4a: "media/audio/hannah-snippet.m4a",
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
