//your parameter variables go here!
let brownB = 125;    //x value
let bbY  =125;       //y value
let blackB =-100;    //x value
let blbY =-40;       //y value
let whiteB =15;      //x vule
let wBY   =45;       //y value
let whiteCol = false  //colour change for if statment

function setup_wallpaper(pWallpaper) {
//pWallpaper.output_mode(DEVELOP_GLYPH);
pWallpaper.output_mode(GRID_WALLPAPER);
  
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 0;
}

function wallpaper_background() {
  background(168, 74, 50); //A paler burnt umber colour,  168, 74, 50-background colour 1, 211 117 86-background colour 2
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
scale(0.7,0.7)
  drawBearw(whiteB,wBY) //polar bear

//scale(0.5,0.5)
drawBears(brownB,bbY) //brown bear

//scale(0.5,0.5)
drawBear(blackB,blbY)  //blackbear


}

function drawBears(xPos=0,yPos=0) {   //draws the brownbear, colSetting, //fill(colSetting);

translate(xPos,yPos);

//scale(0.5,0.5)
fill(206, 149, 119)
stroke(225,203,195)
circle(70,75, 40,40,brownB)  //ear
circle(130,75, 40,40,brownB)// ear

fill(191, 130, 101)
stroke(225,203,195)
circle(70,73, 20,20,brownB)  //inner ear
circle(130,73, 20,20,brownB) //inner ear

 fill(206, 149, 119)
  ellipse(100, 110, 100, 80,brownB) //face

  fill(0)
  ellipse(75, 112, 10, 20,brownB) // eyes
   ellipse(125, 112, 10, 20,brownB)
   ellipse(100, 125, 10,10,brownB)  //mouth

    fill(255, 190, 188)
    stroke(255, 190, 188,brownB)
   ellipse(67,126, 18, 10,brownB)     //cheeks
   ellipse(133,126, 18, 10,brownB)
translate(-xPos,-yPos);
}
function drawBear(xPos=0,yPos=0) {  //draws the black bear, colSetting

translate(xPos,yPos);
//fill(colSetting);

      
stroke(47, 14, 7)

let whiteCol = false 

fill(119, 73, 54) //normal colour

if(whiteCol){    //hehehehe pulled off an if sttament

  fill(242, 223, 206);  //white bear colours
}

circle(70,75, 40,40)  //ear
circle(130,75, 40,40)// ear

fill(128, 77, 32)
stroke(101, 58, 42)
circle(70,73, 20,20)  //inner ear
circle(130,73, 20,20) //inner ear

fill(119, 73, 54)


if(whiteCol){

  fill(242, 223, 206);  //white bear colours
}
  ellipse(100, 110, 100, 80) //face

  fill(0)
  ellipse(75, 112, 10, 20) // eyes
   ellipse(125, 112, 10, 20)
   ellipse(100, 125, 10,10)  //mouth

    fill(255, 190, 188)
    stroke(255, 190, 188)
   ellipse(67,126, 18, 10)     //cheeks
   ellipse(133,126, 18, 10)

}
function drawBearw(xPos=0,yPos=0) {   //draws the polar bear, colSetting

translate(xPos,yPos);
//fill(colSetting);
 fill(255,240,219)
stroke(225,203,195)
circle(70,75, 40,40)  //ear
circle(130,75, 40,40)// ear

fill(238,217,196)
stroke(225,203,195)
circle(70,73, 20,20)  //inner ear
circle(130,73, 20,20) //inner ear

 fill(255,240,219)
  ellipse(100, 110, 100, 80) //face

  fill(0)
  ellipse(75, 112, 10, 20) // eyes
   ellipse(125, 112, 10, 20)
   ellipse(100, 125, 10,10)  //mouth

    fill(255, 190, 188)
    stroke(255, 190, 188)
   ellipse(67,126, 18, 10)     //cheeks
   ellipse(133,126, 18, 10)
translate(-xPos,-yPos);
}