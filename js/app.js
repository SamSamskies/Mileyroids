var APP = {
  init: function() {
    $(document).konami_code({ callback: APP.startGame, maximum: 1 });
    APP.loadYouTubeAPIAsyc();
  },

  // This code loads the IFrame Player API code asynchronously.
  loadYouTubeAPIAsyc: function() {
     var tag = document.createElement('script');
     tag.src = "https://www.youtube.com/iframe_api";
     var firstScriptTag = document.getElementsByTagName('script')[0];
     firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  },

  startGame: function() {
    var s = $('<script/>').attr('src', 'js/kickass.js');
    $('body').append(s);
    $('#mask').hide();
    $('#instructions-container').hide();
    APP.player.playVideo();
    APP.miniPlayer.playVideo();
  }
}

// This stuff needs to be global
function onYouTubeIframeAPIReady() {
  APP.player = new YT.Player($('#main-vid')[0]);
  APP.miniPlayer = new YT.Player($('#mini-vid')[0])
}

APP.init();



