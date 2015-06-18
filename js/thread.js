// ISSUES: Google may rate-limit Spreadsheets API (Tabletop.js)
// Hoepfully Google won't change Spreadsheets API!

var numBigBoxes = 0;

$('.glyphicon-question-sign').hover(
  function() {
    $('body').append('<div id="what-is-this">This is a randomly generated collection of books I\'ve read, photos I\'ve taken, and some of my piano recordings. Scroll to follow the thread!</div>');
  },
  function() {
    $('#what-is-this').remove();   
  }
);
$('.glyphicon-menu-hamburger').hover(
  function() {
    $('#sidebar').show();
    $('.info').hide();
    $('.scrollingHotSpotRight').hide();
  },
  function() {
    $('#sidebar').hover(
      function() {
        $('#sidebar').show();
      },
      function() {
        $('.info').show();
        $('.scrollingHotSpotRight').show();
        $('#sidebar').hide();
      }
    );
  }
);

var insta_url = "https://docs.google.com/spreadsheets/d/1bdLCDybS8QrSY2atgRE3QldTEokHQyCDA2sG3x3vjqc/pubhtml";
var goodreads_url = 'https://docs.google.com/spreadsheets/d/1ndkMut0Z75GO6XKyDMhMyDdOzBoLTkJ0gEhviKUP9ro/pubhtml';

