var arrow;
var player;
var impact;
var bullseyes;
var createGame;
// var sound;

function startGame(){
  createGame(5);
  bullseyes = new Bullseyes ($(".bullseyeRed"), 0);
  arrow = new Arrow($(".arrow"), $(".arrowContainer"), $(".bullseyeRed"), 0, 0, 5, 0);
  player = new Player(0, $('.overlay .points'));
  impact = new Impact($(".bullseye"), $(".bullseyeRed"), $('.overlay'), $("#effects"), $(".bullseyeRed").css("width"), 100);
}

$( document ).ready(function() {
  startGame();
});

//Calls functions pressing the keys

$(document).on("keydown", function(ev){
  if(ev.keyCode === 37 || ev.keyCode === 39){
    arrow.handleMovement(ev.keyCode, arrow.arrow);
    return;
  } else if(ev.keyCode === 32){
    arrow.canShoot(ev.keyCode, arrow.arrow);
    return;
  }
});



// Start Game button

    $("#rockIt").click(function(){
        $(".intro").hide(0);
    });

// Reset button

    $("#reset").click(function(){
      $(".field, .winPlayer").show(0);
      deleteGame();
      startGame();});
