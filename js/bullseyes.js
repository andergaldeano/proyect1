function Bullseyes(bullseyeRed, bullseyePosition){
this.bullseyePosition = bullseyePosition;
this.bullseyeRed = bullseyeRed;
}

//take the bullseyes new position

Bullseyes.prototype.resetBullseyePosition = function (game){
  var nextPosition = this.bullseyeRed.position().left;
  game.arrow.bullseyePosition = nextPosition;
};
