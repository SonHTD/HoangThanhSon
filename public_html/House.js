void setup() { 
  size(500, 400); 
		drawtest();
}
var drawtest = function(){
background(219, 255, 255);
noStroke();
fill(255, 140, 0);
ellipse(335, 48, 70, 70);

fill(174, 180, 214);
triangle(200, 28, 350, 150, 50, 150);

fill(96, 103, 181);
rect(60, 150, 280, 207);
for(var i=0;i<2;i++){
    var wallY = 280 + (i*38);
    for(var j=0;j<8;j++){
        var wallX = 60 + (j*35);
        stroke(158, 93, 93);
        fill(168, 52, 52);
        rect(wallX,wallY,34,38);
    }
}
fill(66, 42, 7);
rect(180, 280, 40, 77);
fill(240, 223, 223);
rect(79,192,70,80);
for(var i=1;i<4;i++){
    var lineY= 192+(i*20); 
    line(79,lineY,149,lineY);
}
fill(240, 223, 223);
rect(248,192,70,80);
for(var i=1;i<4;i++){
    var lineY= 192+(i*20); 
    line(317,lineY,249,lineY);
}
for(var j=0;j<7;j++){
    var grassX=0+ (j*79);
    image(getImage("cute/GrassBlock"),grassX,341,70,80);
}
for(var i=0;i<7;i++){
    var treeX=0+ (i*79);
    image(getImage("cute/TreeUgly"),treeX,307,70,80);
}
};