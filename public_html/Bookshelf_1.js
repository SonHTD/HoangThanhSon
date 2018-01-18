/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
void setup(){
    size(400,400);
    drawbookshelf();
};

var drawbookshelf = function(){
    //shelf
    fill(173, 117, 33);
    rect(0, 200, 400, 20);
    //book
    var X;
    var tex;
    var author;
    var star;
    var drawbook = function(X, tex, author){
        fill(214, 255, 219);
        rect(X, 100, 90, 100);
        fill(0,0,0);
        text(tex, X+10,110, 90, 40);
        text(author, X+10, 150, 90, 30);
    };
    X = [10,130,250];
    tex = ["The giver", "Cuoc doi cua Henry Ford", "Gap Lai"];
    author = ["Thanh Son", "Henry Ford", "Macr Levy"];
    star = [4,4,5];
    for(i=0; i< 3; i++){
        drawbook(X[i], tex[i], author[i]);
        for(j=0; j<star[i]; j++){
            /* @pjs preload="Star.png";*/
            PImage a;
            a = loadImage("Star.png");
            image(a, X[i]+5 + j*16, 170, 20, 30);
        }
    }
};

