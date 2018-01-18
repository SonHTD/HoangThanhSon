void setup() { 
  size(400, 400); 
  drawtest();
}
var drawtest = function(){
background(186, 145, 20); // wooden table
ellipse(200, 200, 350, 350); // plate
ellipse(200, 200, 300, 300);
//banh mi
stroke(255, 162, 0);
fill(239, 250, 82);
rect(180,200,100,100);

//trung
fill(252, 218, 0);
ellipse(150,150,50,50);
ellipse(190,160,50,50);
//thit
fill(145, 19, 19);
ellipse(140,260,100,70);

};