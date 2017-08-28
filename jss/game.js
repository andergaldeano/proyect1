var game = new Game($(".arrow"), $(".arrowContainer"), 0, $(".bullseyeRed"), 0);
$( document ).ready(function() {
console.log(game);
});

$(document).on("keydown", function(ev){
  if(ev.keyCode === 37 || ev.keyCode === 39){
    game.handleMovement(ev.keyCode, game.arrow);
    return;
  } else if(ev.keyCode === 32){
    game.handleShoot(ev.keyCode, game.arrow);
    return;
  }
});
