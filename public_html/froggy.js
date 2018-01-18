void setup(){
	size(400, 400);
	drawfroggy();
                
                
};
var drawfroggy = function(){

var x= [100];
var y= [100];
var speed;
draw = function(){
    
background(89, 216, 255);
for(var i=0; i < x.length; i++){
noStroke();
fill(93, 188, 210); // a nice froggy green!

ellipse(x[i], y[i], 200, 100); // face
ellipse(x[i] - 50, y[i] - 50, 50, 50); // left eye socket
ellipse(x[i] + 50, y[i] - 50, 50, 50); // right eye socket

fill(255, 255, 255); // for the whites of the eyes!
ellipse(x[i] - 50, y[i] - 50, 30, 30); // left eyeball
ellipse(x[i] + 50, y[i] - 50, 30, 30); // right eyeball

fill(255, 0, 0);
ellipse(x[i],y[i],110,x[i]/2.5-40);

fill(x[i]+1, x[i], x[i]+1);
rect(x[i]-55,y[i]-50,10,10);
rect(x[i]+45,y[i]-50,10,10);

x[i] = x[i] + 1;
if(x[i]>400){
    x[i]=0;
}
    }   
};
mouseClicked = function(){
    x.push(mouseX);
    y.push(mouseY);
    draw();
};
};

