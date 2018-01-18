void setup() { 
  size(400, 400); 
  drawtest();
};
var drawtest = function(){


// draw shelf
fill(173, 117, 33);
rect(0, 120, 400, 10);



var books = [
    
    {title: "Cuoc doi cua Henry Ford", stars: "5", author : "Henry Ford"},
    {title: "Gap Lai", stars: "4", author: "Marc Levy"}
];
for(var j = 0; j<books.length; j++) {
    fill(214, 255, 219);
    rect(120 + j*110, 20, 90, 100);
    fill(0, 0, 0);
    text(books[j].title,125 + j*110, 29, 70, 100);
    text(books[j].author,125 + j*110, 75, 70, 100);
    for (var i = 0; i < books[j].stars; i++) {
        /* @pjs preload ="Star.png";*/
        PImage a;
        a = loadImage("Star.png");
        image(a, (123+j*110) + i * 16, 90, 20, 30);
    }
}

};