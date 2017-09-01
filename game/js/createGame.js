
function createGame(arrowsNumber, isMoving, levelCounter){
  var classname =  isMoving ? 'moving' : '';
  $('.goal').append('<div class="bullseyeRed ' + classname + '""><div class="bullseye"></div></div>');

  if(levelCounter === 2){  $('.goal').append('<div class="bullseyeRed movingBackward"><div class="bullseye"></div></div>');}
  // $('.goal').append('<div class="bullseyeRed ' + classname + '""><div class="bullseye"></div></div>');


  for (var i = 1; i <= arrowsNumber; i++) {
    $('.myBullets').append('<div class="bullet bullet-' + i + '"></div>');
  }

  $('.gamePoints').append('<span>0</span>');
}

function deleteGame(number){
  $('.bullseyeRed').remove();
  $('.bullet').remove();
  $('span').remove();
}
