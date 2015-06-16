$('.glyphicon-question-sign').hover(
  function() {
    $('body').append('<div id="what-is-this">This is a randomly generated collection of books I\'ve read, photos I\'ve taken, and some of my piano recordings. Refresh for more!</div>');
  },
  function() {
    $('#what-is-this').remove();   
  }
);
$('.glyphicon-menu-hamburger').hover(
  function() {
    $('#sidebar').show();
    $('.glyphicon').hide();
  },
  function() {
    $('#sidebar').hover(
      function() {
        $('#sidebar').show();
      },
      function() {
        $('.glyphicon').show();
        $('#sidebar').hide();
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
    $('#ontop').append('<div class="col-md-3 col-xs-3 box full" id="box' + total + '"></div>');
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

  // RACE!
  Tabletop.init( { key: insta_url,
    callback: function(data, tabletop) {
      content = content.concat(data);
      if (content.length > data.length) {
        content.push({music:"Prokofiev"});
        content.push({music:"Beethoven"});
        content.push({music:"Liszt"});
        showInfo(shuffle(content),0,boxes,total);
      }
    }, simpleSheet: true } );
  Tabletop.init( { key: goodreads_url,
    callback: function(data, tabletop) {
      content = content.concat(data);
      if (content.length > data.length) {
        content.push({music:"Prokofiev"});
        content.push({music:"Beethoven"});
        content.push({music:"Liszt"});
        showInfo(shuffle(content),0,boxes,total);
      }
    }, simpleSheet: true } );
});

// Came up with this in 251! (from StackOverflow because I'm lazy)
function shuffle(o){
   for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
      return o;
} 

function generateRGB() {
  var r = Math.floor(Math.random()*256);
  var g = Math.floor(Math.random()*256);
  var b = Math.floor(Math.random()*256);
  if (r>235 && g>215 && b>235) {
    return generateRGB();
  } else {
    return 'rgb(' + r + ',' + g + ',' + b + ')';
  }
}

function showInfo(data, n, boxes, total) {
  setTimeout(function() {
    // Pick box to fill.
    var randInt = Math.floor(Math.random()*boxes.length);

    if (data[n].Photos != null) {
      $('#box' + boxes[randInt]).append('<img class="insta" src="' + data[n].Photos + '"></img>');
    } else if (data[n].name != null) {
      $('#box' + boxes[randInt]).css('background-color',generateRGB());
      $('#box' + boxes[randInt]).css('opacity','0.8');
      $('#box' + boxes[randInt]).css('padding-top','2vh');
      $('#box' + boxes[randInt]).css('padding-left','1vw');
      $('#box' + boxes[randInt]).css('padding-right','1vw');
      $('#box' + boxes[randInt]).css('mix-blend-mode','screen');

      var start = data[n].misc.indexOf('author')+7;
      var end = data[n].misc.indexOf('name');
      var author = data[n].misc.slice(start,end-1);

      var title = data[n].name;
      if (title.length > 40) {
        title = title.substr(0,39) + "...";
      }

      $('#box' + boxes[randInt]).html('<a href="' + data[n].url + '">' + title + '</a><div class="author">' + author + '</div>');

    
    } else if (data[n].music != null) {
      // $('#box' + boxes[randInt]).css('background-color',generateRGB());
      $('#box' + boxes[randInt]).css('opacity','0.8');
      $('#box' + boxes[randInt]).css('padding-top','2vh');
      $('#box' + boxes[randInt]).css('padding-left','1vw');
      $('#box' + boxes[randInt]).css('padding-right','1vw');
      $('#box' + boxes[randInt]).css('mix-blend-mode','screen');

      if (data[n].music == "Beethoven") {
        $('#box' + boxes[randInt]).html('Allegro con brio, Sonata in C Major Op. 2 No. 3 <div class="author">Ludwig van Beethoven</div><br>');
        $('#box' + boxes[randInt]).css('font-size','2vh');
        $('#box' + boxes[randInt]).css('background-image','url(http://lucare.com/immortal/media/composing1.gif)');
      } else if (data[n].music == "Prokofiev") {
        $('#box' + boxes[randInt]).html('Allegro ma non troppo, Sonata No. 2 in D minor Op. 14 <div class="author">Sergei Prokofiev</div><br>');
        $('#box' + boxes[randInt]).css('font-size','2vh');
        $('#box' + boxes[randInt]).css('background-image','url(http://mediad.publicbroadcasting.net/p/kwit/files/201506/serguei-prokofiev.jpg)');
      } else if (data[n].music == "Liszt") {
        $('#box' + boxes[randInt]).html('Dedication after Widmung <div class="author">Franz Liszt/Robert Schumann</div><br>');
        $('#box' + boxes[randInt]).css('font-size','3vh');
        $('#box' + boxes[randInt]).css('background-image','url(http://southfloridaclassicalreview.com/wp-content/uploads/2010/05/chopin1.png)');
      }

      $('#box' + boxes[randInt]).append('<audio controls><source src="media/audio/' + data[n].music + '.mp3" type="audio/mp3"> <p>Your user agent does not support the HTML5 Audio element.</p> </audio>');
    }

    $('#box' + boxes[randInt]).css('display','none');
    $('#box' + boxes[randInt]).fadeIn(300);
    boxes.splice(randInt,1);

    if (n < total) {
      showInfo(data,n+1,boxes,total);
    } else {
      setTimeout(function() {
        $('body').append('<div id="reloadMore">Refresh for more!</div>');
        $('#reloadMore').fadeIn(300);

        setTimeout(function() {
          $('#reloadMore').fadeOut(3000);
        }, 2000);
      }, 2500);
     }
  }, 250);
}

