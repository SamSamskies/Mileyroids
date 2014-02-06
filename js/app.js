var APP = {
  startGame: function() {
    var s = $('<script/>').attr('src', 'js/kickass.js');
    $('body').append(s);
  }
}

$(document).konami_code({ callback: APP.startGame })

