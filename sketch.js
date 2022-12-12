//corre solo una vez cuando inicia el programa
function setup(){
    console.log("setup - frameCount:"+frameCount);
    
    createCanvas(900,900);
    background(125);


}

function draw(){
    console.log("draw - frameCount:"+frameCount);
    fill(10,200,175)
    triangle(775,625,450,150,125,625)
    fill(160,5,15);
    ellipse(height/2,width/2,450,450)
    fill(10,175,80)
    triangle(600,325,300,325,450,700)
  
    
}
