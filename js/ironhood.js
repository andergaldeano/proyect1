   var game 
$( document ).ready(function() {

 game = new Game();

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
        $(".intro").hide(0);
    });

// Reset button

    $("#reset").click(function(){
      $(".field, .winPlayer").show(0);
      deleteGame();
      // startGame();
     game = new Game();

    });
