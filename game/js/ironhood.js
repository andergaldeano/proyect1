  var levelCounter = 0;

  var levels = [
    { arrows: 5,
      dianas: 1,
      moving: false,
      level: 0,
    },
    {
      arrows: 5,
      dianas: 1,
      moving: true,
      level: 1,
    },
    {
      arrows: 5,
      dianas: 2,
      moving: true,
      level: 2,
    },
  ];

$( document ).ready(function() {
 game = new Game(levels[0]);

  $(document).on("keydown", function(ev){
    if(ev.keyCode === 37 || ev.keyCode === 39){
      game.arrow.handleMovement(ev.keyCode, game);
      return;
    } else if(ev.keyCode === 32){
      game.arrow.canShoot(ev.keyCode, game);
      return;
    }
  });
});



// Start Game button

$("#rockIt").click(function(){
    $(".intro").hide();
});
// Pass to next level

$("#levelUp").click(function(){
  levelCounter++;
  $(".winContainer").hide();
  deleteGame();

  // startGame();

 game = new Game(levels[levelCounter]);
 game.test = Math.random();

});

// Reset button

$("#reset").click(function(){
  $(".loseContainer").hide();
  deleteGame();

  // startGame();
  game = new Game(levels[levelCounter]);
 game.test = Math.random();

});
