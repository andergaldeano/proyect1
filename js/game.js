function Game(){
  createGame(5);
  this.bullseyes = new Bullseyes ($(".bullseyeRed"), 0);
  this.arrow = new Arrow($(".arrow"), $(".arrowContainer"), $(".bullseyeRed"), 0, 0, 5, 0);
  this.player = new Player(0, $('.overlay .points'));
  this.impact = new Impact($(".bullseye"), $(".bullseyeRed"), $('.overlay'), $("#effects"), $(".bullseyeRed").css("width"), 100);
}
