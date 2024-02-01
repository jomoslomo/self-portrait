let vol = 0;
var xoff= 0;
let r =150;
let n = 120;
function preload(){
  //img = loadImage("Untitled.PNG");
}
function setup() {
   createCanvas(700, 700);
  colorMode(RGB);
  slider = createSlider(-500, 500, 255/2);
  slider.position(10,10);
  slider.style('width', '100px');
  
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  let val = slider.value();
  background(cos(val), cos(val), val);  

  push();
  for (var y = 0; y < height; y += 10) {
    for (var x = 0; x < width; x += 10) {
      stroke(noise(x, y, val)*mouseX, val, -val);
      var d = noise(x, y, random(mouseX)/val)*(TWO_PI*6.0);
       line(x, y, (sin(d)*100)+x, (cos(d)*100)+y)
    }
  }
  pop();
  
  
  
  
  let v = mic.getLevel(1);   
 vol += (v-vol)/3;   


  
  //let v = mic.getLevel();
  console.log(mouseX + ", " + mouseY);
  
  
  var z = map(noise(xoff), 0, 1, 0, width);
  
  
  
  xoff += 0.01;
  
  //translate(30,0);
  
  
  
  //back hair
  push();
  fill(82,0+vol*100,0+vol*500,255);
  beginShape();
  vertex(225,560);
  bezierVertex(210,575, 190,580, 205,560);
  bezierVertex(205,555, 185,540, 175,530);
  bezierVertex(185,550, 150,535, 170,510);
  bezierVertex(160, 520,155,525, 125,525);
  bezierVertex(150,525, 145,500, 130,495);
  bezierVertex(125,490, 110,480, 115,460);
  bezierVertex(90,485, 95,460, 115,440);
  bezierVertex(115,430, 40,400, 70,365);
  bezierVertex(50,375, 30,390, 45,355);
  bezierVertex(55,340, 60,330, 40,290);
  bezierVertex(20,220, 30,185, 100,150);
  bezierVertex(50,135, 90,140, 120,120);
  bezierVertex(125,75, 175,40, 230,45);
  bezierVertex(250,25, 280,10, 350,30);
  bezierVertex(365,40, 380,45, 420,30);
  bezierVertex(420,45, 425,50, 465,85);
  bezierVertex(465,90, 475,130, 520,150);
  bezierVertex(515,180, 555,220, 530,290);
  bezierVertex(550, 365,  525,345, 545,350);
  bezierVertex(515,390, 545,410, 490,455);
  bezierVertex(455,465, 455,495, 440,535);
  endShape();
  pop();

  //hoodie black
  push();
  noStroke();
  fill('black')
  beginShape();
  vertex(150,570);
  bezierVertex(180,570, 200,575, 290,590);
  bezierVertex(310,590, 445,555, 600,510);
  bezierVertex(440,630, 375,640, 295,700);
  endShape();
  pop();
  
  //hoodie back
  push();
  beginShape();
  fill(48, 39, 102);
  vertex(150,570);
  bezierVertex(180,570, 200,575, 290,590);
  bezierVertex(310,590, 445,555, 600,510);
  endShape();
  pop();
  

  
  //neck   
  push();
  fill(255 +vol*500,224+vol*500,180);
  beginShape();
  vertex(200, 465);
  bezierVertex(220,550, 240,600, 210,630);
  bezierVertex(235,650, 265,680, 310,700);
  bezierVertex(415,655, 420,640, 480,590);
  bezierVertex(420,540, 420,505, 420,400);
  endShape(CLOSE);
  pop();
  
  push();
  beginShape();
  strokeWeight(4);
  vertex(310,700);
  bezierVertex(380,650, 420,660, 480,600);
  bezierVertex(540,635, 430,680, 370,700);
  endShape(CLOSE);
  pop(); 
  
  push();
  strokeWeight(4);
  noFill();
  beginShape();
  vertex(200,465);
  bezierVertex(220,570, 240,620, 270,680);
  endShape();
  beginShape();
  vertex(417.5,400);
  bezierVertex(425,500, 430,540, 450,595);
  endShape();
  beginShape();
  vertex(225,575);
  quadraticVertex(225,605, 215,630);
  endShape();
  pop();
  
  
  //image(img, 0, 0, img.width, img.height);  

  
  
  //hoodie
  push();
  strokeWeight(2);
  fill(32, 15, 69);
  beginShape();
  vertex(365,700);
  bezierVertex(420,655, 550,470, 610,520);
  bezierVertex(720,690, 610,615, 470,700);
  endShape();
  
  
  
  //hoodielines
  vertex(305,700);
  bezierVertex(200,625, 190,605, 180,590);
  bezierVertex(170,577.5,160,575, 150,570);
  bezierVertex(125,610, 100,620, 75,630);
  bezierVertex(55,665, 30,660, 0,680);
  bezierVertex(-120,740, 115,700, 305,700);
  endShape();
  
  
  //hoodie bottom right
  beginShape();
  
  vertex(470,700);
  bezierVertex(615,615, 670,550, 700,700);
  endShape(CLOSE);
  
  //hoodie line left
  strokeWeight(4);
  line(45,660, 125,700);
  pop();
  
  
  //hoodie lines
  push();
  strokeWeight(2);
  line(85,635, 100,645);
  line(100,635, 105,645)
  line(110,640, 120,655);
  line(120,645, 150,665);
  line(160,660, 220,695);
  line(615,570, 415,690);
  line(535,580, 460,635);
  line(515,600, 510,615);
  line(505,605, 500,625);
  line(495,615, 490,635);
  line(485,620, 480,645);
  line(475,625, 470,650);
  line(465,635, 460,655);
  line(445, 670, 455,645);
  pop();
  
  
  
  //face outline
  fill(255 +vol*500,224+vol*500,180);
  beginShape();
  vertex(160, 340);
  bezierVertex(170,440, 200,470, 260, 540);
  bezierVertex(330,580, 385,520, 440, 340);
  bezierVertex(420,100, 140,100, 160,340);
  endShape();
  // fill('white')
  // ellipse(290,470, 20)
  
  //lips
  push();
      fill('black');
      ellipse(292.5,470-vol*n/2, 95-vol*0.5,20+vol*140);
    fill('white');
    ellipse(292.5, 465+vol*n, 90,20); 
    translate(-0,-vol*35);
    fill('white');
    ellipse(292.5, 465-vol*n/4, 100,20-vol*10);
    fill(241,230,216);
    beginShape();
      vertex(240-vol*n/2,465-vol*n/2);
      bezierVertex(260,440, 280,450-vol*n/2, 290,455-vol*n/2);
      bezierVertex(305,450-vol*n/2, 320,440, 345+vol*n/2,465-vol*n/2);
    endShape(CLOSE);
  pop();
  
  push();
    beginShape();
      fill(241,230,216,255);
      vertex(345+vol*n,465-vol*n);
      bezierVertex(330,475+vol*n, 315,500+vol*n, 270,490+vol*n);
      bezierVertex(260,485+vol*n, 255,480+vol*n, 240-vol*n,465-vol*n);
      bezierVertex(245-vol*n,470-vol*n, 265,460+vol*n, 290,470+vol*n);
      bezierVertex(295,470+vol*n, 315,460+vol*n, 345+vol*n,465-vol*n);
    endShape();
  pop();
  
   
  
  //nose
  beginShape();
  line(280,350, 275,380);
  line(305,355, 310,380);
  vertex(265,405);
  bezierVertex(250,425, 285,430, 290,440+vol*12);
  vertex(295,440+vol*12);
  bezierVertex(305,420, 330,420, 315,405);
  endShape();
  
  let sec = second();
  
  //left eye
  push();
  noStroke();
  fill('white');
  strokeWeight(5);
  beginShape();
  vertex(185,325);
  bezierVertex(205,310, 245,300, 270,335);
  bezierVertex(240,355, 205, 355, 185,325);
  endShape();
  pop();
  
  push();
  fill(145+vol*1300,72,11);
  strokeWeight(2);
  ellipse(225,330, 30);
  fill('black');
  ellipse(225,330,5+vol*45);
  fill('white');
  ellipse(230,322.5,8);
  pop();
  
  
  
  //right eye
  push();
  noStroke();
  fill('white');
  strokeWeight(5);
  beginShape();
  vertex(400,325);
  bezierVertex(380,310, 340,300, 315,335);
  bezierVertex(345,355, 380,355, 400,325);
  endShape();
  pop();
  
  push();
  fill(145+vol*1300,72,11);
  strokeWeight(2);
  ellipse(355,330, 30);
  fill('black');
  ellipse(355,330,5+vol*45);
  fill('white');
  ellipse(347.5,325, 8);
  pop();
  

  
  //left eye line
  push();
  let iX = 190;
  let iY = 320
  strokeWeight(6);
  noFill();
  beginShape();
  vertex(iX,iY);
  bezierVertex(iX+10, iY-5, iX+40,iY-30, iX+75, iY+10);
  endShape();
  pop();
  
  push();
  noFill();
  strokeWeight(4);
  beginShape();
  vertex(iX, iY+10);
  bezierVertex(iX+5,iY+15, iX+10,iY+45, iX+65,iY+22.5);
  endShape();
  pop();
  
  let iXr = 395;
  let iYr = 320;
  //right eye line
  push();
  
  strokeWeight(6);
  noFill();
  beginShape();
  vertex(iXr,iYr);
  bezierVertex(iXr-10, iYr-5, iXr-40,iYr-30, iXr-75, iY+10);
  endShape();
  pop();
  push();
  noFill();
  strokeWeight(4);
  beginShape();
  vertex(iXr, iYr+10);
  bezierVertex(iXr-5,iYr+15, iXr-10,iYr+45, iXr-65,iYr+22.5);
  endShape();
  pop();
  
  
  // vertex(185,325);
  // bezierVertex(205,310, 245,300, 270,335);
  // bezierVertex(240,355, 205, 355, 185,325);
  
  
  if(sec%6==0){
   
    //eyelid left
    push();
  noStroke();
  fill(143, 125, 101);
  strokeWeight(5);
  beginShape();
  vertex(185,320);
  bezierVertex(205,300, 245,290, 270,330);
  bezierVertex(240,355, 205, 355, 185,325);
  endShape();
  pop();
   
  //eyelid right
   push();
  noStroke();
  fill(143, 125, 101);
  strokeWeight(5);
  beginShape();
  vertex(400,320);
  bezierVertex(380,300, 340,290, 315,330);
  bezierVertex(345,355, 380,355, 400,325);
  endShape();
  pop();
    
    //blink left bottom line
     push();
  strokeWeight(6);
    stroke(0);
  noFill();
  strokeWeight(6);
  beginShape();
  vertex(iX, iY+10);
  bezierVertex(iX+5,iY+15, iX+10,iY+45, iX+80,iY+15);
  endShape();
  pop();
    
   // blink right bottom line
  push();
  strokeWeight(6);
  noFill();
  stroke(0);
  beginShape();
  vertex(iXr, iYr+10);
  bezierVertex(iXr-5,iYr+15, iXr-10,iYr+45, iXr-80,iYr+15);    
  endShape();
  pop();
  }
  
  

  
  //left eyebrow
  push();
  fill('black');
  beginShape();
  vertex(180,290);
  bezierVertex(200,285, 245,285-vol*120, 280,290);
  bezierVertex(275,300, 225,300-vol*120, 180,295);
  endShape();
  pop();
  
  //right eyebrow
  push();
  beginShape();
  fill('black');
  vertex(420,290);
  bezierVertex(400,285, 355,285-vol*120, 320,290);
  bezierVertex(325,300, 350,300-vol*120, 420,295);
  endShape();
  pop();

  
  
//   push();
//    beginShape();
//  for (var y = 430; y < 460; y++) {
//     for (var x = 205; x < 375; x++) { //create a grid of lines
//       stroke(noise(x / 100.0, y / 100.0, millis()/3000.0) * 360.0, 255, 255);
//       //color the lines with a noise field
//       var direction = noise(x / 250.0 + millis()/6000.0, y * 250.0, millis()/10000.0)*(TWO_PI*2.0);
//       //calculate direction of the hair using noise * 2PI then *2 for more motion
//       line(x, y, (sin(direction)*50.0)+x, (cos(direction)*50.0)+y);
      
//       //draw lin from grid point to new point determined by direction plus offset
//     }
//   }
//    endShape();
//  pop();
  
  
  
  //hair front
  push();
  fill(82,0+vol*100,0+vol*500,255);
  beginShape();

  
  vertex(235,200);
  bezierVertex(230,180, 180,190, 190,240);
  bezierVertex(195,250, 195,290, 170,305);
  bezierVertex(160,320, 165,335, 175,345);
  bezierVertex(155,330, 145,310, 150,280);
  bezierVertex(145,315, 150,330, 160,350);
  bezierVertex(160,360, 160,360, 155,365);
  bezierVertex(145,370, 140,375, 135,390);
  bezierVertex(130,380, 140,365, 130,350);
  bezierVertex(135,330, 130,345, 135,360);
  bezierVertex(125,360, 110,350, 105,325);
  bezierVertex(105,310, 120,300, 120,280);
  bezierVertex(115,260, 110,245, 125,205);
  bezierVertex(180,140, 260,125, 235, 200);
  endShape();
  
  //front hair 
  beginShape();
  vertex(235, 200);
  bezierVertex(255,180, 260,185, 285,190);
  bezierVertex(290,200, 290,220, 280,255);
  bezierVertex(275,270, 280,285, 290,290);
  bezierVertex(295,295, 300,315, 295,330);
  bezierVertex(295,340, 310,360, 325,365);
  bezierVertex(310,355, 315,335, 330,315);
  bezierVertex(335,310, 325,285, 310,270);
  bezierVertex(310,260, 315,245, 325,232.5);
  bezierVertex(325,225, 320,210, 315,200);
  bezierVertex(320,205, 330,220, 335,265);
  bezierVertex(325,285, 335,305, 360,315);
  bezierVertex(355,285, 365,275, 375,265);
  bezierVertex(385,255, 380,230, 390,215);
  bezierVertex(390,260, 380, 290, 405,320);
  bezierVertex(415,330,410,360, 425,395);
  bezierVertex(410,355, 475,330, 440,290);
  bezierVertex(430,280, 435,270, 445,240);
  bezierVertex(450,245, 440,270, 450,295);
  bezierVertex(460,315, 450,335, 440,350);
  bezierVertex(435,360, 445,380, 450,405);
   bezierVertex(475,390, 460,340, 485, 320);
  bezierVertex(470,150, 330,80, 230,150);
  endShape();
  pop();
  
 
  
  
  
  


  
  
  
  
  
  
  
  
}