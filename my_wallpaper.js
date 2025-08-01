//your parameter variables go here!

let whiteCol = [255,255,255];
let brownCol = [206, 149, 119];
let blackbear = [119, 73, 54]
let bBears = (0.7,0.7)
let wBear  = (0.5,0.5)


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  //pWallpaper.output_mode(GRID_WALLPAPER);
  
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(242, 55, 40); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
scale(wBear,0.5,0.5)
  drawBears(whiteCol,25,15)
scale(bBears,0.7,0.7)
  drawBears(brownCol) 
  drawBear (blackbear,140,140)

if(wBear>0.5,0.5) {
drawBear=35, 15;

} else {


}
    

  
}



function drawBears(colSetting,xPos=0,yPos=0) {

translate(xPos,yPos);
fill(colSetting);
 //fill(255,240,219)
stroke(225,203,195)
circle(70,75, 40,40)  //ear
circle(130,75, 40,40)// ear

//fill(238,217,196)
stroke(225,203,195)
circle(70,73, 20,20)  //inner ear
circle(130,73, 20,20) //inner ear

 //fill(255,240,219)
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
function drawBear(colSetting,xPos=0,yPos=0) {

translate(xPos,yPos);
fill(colSetting);

 //fill(206, 149, 119)
stroke(47, 14, 7)
circle(70,75, 40,40)  //ear
circle(130,75, 40,40)// ear

//fill(191, 130, 101)
stroke(101, 58, 42)
circle(70,73, 20,20)  //inner ear
circle(130,73, 20,20) //inner ear

 //fill(206, 149, 119)
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