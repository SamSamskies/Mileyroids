var APP = {
  init: function() {
    $(document).konami_code({ callback: APP.startGame, maximum: 1 });
    APP.loadYouTubeAPIAsyc();
    APP.$imagesContainer = $('#images-container');
    APP.seedRandomImages(50);
  },

  // This code loads the IFrame Player API code asynchronously.
  loadYouTubeAPIAsyc: function() {
     var tag = document.createElement('script');
     tag.src = "https://www.youtube.com/iframe_api";
     var firstScriptTag = document.getElementsByTagName('script')[0];
     firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  },

  randomX: function() {
    return Math.random() * $(window).width();
  },

  randomY: function() {
    return Math.random() * $(window).height();
  },

  seedRandomImages: function(numOfImages) {
    for(var i=0; i < numOfImages; i++) {
      var img = '<img src="images/' + Math.floor((Math.random() * 8) + 1) + '.gif" ' +
                'style="top:' + APP.randomY() + 'px; left:' + APP.randomX() + 'px;">'
      APP.$imagesContainer.append(img)
    }
  },

  startGame: function() {
    var s = $('<script/>').attr('src', 'js/kickass.js');
    $('body').append(s);
    $('#mask').hide();
    $('#instructions-container').hide();
    APP.miniPlayer.playVideo();
  }
}

// This stuff needs to be global
function onYouTubeIframeAPIReady() {
  APP.miniPlayer = new YT.Player($('#mini-vid')[0])
}

APP.init();



