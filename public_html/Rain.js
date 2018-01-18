void setup() { 
  size(400, 400); 
		drawtest();
}
var drawtest = function(){
var xPositions = [200,220,230,240,180,160,150,140,130,115,105,90,80,70,60,250,260,270,280,290,300,315,325,345,360];
var yPositions = [0,10,20,30,0,0,0,0,0,0,0,2,2,1,3,4,3,1,4,5,6,0,1,1,2];

draw = function() {
    background(204, 247, 255);
    
    for (var i = 0; i < xPositions.length; i++) {
        
        noStroke();
        fill(0, 200, 255);
        ellipse(xPositions[i], yPositions[i], 10, 10);
        yPositions[i] += 5;
        if(yPositions[i] > 400) {
            yPositions[i]=0;
        }
    }
    
};

mouseClicked = function() {
   
    xPositions.push(mouseX);
    yPositions.push(mouseY);
    draw();
};
};