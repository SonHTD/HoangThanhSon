void setup() { 
  size(400, 400); 
		drawtest();
};
var drawtest = function(){
var bodyX = 225;
var bodyY = 193;
var bodyW = 141;
var bodyH = bodyW/2;

draw = function() {
    background(207, 254, 255);
    fill(240, 209, 36);
    ellipse(bodyX, bodyY, bodyW, bodyH*1.5); // body?
    ellipse(bodyX, bodyY-70, bodyH, bodyW/3); // face?
    fill(20, 18, 18);
    ellipse(bodyX - 10, bodyY - 80, bodyW / 10, bodyH / 6);
    ellipse(bodyX + 10, bodyY - 80, bodyW/10, bodyH/6);
    ellipse(bodyX, bodyY - 65, bodyW -80, bodyH/9);
    
};

};