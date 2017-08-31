function Bullseyes(bullseyeRed, bullseyePosition){
this.bullseyePosition = bullseyePosition;
this.bullseyeRed = bullseyeRed;
}

//take the bullseyes new position

Bullseyes.prototype.resetBullseyePosition = function (){
  var nextPosition = this.bullseyeRed.position().left;
  console.log(this.bullseyeRed.position().left);
  arrow.bullseyePosition = nextPosition;
};