$(document).ready(function() {
  $('#sidebar').hide();
  $('#ontop').jscroll();

  var total = 0;
  for (var b=0; b<2; b++) {
    $('#ontop').append('<div class="col-md-6 col-xs-6 bigbox full" id="bigbox' + b + '"></div>');

    // bigbox-ception is so that smoothdivscroll will work properly
    for (var i=0; i<4; i++) {
      $('#bigbox' + b).append('<div class="col-md-3 col-xs-3 box full" id="box' + total + '"></div>');
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
    numBigBoxes++;
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
  if (r>220 || g>215 || b>220) {
    return generateRGB();
  } else {
    return 'rgb(' + r + ',' + g + ',' + b + ')';
  }
}

function fillBox(obj,n) {
  if (obj.Photos != null) {
    $('#box' + n).append('<img class="insta" src="' + obj.Photos + '"></img>');
  } else if (obj.name != null) {
    $('#box' + n).css('background-color',generateRGB());
    $('#box' + n).css('opacity','0.8');
    $('#box' + n).css('padding-top','2vh');
    $('#box' + n).css('padding-left','1vw');
    $('#box' + n).css('padding-right','1vw');
    $('#box' + n).css('mix-blend-mode','screen');

    var start = obj.misc.indexOf('author')+7;
    var end = obj.misc.indexOf('name');
    var author = obj.misc.slice(start,end-1);

    var title = obj.name;
    if (title.length > 40) {
      title = title.substr(0,39) + "...";
    }

    $('#box' + n).html(title + '<div class="author">' + author + '</div>');
    $('#box' + n).click(function() {window.open(obj.url)});
    $('#box' + n).css('cursor','pointer');
  
  } else if (obj.music != null) {
    // $('#box' + n).css('background-color',generateRGB());
    $('#box' + n).css('opacity','0.8');
    $('#box' + n).css('padding-top','2vh');
    $('#box' + n).css('padding-left','1vw');
    $('#box' + n).css('padding-right','1vw');
    $('#box' + n).css('mix-blend-mode','screen');

    if (obj.music == "Beethoven") {
      $('#box' + n).html('Allegro con brio, Sonata in C Major Op. 2 No. 3 <div class="author">Ludwig van Beethoven</div><br>');
      $('#box' + n).css('font-size','2vh');
      $('#box' + n).css('background-image','url(http://lucare.com/immortal/media/composing1.gif)');
    } else if (obj.music == "Prokofiev") {
      $('#box' + n).html('Allegro ma non troppo, Sonata No. 2 in D minor Op. 14 <div class="author">Sergei Prokofiev</div><br>');
      $('#box' + n).css('font-size','2vh');
      $('#box' + n).css('background-image','url(http://mediad.publicbroadcasting.net/p/kwit/files/201506/serguei-prokofiev.jpg)');
    } else if (obj.music == "Liszt") {
      $('#box' + n).html('Dedication after Widmung <div class="author">Franz Liszt/Robert Schumann</div><br>');
      $('#box' + n).css('font-size','2vh');
      $('#box' + n).css('background-image','url(http://southfloridaclassicalreview.com/wp-content/uploads/2010/05/chopin1.png)');
    }

    $('#box' + n).append('<audio controls><source src="media/audio/' + obj.music + '.mp3" type="audio/mp3"> <p>Your user agent does not support the HTML5 Audio element.</p> </audio>');
  }

  $('#box' + n).css('display','none');
  $('#box' + n).fadeIn(500);
}

function showInfo(data, n, boxes, total) {
  setTimeout(function() {
    console.log (data.length-n);
    if (data.length-n < boxes.length) {
      console.log(numBigBoxes);
      $('#rest' + (numBigBoxes-2).toString()).html("");
      $('#rest' + (numBigBoxes-2).toString()).text('To be continued...');
      $('#rest' + (numBigBoxes-2).toString()).css('font-size', '20vh');
      $('#rest' + (numBigBoxes-2).toString()).css('padding-left', '4vw');
      $('#rest' + (numBigBoxes-2).toString()).css('padding-top', '60vh');
      $('#rest' + (numBigBoxes-2).toString()).css('line-height', '40vh');
      $('#rest' + (numBigBoxes-2).toString()).css('color', 'white');
      $('#rest' + (numBigBoxes-2).toString()).css('font-style', 'oblique');
      return;
    }

    // Pick box to fill.
    var randInt = Math.floor(Math.random()*boxes.length);

    fillBox(data[n], boxes[randInt]);
    boxes.splice(randInt,1);

    if (n < total) {
      showInfo(data,n+1,boxes,total);
    } else {
      if (numBigBoxes == 2) {
        var rest = document.createElement('div');
        rest.setAttribute('id','rest');
        rest.style.width = "900vw";
        $('#ontop').append(rest);
        $('#ontop').smoothDivScroll({});
        $('.scrollingHotSpotLeft').append('<span class="glyphicon glyphicon-menu-left" aria-hidden="true"></span>');
        $('.scrollingHotSpotRight').append('<span class="glyphicon glyphicon-menu-right" aria-hidden="true"></span>');
      }

      var rest = document.createElement('div');
      rest.setAttribute('id','rest' + numBigBoxes);
      $('#rest').append(rest);

      $(document).ready(function() {
        $('#rest' + numBigBoxes).css('width','100vw');
        $('#rest' + numBigBoxes).css('left',((numBigBoxes*100)/2).toString() + 'vw');
        $('#rest' + numBigBoxes).css('height','100%');
        $('#rest' + numBigBoxes).css('position','absolute');

        // Doing it again - may want to modularize
        var restStart = total;
        for (var b = numBigBoxes; b < numBigBoxes+2; b++) {
          $('#rest' + numBigBoxes).append('<div class="col-md-6 col-xs-6 bigbox full" id="bigbox' + b + '"></div>');
          // bigbox-ception is so that smoothdivscroll will work properly
          for (var i=0; i<4; i++) {
            $('#bigbox' + b).append('<div class="col-md-3 col-xs-3 box full" id="box' + total + '"></div>');
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
        }
        numBigBoxes += 2;
        
        for(i=restStart;i<total;i++) {boxes.push(i)}
        var randInt = Math.floor(Math.random()*boxes.length);
        fillBox(data[n], boxes[randInt]);
        console.log(boxes);
        boxes.splice(randInt,1);
        showInfo(data,n+1,boxes,total); 
      });
    }
  }, 250);
}

