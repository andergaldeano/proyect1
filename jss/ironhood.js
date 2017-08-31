function Game(arrow, arrowContainer, angle, bullseyeRed, points, bullseyePosition, maxArrows){
  // this.arrow = arrow;
  // this.arrowContainer = arrowContainer;
  // this.angle = angle;
  this.bullseyeRed = bullseyeRed;
  this.height = window.innerHeight - (this.bullseyeRed.position().top) - ((this.bullseyeRed.height())/2) - (this.arrow.height());
  // this.points = points;
  // this.bullseyePosition = bullseyePosition;
  this.maxArrows = maxArrows;
  this.shootsDone = 0;

}


// Game.prototype.handleMovement = function(key, element){
//   key === 39 ? this.angle += 3 : this.angle -= 3;
//   element.css("transform", "rotate(" + this.angle + "deg)");
// };

// Game.prototype.canShoot = function(ev, arrow){
//   if(this.shootsDone < this.maxArrows ){this.handleShoot(ev, arrow);
//   }
// };
//
// Game.prototype.handleShoot = function(ev, arrow){
//   var collision = (($(".field").width())/2) +
//                   (this.height * Math.sin(this.toRadians(this.angle)) /
//                    Math.sin(this.toRadians(180 - Math.abs(this.angle) - 90))) -
//                   ((this.arrow.width())/2);
//   arrow.css('bottom', this.height);
//   arrow.css('left', collision);
//
//
//
//
//   setTimeout(function(){
//     this.resetBulleyePosition();
//     this.scores(collision, this.bullseyePosition);
//   }. bind(this), 500);
//
//
//
//   this.arrowContainer.append('<div class="arrow"></div>');
//
//
//   setTimeout( function() {
//      this.smash(this.arrow);
//      this.arrow = $('.arrow').last();
//      this.angle = 0;
//
//    }  . bind(this), 500);
//    this.shootsDone += 1;
//    this.removeThisBullet(this.shootsDone);
// };

// Game.prototype.removeThisBullet = function (bulletNumber){
//     $(".bullet-" + bulletNumber).addClass('bulletEmpty');
//   };

// Game.prototype.toRadians = function(deg) {
//   return deg * Math.PI / 180;
// };



// Game.prototype.smash  = function(elem){
//   elem.addClass("stick");
// };


// Game.prototype.scores = function (yArrow, yBulleye){
// if (yArrow > yBulleye && yArrow < (yBulleye + 65) || yArrow > (yBulleye+155) && yArrow < (yBulleye + 220)){
// console.log("puntitos rojos");
// this.points += 25;
// this.addScore(this.points);
// }
// else if (yArrow > (yBulleye + 65) && yArrow < (yBulleye+155)){
//   console.log("PUNTITOS RICOS");
//   this.points += 50;
//   this.addScore(this.points);
// }
// };

// Game.prototype.resetBulleyePosition = function (){
//   var nextPosition = this.bullseyeRed.position().left;
//   this.bullseyePosition = nextPosition;
// };

// Game.prototype.addScore = function(number){
// document.getElementsByTagName("spam")[0].innerHTML= number;
// };
