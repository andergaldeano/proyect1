function Game(arrow, arrowContainer, angle, bullseyeRed, points, bullseyePosition){
  //this.maxArrows = maxArrowNumber || 3
  this.arrow = arrow;
  this.arrowContainer = arrowContainer;
  this.angle = angle;
  this.bullseyeRed = bullseyeRed;
  this.height = window.innerHeight - (this.bullseyeRed.position().top) - ((this.bullseyeRed.height())/2) - (this.arrow.height());
  this.points = points;
  this.bullseyePosition = bullseyePosition;

}


Game.prototype.handleMovement = function(key, element){
  key === 39 ? this.angle += 5 : this.angle -= 5;
  element.css("transform", "rotate(" + this.angle + "deg)");
};

Game.prototype.handleShoot = function(ev, arrow){
  var collision = (($(".field").width())/2) +
                  (this.height * Math.sin(this.toRadians(this.angle)) /
                   Math.sin(this.toRadians(180 - Math.abs(this.angle) - 90))) -
                  ((this.arrow.width())/2);
  arrow.css('bottom', this.height);
  arrow.css('left', collision);
  this.resetBulleyePosition();
  console.log(this.bullseyePosition);

  // this.score(collision, this.height);

  // this.scores();



  this.arrowContainer.append('<div class="arrow"></div>');


  setTimeout( function() {
     this.smash(this.arrow);
     this.arrow = $('.arrow').last();
     this.angle = 0;
   }  . bind(this), 500);

  //  var trueCollision = collision + (($(".field").width())/2);
  //  console.log(trueCo);
};

Game.prototype.toRadians = function(deg) {
  return deg * Math.PI / 180;
};



Game.prototype.smash  = function(elem){
  elem.addClass("stick");
};


// Game.prototype.score = function(x, y){
//     var elements = document.elementFromPoint(x, y);
//     console.log(elements);
//
//
//     if(elements.id == "white"){
//         this.points += 50 ;}
//     else if (elements.id == "red" ){
//         this.points += 25 ;}
//     // else{
//     //     this.points += 0 ;
//     //     }
//   console.log(this.points);
// };

// Game.prototype.scores = function (y){
//   var diana
// if (y = )
//
// }

Game.prototype.resetBulleyePosition = function (){
  var nextPosition = this.bullseyeRed.position().left;
  this.bullseyePosition = nextPosition;
};
