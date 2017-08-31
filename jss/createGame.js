
function createGame(number){
  $('.goal').append('<div class="bullseyeRed"><div class="bullseye"></div></div>');


  for (var i = 1; i <= number; i++) {
    $('.myBullets').append('<div class="bullet bullet-' + i + '"></div>');
  }

    $('.gamePoints').append('<span> 0</span>');
}

function deleteGame(number){
  $('.bullseyeRed').remove();


    $('.bullet').remove();
  
    $('span').remove();
}
