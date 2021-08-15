

var gameState = 0;
var waterGirl;
var block1,block2,block3,block4,block5;
var invisibleGround,invisibleGround2;
var fire1,fire2,fire3,firetop;
var playbutton;
var door,door2;
var coin;
var score = 0;




function preload(){
  bgImage = loadImage("images/intro.jpg")
  dayImg = loadImage("images/stage1.jpg")
  night = loadImage("images/nightBg.jpg")
  bg3 = loadImage("images/black.jpg")
 danger = loadImage("images/gameforest.jpg")

  playB = loadImage("images/playB.png")
  waterGIRLimg = loadAnimation("images/waterGirl.png")
  leftwaterGIRLimg = loadAnimation("images/lefttWg.png")
  rightwaterGIRLimg = loadAnimation("images/rightside.png")
  upWGI = loadAnimation("images/upWG.png")
  block1Img = loadImage("images/block1.png")
  block2Img = loadImage("images/block2.png")
  block3Img = loadImage("images/block3.png")
  block4Img = loadImage("images/blk4.png")
  block5Img = loadImage("images/block5.jpg")
  fireImg = loadAnimation("images/fire.png","images/flamemoving.png")
  firetopIMG = loadAnimation("images/firetop.png","images/fireontop.png")
  doorImg = loadImage("images/woodDoor.png")
  smokeImg = loadAnimation("images/smoke.png")
  coinImg = loadImage("images/coin.png")
  diamondI = loadImage("images/diamond.png")
  questI = loadImage("images/question.png")
}


