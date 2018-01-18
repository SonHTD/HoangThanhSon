void setup() { 
  size(400, 400); 
  drawtest();
}
var drawtest = function(){
background(240, 218, 218);
fill(25, 143, 19);
textSize(30);
text("May Tinh", 108, 30);
textSize(15);
text("Tien Loi.", 57, 51);
text("Man hinh fullhd.", 57, 68);
text("Cau hinh cao.", 57, 87);
textSize(30);
text("Quan Ao",32,129);
textSize(15);
text("Mem mai.",32,158);
text("Mau ma da dang.",32,183);
text("100% Cotton.",32,209);

textSize(30);
text("Vi da",241,130);
textSize(15);
text("da that",234,158);
text("rong dai hop li.",234,183);
text("nhieu ngan dung the.",234,209);

    fill(166, 146, 146);
    ellipse(98,301,101,76);
    ellipse(98,250,50,50);
    fill(163, 167, 179);
    rect(201,272,170,54);
    fill(235, 54, 54);
    line(183,104,183,262);
var x=0;    
draw = function() {  
    fill(234, 250, 209);
    rect(0,345,400,53);
    fill(31, 26, 26);
    textSize(30);
    text("Quang Cao",x,380);
    x=x+1;
};

};