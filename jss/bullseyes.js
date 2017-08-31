function Bullseyes(bullseyeRed, bullseyePosition){
this.bullseyePosition = bullseyePosition;
this.bullseyeRed = bullseyeRed;
}

//take the bullseyes new position

Bullseyes.prototype.resetBullseyePosition = function (){
  var nextPosition = this.bullseyeRed.position().left;
  arrow.bullseyePosition = nextPosition;
};










































// allTogether.sort(function(a, b){
//   return a.length - b.length
// });

// if()





// for(var x = 0; x < allTogether.length; x++){
//   for (var y = 1; y < allTogether.length; y++){
//     if(allTogether[x].length == allTogether[y].length){

//       allTogether.sort(function (a, b) {
//       if (a < b) return -1;
//       else if (a > b) return 1;
//       return 0;
//     });

//     }
//   }
//   }
