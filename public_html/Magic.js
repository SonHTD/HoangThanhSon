void setup() { 
  size(400, 400); 
		drawtest();
}
var drawtest = function(){
fill(0, 0, 0);
ellipse(200, 200, 375, 375);
fill(60, 0, 255);
triangle(200, 104, 280, 280, 120, 280);

var answer = floor(random(1, 5));
if (answer === 3) {
    fill(255, 255, 255);
    text("NOT YET", 176, 200);
    text("IMPLEMENTED", 159, 229); 
}else if(answer===1){
    fill(201, 65, 201);
    text("OK MEN",179,229);
}else if(answer===2){
    fill(54, 196, 47);
    text("OK Girl",179,229);
}else if(answer===4){
    fill(214, 127, 34);
    text("Macgic 8-ball",170,229);
}else if(answer===5){
    fill(242, 44, 110);
    text("Challenge",170,229);
}

};