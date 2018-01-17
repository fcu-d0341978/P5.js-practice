var ball = {
    x:320,
    y:180
};

var paddle1 = {
    x:20,
    y:0,
    score:0
};

var paddle2 = {
    x:610,
    y:0,
    score:0
};

var currentSpeed = 6
var Xspeed = 6;
var Yspeed = 6;

function setup() {
    createCanvas(640, 360);
}

function draw() {
    background(0);
    
    fill(255);
    ellipse(ball.x, ball.y, 20, 20);
    rect(paddle1.x, paddle1.y, 10, 70);
    rect(paddle2.x, paddle2.y, 10, 70);
    
    //**ball movement**//
    //**against paddle1**//
    if(ball.x > width){ //paddle1 scores
        Xspeed = 6;
        Yspeed = random(-6, 6);
        ball.x = 10;
        ball.y = 180;
        paddle1.score++;
    }else if((ball.x < paddle1.x + 20) && ball.y > paddle1.y && ball.y <= paddle1.y + 10){
        Xspeed = 6;
        Yspeed = -6;
    }else if((ball.x < paddle1.x + 20) && ball.y > paddle1.y + 10 && ball.y <= paddle1.y + 20){
        Xspeed = 6;
        Yspeed = -4;
    }else if((ball.x < paddle1.x + 20) && ball.y > paddle1.y + 20 && ball.y <= paddle1.y + 30){
        Xspeed = 6;
        Yspeed = -2;
    }else if(ball.x < 0){ //paddle2 scores
        Xspeed = -6;
        Yspeed = random(-6, 6);
        ball.x = 540;
        ball.y = 180;
        paddle2.score++;
    }else if((ball.x < paddle1.x + 20) && ball.y > paddle1.y + 30 && ball.y <= paddle1.y + 40){
        Xspeed = 6;
        Yspeed = 0;
    }else if((ball.x < paddle1.x + 20) && ball.y > paddle1.y + 40 && ball.y <= paddle1.y + 50){
        Xspeed = 6;
        Yspeed = 2;
    }else if((ball.x < paddle1.x + 20) && ball.y > paddle1.y + 50 && ball.y <= paddle1.y + 60){
        Xspeed = 6;
        Yspeed = 4;
    }else if((ball.x < paddle1.x + 20) && ball.y > paddle1.y + 60 && ball.y <= paddle1.y + 70){
        Xspeed = 6;
        Yspeed = 6;
    }
    //**against paddle2**//
    if((ball.x > paddle2.x -10) && ball.y > paddle2.y && ball.y <= paddle2.y + 10){
        Xspeed = -6;
        Yspeed = -6;
    }else if((ball.x > paddle2.x -10) && ball.y > paddle2.y + 10 && ball.y <= paddle2.y + 20){
        Xspeed = -6;
        Yspeed = -4;
    }else if((ball.x > paddle2.x -10) && ball.y > paddle2.y + 20 && ball.y <= paddle2.y + 30){
        Xspeed = -6;
        Yspeed = -2;
    }else if((ball.x > paddle2.x -10) && ball.y > paddle2.y + 30 && ball.y <= paddle2.y + 40){
        Xspeed = -6;
        Yspeed = 0;
    }else if((ball.x > paddle2.x -10) && ball.y > paddle2.y + 40 && ball.y <= paddle2.y + 50){
        Xspeed = -6;
        Yspeed = 2;
    }else if((ball.x > paddle2.x -10) && ball.y > paddle2.y + 50 && ball.y <= paddle2.y + 60){
        Xspeed = -6;
        Yspeed = 4;
    }else if((ball.x > paddle2.x -10) && ball.y > paddle2.y + 60 && ball.y <= paddle2.y + 70){
        Xspeed = -6;
        Yspeed = 6;
    }
    
    if(ball.y > height){
        Yspeed = -5;
    }else if(ball.y < 0){
        Yspeed = 5;
    }
    
    ball.x = ball.x + Xspeed;
    ball.y = ball.y + Yspeed;
    
    //**paddle movement**//
    if(mouseY > height - 70){
        paddle1.y = 290;
    }else if(mouseY < height - 70){
        paddle1.y = mouseY;
    }
    
    if(ball.y > paddle2.y + 70){
        paddle2.y += 4.9;
    }else if(ball.y < paddle2.y){
        paddle2.y -= 4.9;
    }
    
    
    
    textSize(32);
    fill(255);
    text(paddle1.score, 80, 100);
    text(paddle2.score, 540, 100);
}


