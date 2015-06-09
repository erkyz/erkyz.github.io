$('#refresh').click(function() {
  location.reload(); 
});

$('#menu').hover(
  function() {
    $('#sidebar').show();
  },
  function() {
    $('#sidebar').hover(
      function() {
        $('#sidebar').show();
      },
      function() {
        $('#sidebar').hide();
      }
    );
  }
);

var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1bdLCDybS8QrSY2atgRE3QldTEokHQyCDA2sG3x3vjqc/pubhtml';

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

  Tabletop.init( { key: public_spreadsheet_url,
                        callback: function(data, tabletop) {
                                    showInfo(data,tabletop,0,boxes,total)
                                  },
                        simpleSheet: true } )
});

function showInfo(data, tabletop, n, boxes, total) {
  setTimeout(function() {
    // Pick box to fill. This is rather inefficient but I'm lazy
    var randInt = Math.floor(Math.random()*boxes.length);
    if (data[n] != null) {
      $('#box' + boxes[randInt]).css('background-color','black');
      $('#box' + boxes[randInt]).append('<img class="insta" src="' + data[n].Photos + '"></img>');
    } else {

    }
    boxes.splice(randInt,1);

    if (n < total) {
      showInfo(data,tabletop,n+1,boxes,total);
    }
  }, 200);
}

function createCORSRequest(method, url) {
  var xhr = new XMLHttpRequest();
    if ("withCredentials" in xhr) {

      // Check if the XMLHttpRequest object has a "withCredentials" property.
      // "withCredentials" only exists on XMLHTTPRequest2 objects.
      xhr.open(method, url, true);

    } else if (typeof XDomainRequest != "undefined") {

      // Otherwise, check if XDomainRequest.
      // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
       xhr = new XDomainRequest();
       xhr.open(method, url);
    } else {

      // Otherwise, CORS is not supported by the browser.
      xhr = null;
    }
  return xhr;
}

var xhr = createCORSRequest('GET', 'www.goodreads.com/shelf/list.xml?user_id=33571041&key=mg9FnpqugGOl2CmAMWH9g');
if (!xhr) {
  throw new Error('CORS not supported');
}

xhr.onload = function() {
   var responseText = xhr.responseText;
    console.log(responseText);
     // process the response.
}

xhr.send();
