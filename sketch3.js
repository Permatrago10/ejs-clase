var total = 100; 
var x = 30;
var y = 30;
function setup(){
    console.log(setup);

    createCanvas(350, 350);
       background("black");
}
function draw(){
    while(total > 0){
        if(total % 10 == 0){
            x = 30;
            y = y + 30; 
        }else{
            x = x + 30;

        }
    ellipse(x, y, 25, 25);
    total = total -1 ;
    }
} 