$("document").ready(function(){

  $('#switch').click(function(){
  // console.log('sss')
  $('.menu').slideToggle(200);
})

var counter = 0;

$(".grid").hover(function(){
  if (counter%2 == 0){
    $(this).children().show()
  }

  if (counter%2 == 1){
    $(this).children().hide()
  }
  counter = counter + 1;
  
})




});



// version01

var circleX=15;
var circleY=20;
var r=255, g=0, b=0;
var canvas;


function setup() {
  canvas=createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style('z-index','-1');
  canvas.style('position','fixed');

}
function draw() {
  frameRate(4)
  stroke('rgba(204,153,153,0.5)');
  strokeWeight(1.5);

  fill('rgba(255,255,255, 0.2)')
  circleX=circleX+3;
  circleY=circleY+5;
  circle(circleX, circleY, 40);
  
}
function windowResized(){
    resizeCanvas(windowWidth, windowHeight)
}

function mousePressed(){
  stroke(204,153,153);
  strokeWeight(1.5);
  circleX=mouseX;
  circleY=mouseY;
  r=random(255);
  g=random(255);
  b=random(255);
  background(color(r,g,b,20))
  }





  // version02

// var i;
// var canvas;

// function setup() {
//   canvas=createCanvas(windowWidth, windowHeight);
//   canvas.position(0,0);
//   canvas.style('z-index','-1');
//   canvas.style('position','fixed');
//   background(220);
//    for(let y=10;y<windowHeight;y+=20){
//      for(let x=10;x<windowWidth;x+=15){
//         fill(random(255),random(255),random(255),10);
//      noStroke();
//   circle(x,y,random(50));
//     }}
// }
// function windowResized(){
//     resizeCanvas(windowWidth, windowHeight)
// }
// function draw(){
//   fill(random(255),random(255),random(255),20)
//   circle(mouseX,mouseY,random(220))
// }
