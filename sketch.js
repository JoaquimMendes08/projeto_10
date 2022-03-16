var jogador, rua;
var jogadorImg, ruaImg;
var borda1, borda2;


function preload() {
    //imagens pré-carregadas
    ruaImg = loadImage("rua.png");
    
    jogadorImg = loadAnimation("corredor1.png", "corredor2.png");
    
}


function setup() {
    createCanvas(400, 400);
    //crie sprite aqui
    rua = createSprite(200, 100, 100, 100);
    rua.addImage(ruaImg);
    rua.scale = 1.2
    rua.velocityY = 8

    borda1 = createSprite(34, 200, 40, 400);
    borda2 = createSprite(375, 200, 40, 400);

    jogador = createSprite(200, 300, 100, 100);
    jogador.addAnimation("correndo", jogadorImg);
    jogador.scale = 0.07


}
createEdgeSprites();
function draw() {
    jogador.position.x = mouseX;
    background("green");

   

     if (rua.y > 400) {
        rua.y = width / 4;
    }
    borda1.visible = false
    borda2.visible = false


    jogador.bounceOff(borda1);
    jogador.bounceOff(borda2);


    drawSprites();

}