function Game(options){
  createGame(options.arrows, options.moving, options.level);
  this.bullseyes1 = new Bullseyes($(".bullseyeRed"), 0);

  if (options.level == 2){this.bullseyes2 = new Bullseyes($(".movingBackward"), 0);}

  this.arrow = new Arrow($(".arrow"), $(".arrowContainer"), $(".bullseyeRed"), 0, 0, 5, 0);
  this.player = new Player(0, $('.overlay .points'));
  this.impact = new Impact($(".bullseye"), $(".bullseyeRed"), $('.overlay'), $("#effects"), $(".bullseyeRed").css("width"), 100, options.level, $("#winSong"));
}
