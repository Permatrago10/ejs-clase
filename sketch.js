//corre solo una vez cuando inicia el programa
function setup(){
    console.log("setup");
    
    //createCanvas: ancho, alto en píxeles
    createCanvas(1000,1000);
background(180);
    //background RGB : Define el color del fondo
    // RED --> background(255,0,0);
    // GREEN --> background(0,255, 0);
    // BLUE --> background(0,255, 0);

}

//corre continuamente después de la función setup
function draw(){
    clear();
    ellipse(mouseX, mouseY, 500, 500)
if((mouseX<500)&&(mouseY<500)){
    fill(color("red"));
}else if((mouseX<500)&&(mouseY>500)){
    fill(color("yellow"));
}else if((mouseX>500)&&(mouseY<500)){
    fill(color("lime"));
}else if((mouseX>500)&&(mouseY>500)){
    fill(color("turquoise"));
    
}

}
