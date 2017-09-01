function Bullseyes(bullseyeRed, bullseyePosition){
this.bullseyePosition = bullseyePosition;
this.bullseyeRed = bullseyeRed;
}

//take the bullseyes new position

Bullseyes.prototype.resetBullseyePosition = function (game, x){

  var nextPosition = this.bullseyeRed.position().left;
  x.push(nextPosition);
};

//
// var nextPosition = this.bullseyeRed.map(function(x){
//   console.log(x)
//   return x.position().left;
// });
