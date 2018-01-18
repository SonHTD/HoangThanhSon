void setup() { 
  size(400, 400); 
		drawtest();
}
var drawtest = function(){
var xPos = 281;
var yPos = 61;
var xPos2 = 271;
var yPos2 = 57;
var xPos3 = 290;
var yPos3 = 70;
draw = function() {
    background(29, 40, 115);
    fill(199, 196, 151);
    ellipse(xPos, yPos, 10, 10);
    fill(199, 196, 151);
    ellipse(xPos2, yPos2, 10, 10);
    fill(204, 179, 179);
    rect(xPos3, yPos3, 10, 10);
    xPos -=1;
    yPos +=1;
    xPos2 -=2;
    yPos2 +=2;
    xPos3 -=1.5;
    yPos3 +=1.5;
};

};