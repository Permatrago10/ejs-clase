function setup(){
    console.log(setup);

    createCanvas(500, 200);
       background(125);
}
function draw(){
    var x = 50;

    while(x<width-25){
    ellipse(x, height/2, 25, 25);
    x = x + 50;  
    }
} 