function setup() {
  createCanvas(1400,500);

  //score
  score=0;
  
   

  playbutton =createSprite(730, 400, 50, 50);
  playbutton.addImage(playB)
  playbutton.scale = 0.3;
  playbutton.visible = true;


  waterGirl = createSprite(80,340,50,50)
  waterGirl.addAnimation("standing",waterGIRLimg)
  waterGirl.addAnimation("running",leftwaterGIRLimg)
  waterGirl.addAnimation("runningLeft",rightwaterGIRLimg)
  waterGirl.addAnimation("runningUp",upWGI)
  waterGirl.addAnimation("dying",smokeImg)
  //waterGirl.setCollider("rectangle",80,340,waterGirl.width,waterGirl.height);
  //waterGirl.addAnimation("runninglef",runleft)
  waterGirl.debug = true;


  waterGirl.scale = 0.4;
  waterGirl.visible = false;


  invisibleGround = createSprite(600,430,1600,10);
  invisibleGround.visible = false;

  invisibleGround2= createSprite(1400,230,10,500);
  invisibleGround2.visible =true;

  fire1 = createSprite(450,360,50,50);
  fire1.addAnimation("flame",fireImg)
  fire1.visible = false;
  fire1.scale = 0.7;
  fire1.setCollider("rectangle",-5,50,fire1.width-150,fire1.height-50);
  fire1.debug = true


  fire2= createSprite(900,350,50,50);
  fire2.addAnimation("flame",fireImg)
  fire2.visible = false;
  fire2.scale = 0.8;
  fire2.setCollider("rectangle",-5,50,fire2.width-150,fire2.height-50);
  fire2.debug = true

  fire3= createSprite(1200,380,50,50);
  fire3.addAnimation("flame",fireImg)
  fire3.visible = false;
  fire3.scale = 0.4;
  fire3.setCollider("rectangle",-5,60,fire3.width-150,fire3.height-50);
  fire3.debug = true

  firetop= createSprite(790,250,50,50);
  firetop.addAnimation("burning",firetopIMG)
  firetop.visible = false;
  firetop.scale = 0.1;
  firetop.setCollider("rectangle",-5,50,firetop.width-150,firetop.height-50);
  firetop.debug = true

  door= createSprite(1340,80,50,50);
  door.addImage(doorImg)
  door.visible = false;
  door.scale = 0.35;

  door2= createSprite(1340,340,50,50);
  door2.addImage(doorImg)
  door2.visible = false;
  door2.scale = 0.35;

  door3= createSprite(1300,220,50,50);
  door3.addImage(questI)
  door3.visible = false;
  door3.scale = 1.8;
  door3.setCollider("rectangle",-5,0.1,door3.width-350,door3.height-45);
  door3.debug = true;

  block1 = createSprite(300,300,50,50)
  block1.addImage(block1Img)
  block1.visible = false;
  block1.setCollider("rectangle",-10,10,10,0.1);
  block1.debug = true


  block2 = createSprite(500,200,50,50)
  block2.addImage(block2Img)
  block2.visible = false;

  block2.setCollider("rectangle",-10,0,block2.width-180,block2.height-30);
  block2.debug = true

  block3 = createSprite(700,300,50,50)
  block3.addImage(block3Img)
  block3.visible = false;

  block3.setCollider("rectangle",-10,10,block3.width-200,block3.height-50);
  block3.debug = true


  block4 = createSprite(1100,350,50,50)
  block4.addImage(block4Img)
  block4.visible = false;

  block4.setCollider("rectangle",-5,0.1,block4.width-90,block4.height-50);
  block4.debug = true

  block5 = createSprite(1000,180,50,20)
  block5.addImage(block5Img)
  block5.visible = false;

  block5.setCollider("rectangle",-5,0.1,block5.width-200,block5.height-45);
  block5.debug = false;


  //elements of gamestate 2
  block6 = createSprite(110,320,50,50)
  block6.addImage(block4Img)
  block6.visible = false;

  block6.setCollider("rectangle",-25,0.1,block4.width-120,block4.height-50);
  block6.debug = true

  block7 = createSprite(500,180,50,20)
  block7.addImage(block5Img)
  block7.visible = false;

  block7.setCollider("rectangle",-5,0.1,block7.width-200,block7.height-45);
  block7.debug = false;

  diamond = createSprite(700,130,1600,10);
  diamond.addImage(diamondI)
  diamond.visible = false;

   playbutton2 = createSprite(1000,300,50,50)
   playbutton2.addImage(playB)
   playbutton2.scale = 0.3;
   playbutton2.visible = false;

               option1 = createSprite(550,250,30,30)
               option1.shapeColor = "PINK";
               option1.visible = false

               option2 = createSprite(550,290,30,30)
               option2.shapeColor = "yellow";
               option2.visible = false

               option3 = createSprite(550,340,30,30)
               option3.shapeColor = "blue";
               option3.visible = false
               option4 = createSprite(550,390,30,30)
               option4.shapeColor = "red";
               option4.visible = false;



  coinGroup = new Group();
}

