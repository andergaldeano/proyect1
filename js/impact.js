function Impact(bullseye, bullseyeRed, overlay, sound, bullseyeWidth, scoreToRise, level, winsong){
  this.bullseye = bullseye;
  this.bullseyeRed = bullseyeRed;
  this.overlay = overlay;
  this.sound = sound;
  this.scoreToRise = scoreToRise;
  this.bullseyeWidth = bullseyeWidth.substring(0, bullseyeWidth.length - 2);
  this.level = level;
  this.winsong = winsong;
}

// if the arrow hit the bullseye call the functions to add points

Impact.prototype.scoreObtined = function (yArrow, yBulleye, game){
  for (var i = 0; i < yBulleye.length; i++) {
if (yArrow > yBulleye[i] && yArrow < (yBulleye[i] + (this.bullseyeWidth/3)) || yArrow > (yBulleye[i] + ((this.bullseyeWidth/3)*2)) && yArrow < (yBulleye[i] + (this.bullseyeWidth))){
    game.player.addScore(25);
    this.arrowStickedOnRed();
    this.overlay.addClass('active');
    this.sound[0].play();
    setTimeout( function() { this.overlay.removeClass('active');}.bind(this), 1500);
    setTimeout( this.isItTheFinal(game), 2000);
  }
else if (yArrow > (yBulleye[i] + (this.bullseyeWidth/3)) && yArrow < (yBulleye[i] + ((this.bullseyeWidth/3)*2))){
    game.player.addScore(50);
    this.arrowStickedOnWhite();
    this.overlay.addClass('active');
    this.sound[0].play();
    setTimeout( function() { this.overlay.removeClass('active');}.bind(this), 1500);
    this.isItTheFinal(game);
}

}
setTimeout( this.isItTheFinal(game), 2000);
};


// prints the sticker on the white side

Impact.prototype.arrowStickedOnWhite = function(){
  this.bullseye.append('<div class="stickOnBullseye"></div>');
};

//prints the stickers on the red side

Impact.prototype.arrowStickedOnRed = function(){
  this.bullseyeRed.append('<div class="stickOnBullseye"></div>');
};

// checks if the game is over

Impact.prototype.isItTheFinal = function(game){
  if( game.arrow.maxArrows == game.arrow.shootsDone && game.player.score >= this.scoreToRise){
    if (this.level < 2){
    var winContainer = function(){$(".winContainer").show(1);};
    setTimeout( winContainer, 2000);}
    else {
      that = this;
      var superWin = function(){
      $(".superWinContainer").show(1);
      $("#startSong").remove();
      that.winsong[0].play();
    };
      setTimeout( superWin, 2000);
    }
  }
  else if (game.player.score < this.scoreToRise && game.arrow.maxArrows == game.arrow.shootsDone ){
    var loseContainer = function(){ $(".loseContainer").show(1);};
    setTimeout( loseContainer, 2000);
  }
};
