function Impact(bullseye, bullseyeRed, overlay, sound, bullseyeWidth, scoreToRise){
  this.bullseye = bullseye;
  this.bullseyeRed = bullseyeRed;
  this.overlay = overlay;
  this.sound = sound;
  this.scoreToRise = scoreToRise;
  this.bullseyeWidth = bullseyeWidth.substring(0, bullseyeWidth.length - 2);
}

// if the arrow hit the bullseye call the functions to add points

Impact.prototype.scoreObtined = function (yArrow, yBulleye){
if (yArrow > yBulleye && yArrow < (yBulleye + (this.bullseyeWidth/3)) || yArrow > (yBulleye + ((this.bullseyeWidth/3)*2)) && yArrow < (yBulleye + (this.bullseyeWidth))){
    player.addScore(25);
    this.arrowStickedOnRed();
    this.overlay.addClass('active');
    this.sound[0].play();
    setTimeout( function() { this.overlay.removeClass('active');}.bind(this), 1500);
    setTimeout( this.isItTheFinal(), 2000);
  }
else if (yArrow > (yBulleye + (this.bullseyeWidth/3)) && yArrow < (yBulleye + ((this.bullseyeWidth/3)*2))){
    player.addScore(50);
    this.arrowStickedOnWhite();
    this.overlay.addClass('active');
    this.sound[0].play();
    setTimeout( function() { this.overlay.removeClass('active');}.bind(this), 1500);
    this.isItTheFinal();
}
else {
  setTimeout( this.isItTheFinal(), 2000);
}
};

// prints the sticker on the white side

Impact.prototype.arrowStickedOnWhite = function(){
  this.bullseye.append('<div class="stickOnBullseye"></div>');
};

//prints the stickers on the red side

Impact.prototype.arrowStickedOnRed = function(){
  this.bullseyeRed.append('<div class="stickOnBullseye"></div>');
};

// checks if the game is overla

Impact.prototype.isItTheFinal = function(){
  if(arrow.maxArrows == arrow.shootsDone && player.score >= this.scoreToRise){
    var winContainer = function(){$(".winContainer").addClass("show");};
    setTimeout( winContainer, 2000);
  }
  else if (player.score < this.scoreToRise && arrow.maxArrows == arrow.shootsDone ){
    var loseContainer = function(){$(".field, .winPlayer").hide(0);};
    setTimeout( loseContainer, 2000);
  }
};
