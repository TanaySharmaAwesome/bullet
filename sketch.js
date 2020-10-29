var zenia,Tourus,Cyclap,wall1,wall2,wall3;
var spped, weight;


function setup() {
  createCanvas(1000,400);

  wall1=createSprite(790,50,10,40);
  wall1.width=random(22,83);
  
  zenia=createSprite(20,50,20,20);
  zenia.velocityX=9;


  wall2=createSprite(790,200,10,40);
  wall2.width=random(22,83);

  Tourus=createSprite(20,200,20,20);
  Tourus.velocityX=9; 
  
  wall3=createSprite(790,350,10,40);
  wall3.width=random(22,83);

  Cyclap=createSprite(20,350,20,20);
  Cyclap.velocityX=9;

  speed1=random(23,91);
  speed2=random(23,91);
  speed3=random(23,91);

  weight1=random(30,52);
  weight2=random(30,52);
  weight3=random(30,52);


}

function draw() {
  background("black");  
  
  zenia.velocityX=speed1;
  Tourus.velocityX=speed2;
  Cyclap.velocityX=speed3;



  if (wall1.x-zenia.x<(zenia.width+wall1.width)/2){
    zenia.velocityX=0;

    var deformation =0.5*weight1*speed1*speed1/wall1.width*wall1.width*wall1.width;

    if (deformation>10){
       wall1.shapeColor="red";
    }

    if (deformation<10){
      wall1.shapeColor="green";
   }

  }

  if (wall2.x-Tourus.x<(Tourus.width+wall2.width)/2){
    Tourus.velocityX=0;

    var deformation =0.5*weight2*speed2*speed2/wall2.width*wall2.width*wall2.width;

    if (deformation>10){
      wall2.shapeColor="red";
    }

    if (deformation<10){
      wall2.shapeColor="yellow";
   }

  }

  if (wall2.x-Cyclap.x<(Cyclap.width+wall2.width)/2){
    Cyclap.velocityX=0;

    var deformation =0.5*weight3*speed3*speed3/wall3.width*wall3.width*wall3.width;

    if (deformation>10){
      wall13.shapeColor="red";
    }

    if (deformation<10){
      wall3.shapeColor="yellow";
   }

  }  

  drawSprites();
}