function draw() {
    background(255,255,255);  
   
  if(gameState === 0){
      background(bgImage);
      


      textFont("Impact")
      textSize(60)
      fill("White")
      text("ICE GIRL  V/S  THE FIRE WORLD",400,300);
      text("______________________",400,310)


      textSize(50)
      fill("white")
      text("WELCOME TO ",590,150)
      text("----------------------",550,180)

      if(mousePressedOver(playbutton)){
        gameState = 1;
        playbutton.visible = false;
      }  
  }
      

   if(gameState === 1){
      background(dayImg)

          //Display score
          textFont("Impact")
          fill("yellow");
          textSize(35);
          text("Score : "+ score,1200,480);
            
      fill("grey")
      textFont("Impact")
      textSize(40)
      text("STAGE-1",40,20,60,50)

      textFont("Ariel")
      textSize(20)
      fill("blue")
      text("Choose",1300,180,50,50)
      text("*One-Door*",1280,210,50,50)
   

      waterGirl.collide(invisibleGround)
      waterGirl.collide(invisibleGround2)
      waterGirl.collide(block1)
      waterGirl.collide(block2)
      waterGirl.collide(block3)
      waterGirl.collide(block4)
      waterGirl.collide(block5)
    

      waterGirl.visible = true;
   
      block1.visible = true;
      block2.visible = true;
      block3.visible = true;
      block4.visible = true;
      block5.visible = true;
      fire1.visible = true;
      fire2.visible = true;
      fire3.visible = true;
      firetop.visible =true;
      door.visible =true;
      door2.visible =true;
     
      //diamond.visible = true;
      
    

      if(keyDown("left_arrow")){
        waterGirl.x= waterGirl.x-8;
        waterGirl.changeAnimation("running",leftwaterGIRLimg);
        waterGirl.scale = 1.2;
        //waterGirl.changeAnimation("runninglef",runleft);
        //waterGirl.scale = 0.3;
      }

      if(keyDown("right_arrow")){
        waterGirl.x= waterGirl.x+8;
        waterGirl.changeAnimation("runningLeft",rightwaterGIRLimg,);
        waterGirl.scale = 1.2;
      }

      if(keyDown("up_Arrow") && waterGirl.y >= 30) {
        waterGirl.velocityY = -10;
        waterGirl.changeAnimation("runningUp",upWGI);
        waterGirl.scale = 0.6;
      }
      waterGirl.velocityY = waterGirl.velocityY + 4;

      if(waterGirl.isTouching(fire1)){

        waterGirl.changeAnimation("dying",smokeImg);
        waterGirl.x = 80;
        waterGirl.y = 340;
        
       

       
      }

      if(waterGirl.isTouching(fire2)){

        waterGirl.changeAnimation("dying",smokeImg);
        waterGirl.x = 80;
        waterGirl.y = 340;
        
      }
      if(waterGirl.isTouching(fire3)){

        waterGirl.changeAnimation("dying",smokeImg);
        waterGirl.x = 80;
        waterGirl.y = 340;
        
      }
      if(waterGirl.isTouching(firetop)){

        waterGirl.changeAnimation("dying",smokeImg);
        waterGirl.x = 80;
        waterGirl.y = 340;
        
      }
  
      if(waterGirl.isTouching(door)){
        
        textFont("Ariel")
        textSize(20)
        fill("yellow")
        text("congatulations ",200,100)
        gameState =2;

        waterGirl.x = 40;
        waterGirl.y = 280;
       
      }
        
      if(waterGirl.isTouching(door2)){
        waterGirl.x = 200;
        waterGirl.y = 200;
      }
       
      /*coins();

      if(waterGirl.isTouching(coin)){
        console.log("success")
         // coinGroup[0].destroy();
          score = score +10;
      }*/

       
   
  }


  else  if(gameState === 2){
          background(night)
          
          
          waterGirl.visible = true;
          waterGirl.collide(invisibleGround)

          textFont("Impact")
          textSize(40)
          fill("yellow")
          text("STAGE2 ",50,70)
       

          textFont("Impact")
          textSize(20)
          fill("yellow")
          text("DISCLAIMER-Use down arrow to stop ICE GIRL ",30,470)

         if(keyCode === UP_ARROW && waterGirl.y >= 30){
          waterGirl.velocityY = -5;
        waterGirl.changeAnimation("runningUp",upWGI);
        waterGirl.scale = 0.6;
       
        
      }
       waterGirl.velocityY = waterGirl.velocityY + 0.8;

      if(keyCode === LEFT_ARROW){
     waterGirl.x= waterGirl.x-4;
        waterGirl.changeAnimation("running",leftwaterGIRLimg);
        waterGirl.scale = 1.2;
    }

    if(keyCode === RIGHT_ARROW){
      waterGirl.x= waterGirl.x+4;
      waterGirl.changeAnimation("runningLeft",rightwaterGIRLimg,);
      waterGirl.scale = 1.2;
    }
    if(waterGirl.isTouching(block6)){
      textFont("Impact")
      textSize(40)
      fill("blue")
      text("Congratulations!! You have passed stage 1 ",50,120)
   

    }

      waterGirl.collide(block6)
      waterGirl.collide(block7)
  block6.visible = true
  block7.visible = true
  door3.visible = true

          block1.destroy()
          block2.destroy()
          block3.destroy()
          block4.destroy()
          block5.destroy()
          fire1.destroy()
          fire2.destroy()
          fire3.destroy()
          firetop.destroy()
          door.destroy()
          door2.destroy()
        
          if(waterGirl.isTouching(door3)){
            gameState=3;
          }
      
          

          edges = createEdgeSprites();
          waterGirl.bounceOff(edges[0])
          waterGirl.bounceOff(edges[1])

  }
 

      else if(gameState === 3){
              background(bg3)
              waterGirl.visible =false;
              block7.visible = false;
              block6.visible = false;
              door3.visible = false;

              textFont("Impact")
              textSize(60)
              fill("White")
              text("TEST YOUR KNOWLEDGE!!",100,100);
              
              textFont("Impact")
              textSize(30)
              fill("BLUE")
              text("AND ENTER THE BATTLE GROUND",100,140);
              
              textFont("Impact")
              textSize(40)
              fill("white")
              text("What is IceGirl's weakness?",500,200);


              textFont("Impact")
              textSize(30)
              fill("white")
              text("blocks",580,260);
              text("fire",580,300);
              text("doors",580,350);
              text("diamond",580,400);

              option1.visible = true;
              option2.visible = true;
              option3.visible = true;
              option4.visible = true;

                if(mousePressedOver(option1)){
                  playbutton2.visible = false;
                  
                  //sound

                }  

                if(mousePressedOver(option2)){
                  playbutton2.visible = true;
                  
                  //soun
                  textFont("Impact")
                  textSize(40)
                  fill("yellow")
                  text("Proceed To Play>>>",1000,400);
                } 
                if(mousePressedOver(option3)){
                  playbutton2.visible = false;
                  
                  //sound

                } 
                if(mousePressedOver(option4)){
                  playbutton2.visible = false;
                  
                  //sound

                } 
             
                if(mousePressedOver(playbutton2)){
                  
                  gameState = 4
                  playbutton2.visible = false;
                 
                  waterGirl.x = 40;
                  waterGirl.y = 280;
                 } 
                }

          else if(gameState === 4){
            background(danger)
            option1.visible = false;
            option2.visible = false;
            option3.visible = false;
            option4.visible = false;
           
           
          waterGirl.visible = true;
          waterGirl.collide(invisibleGround)

          textFont("Impact")
          textSize(40)
          fill("yellow")
          text("STAGE3 ",50,70)


          
         if(keyCode === UP_ARROW && waterGirl.y >= 30){
          waterGirl.velocityY = -5;
        waterGirl.changeAnimation("runningUp",upWGI);
        waterGirl.scale = 0.6;
       
        
      }
       waterGirl.velocityY = waterGirl.velocityY + 0.8;

      if(keyCode === LEFT_ARROW){
     waterGirl.x= waterGirl.x-4;
        waterGirl.changeAnimation("running",leftwaterGIRLimg);
        waterGirl.scale = 1.2;
    }

    if(keyCode === RIGHT_ARROW){
      waterGirl.x= waterGirl.x+4;
      waterGirl.changeAnimation("runningLeft",rightwaterGIRLimg,);
      waterGirl.scale = 1.2;
    }
          }

       

  drawSprites();
  
 
}

function coins(){
  for (var e = 240; e < 400; e=e+50) {
    coin = createSprite(e,260,20, 20);
    coin.addImage(coinImg);
    coin.scale = 0.1;
   // coinGroup.add(coin)
    coin.debug = true;
  }
  
  for (var d = 450; d < 600; d=d+50) {
    coin1= createSprite(d,110,20, 20);
    coin1.addImage(coinImg);
    coin1.scale = 0.1;
  
  }
  
  for (var c = 650; c < 800; c=c+50) {
  coin2 = createSprite(c,380,20, 20);
  coin2.addImage(coinImg);
  coin2.scale = 0.1;
  
  }
  
  for (var b = 900; b < 1150; b=b+50) {
  coin3 = createSprite(b,60,20, 20);
  coin3.addImage(coinImg);
  coin3.scale = 0.1;
  }
  for (var a = 1100; a < 1200; a=a+50) {
  coin4 = createSprite(a,290,20, 20);
  coin4.addImage(coinImg);
  coin4.scale = 0.1;
  
  
  
  }

  
}


