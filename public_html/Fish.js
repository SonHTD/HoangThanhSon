void setup() { 
  size(500, 400); 
		drawtest();
}
var drawtest = function(){
var centerX = 200;
var centerY = 100;
var bodyLength = 118;
var bodyHeight = 74;
var bodyColor = color(162, 0, 255);
var tailWidth = bodyLength/4;
var tailHeight = bodyHeight/2;

var drawFish = function(centerX,centerY,bodyLength,bodyHeight,bodyColor,tailWidth,tailHeight){
    
    noStroke();
    fill(bodyColor);
    // body
    ellipse(centerX, centerY, bodyLength, bodyHeight);
    // tail
    triangle(centerX-bodyLength/2, centerY,
             centerX-bodyLength/2-tailWidth, centerY-tailHeight,
             centerX-bodyLength/2-tailWidth, centerY+tailHeight);
    // eye
    fill(33, 33, 33);
    ellipse(centerX+bodyLength/4, centerY, bodyHeight/5, bodyHeight/5);
    
};  
var x1= [1,2,3,4,5];
var y1= [50,100,200,300,400];
draw = function() {
background(89, 216, 255);
for(var i=0;i<x1.length;i++){
drawFish(x1[i],y1[i],117,76,color(x1[i], y1[i], x1[i]*y1[i]),bodyLength/4,bodyHeight/2);

x1[i]=x1[i]+1*x1[i]/50;
if(x1[i]>500){
    x1[i]=1;
}
}

};
};