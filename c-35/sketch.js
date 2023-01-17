var hypnoticBall,database,position;

function setup(){
    database=firebase.database();
    createCanvas(500,500);
    hypnoticBall = createSprite(250,250,10,10);
    hypnoticBall.shapeColor = "red";

    var hypnoticBallPosition=database.ref("ball/position");
    hypnoticBallPosition.on("value",readPosition);
}

function draw(){
    background("white");
    if(keyDown("A")){
        writePosition(-1,0);
    }
    else if(keyDown("D")){
        writePosition(1,0);
    }
    else if(keyDown("W")){
        writePosition(0,-1);
    }
    else if(keyDown("S")){
        writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(x,y){
    database.ref("ball/position").set({
        "x":position.x+x,
        "y":position.y+y
    })
  
}
function readPosition(data){
    position=data.val();
    hypnoticBall.x=position.x;
    hypnoticBall.y=position.y;
}