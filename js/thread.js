$('#refresh').click(function() {
  location.reload(); 
});

$('#menu').hover(
  function() {
    $('#sidebar').show();
    $('#menu').hide();
  },
  function() {
    $('#sidebar').hover(
      function() {
        $('#sidebar').show();
      },
      function() {
        $('#sidebar').hide();
        $('#menu').show();
      }
    );
  }
);

var insta_url = "https://docs.google.com/spreadsheets/d/1bdLCDybS8QrSY2atgRE3QldTEokHQyCDA2sG3x3vjqc/pubhtml";
var goodreads_url = 'https://docs.google.com/spreadsheets/d/1ndkMut0Z75GO6XKyDMhMyDdOzBoLTkJ0gEhviKUP9ro/pubhtml';

$(document).ready(function() {
  $('#sidebar').hide();

  var total = 0;
  for (var i=0; i<8; i++) {
    $('#ontop').append('<div class="col-md-3 col-xs-3 box" id="box' + total + '"></div>');
    if (Math.random() < 0.66) {
      total++;
    } else {
      var thisBox = total;
      for (var j=0; j<4; j++) {
        $('#box' + thisBox).append('<div class="col-md-6 col-xs-6 smallbox" id="box' + total + '"></div>');
        total++;
      }
      $('#box' + thisBox).attr('id',"");
    }
  }
  var boxes = []; for(i=0;i<total;i++) {boxes.push(i)}
  var content = []; 

  Tabletop.init( { key: insta_url,
    callback: function(data, tabletop) {
      content = data;
      Tabletop.init( { key: goodreads_url,
        callback: function(data, tabletop) {
          content = content.concat(data);
          showInfo(shuffle(content),0,boxes,total);
        },
        simpleSheet: true } );
      },
  simpleSheet: true } );

});

// Came up with this in 251! (from StackOverflow because I'm lazy)
function shuffle(o){
   for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
      return o;
} 

function showInfo(data, n, boxes, total) {
  setTimeout(function() {
    // Pick box to fill. This is rather inefficient but I'm lazy
    var randInt = Math.floor(Math.random()*boxes.length);
    if (data[n].Photos != null) {
      $('#box' + boxes[randInt]).append('<img class="insta" src="' + data[n].Photos + '"></img>');
      $('#box' + boxes[randInt]).css('display','none');
      $('#box' + boxes[randInt]).fadeIn('300');
    } else if (data[n].name != null) {
      $('#box' + boxes[randInt]).css('background-color','#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6));
      $('#box' + boxes[randInt]).css('opacity','0.8');
      $('#box' + boxes[randInt]).css('padding-top','2vh');
      $('#box' + boxes[randInt]).css('padding-left','1vw');
      $('#box' + boxes[randInt]).css('padding-right','1vw');

      var start = data[n].misc.indexOf('author')+7;
      var end = data[n].misc.indexOf('name');
      var author = data[n].misc.slice(start,end-1);
      $('#box' + boxes[randInt]).html(data[n].name + '<div class="author">' + author + '</div>');
      $('#box' + boxes[randInt]).css('display','none');
      $('#box' + boxes[randInt]).fadeIn('300');
    }
    boxes.splice(randInt,1);

    if (n < total) {
      showInfo(data,n+1,boxes,total);
    }
  }, 250);
}


