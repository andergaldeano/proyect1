function Arrow(arrow, arrowContainer, bullseyeRed, bullseyePosition, angle, maxArrows, shootsDone)
{
  this.arrow = arrow;
  this.angle = angle;
  this.shootsDone = shootsDone;
  this.arrowContainer = arrowContainer;
  this.bullseyePosition = bullseyePosition;
  this.bullseyeRed = bullseyeRed;
  this.height = window.innerHeight - (this.bullseyeRed.position().top) - ((this.bullseyeRed.height())/2) - (this.arrow.height());
  this.maxArrows = maxArrows;
}




// Changes the arrows angle

Arrow.prototype.handleMovement = function(key, game){
    key === 39 ? this.angle += 3 : this.angle -= 3;
  game.arrow.arrow.css("transform", "rotate(" + this.angle + "deg)");
};

// Shows if its possible to shoot

Arrow.prototype.canShoot = function(ev, game){
  if(this.shootsDone < this.maxArrows ){this.shoot(ev, game);
  }
};

//Finds the point of the arrows colision and actives next steps

Arrow.prototype.shoot = function(ev, game){
  var collision = (($(".field").width())/2) +
                  (this.height * Math.sin(this.toRadians(this.angle)) /
                   Math.sin(this.toRadians(180 - Math.abs(this.angle) - 90))) -
                  ((this.arrow.width())/2);
  game.arrow.arrow.addClass('arrow-animated');
  game.arrow.arrow.css('bottom', this.height);
  game.arrow.arrow.css('left', collision);



  setTimeout(function(){
    game.bullseyes.resetBullseyePosition(game);
    game.impact.scoreObtined(collision, this.bullseyePosition, game);
    this.smash(this.arrow);
    this.createNewArrow();
  }. bind(this), 500);


  this.shootsDone += 1;
  game.player.removeThisBullet(this.shootsDone);


};

// change the value to radians

Arrow.prototype.toRadians = function(deg) {
  return deg * Math.PI / 180;
};


/*
 * Changes the arrows image when it crushs
*/
Arrow.prototype.smash  = function(elem){
  elem.addClass("stick");
};

//

Arrow.prototype.reset = function(elem) {
  elem.removeClass('arrow-animated');
  elem.removeClass('stick');
  elem.css('left', '');
  elem.css('bottom', '');
  this.angle = 0;
};

// Creates a new arrow once the shoot is done, and resets the angle

Arrow.prototype.createNewArrow = function (){
  setTimeout( function() {
    this.reset(this.arrow);
  }.bind(this), 500);
};
