var APP = {
  startGame: function() {
    var s = $('<script/>').attr('src', 'js/kickass.js');
    $('body').append(s);
    $('#mask').hide();
    $('#instructions-container').hide();
  }
}

$(document).konami_code({ callback: APP.startGame, maximum: 1 })


