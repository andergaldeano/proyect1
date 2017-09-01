function Player(score, points){
    this.score = score;
  this.points = points;
}



// Adds points to the Score Board

Player.prototype.addScore = function(number){
  this.score += number;
  document.getElementsByTagName("span")[0].innerHTML= this.score;
  this.points.html('+' + number);
};

// Remove the images of the bullets once the shoot is done

Player.prototype.removeThisBullet = function (bulletNumber){
    $(".bullet-" + bulletNumber).addClass('bulletEmpty');
  };
