var parteSuperiorX = 0;
var parteSuperiorY = 0;

var parteInferiorX = 0;
var parteInferiorY = 0;

var bochechaEY = 0;
var bochechaEX = 0;

var bochechaDY = 0;
var bochechaDX = 0;

function preload(){
    linkBochechaDireita = loadImage("https://i.postimg.cc/qB6hr97L/bochechas.png");
    linkBochechaEsquerda = loadImage("https://i.postimg.cc/3wj3fgC5/bochecha2.png");
    linkI = loadImage("https://i.postimg.cc/3WM3rSnf/parte-inferior.png");
    linkS = loadImage("https://i.postimg.cc/7PR6QXM2/parte-superior.png");
}

function draw(){
    image(vd, 0, 0, 400,400);
    image(linkBochechaDireita, bochechaDX,bochechaDY,70,70);
    image(linkBochechaEsquerda, bochechaEX,bochechaEY,70,70);
    image(linkI, parteInferiorX,parteInferiorY,300,300);
    image(linkS, parteSuperiorX,parteSuperiorY,200,200);
}

function setup(){
    cnv = createCanvas(400, 400);
    cnv.center();
    vd = createCapture(VIDEO);
    vd.size(400, 400);
    vd.hide();
    poseNet = ml5.poseNet(vd, carregarModelo);
    poseNet.on('pose', pegarPoses);
}

function carregarModelo(){
    console.log("Modelo carregado = )")
}

function pegarPoses(resultado){
    console.log(resultado)
    if(resultado.length > 0){
        //parte superior
        parteSuperiorX = resultado[0].pose.nose.x-100;
        console.log("A posição X é:", parteSuperiorX);
        parteSuperiorY = resultado[0].pose.nose.y - 150;
        console.log("A posição Y é:", parteSuperiorY);
        //parte inferior
        parteInferiorX = resultado[0].pose.nose.x-150;
        console.log("A posição X é:", parteInferiorX);
        parteInferiorY = resultado[0].pose.nose.y;
        console.log("A posição Y é:", parteInferiorY);
        //bochecha esquerda
        bochechaEX = resultado[0].pose.leftEye.x-100;
        console.log("A posição X é:", bochechaEX);
        bochechaEY = resultado[0].pose.leftEye.y + 10;
        console.log("A posição Y é:", bochechaEY);
        //bochecha direita
        bochechaDX = resultado[0].pose.rightEye.x+20;
        console.log("A posição X é:", bochechaDX);
        bochechaDY = resultado[0].pose.rightEye.y + 10;
        console.log("A posição Y é:", bochechaDY);
    }
}
function salvar(){
    save("filtro da copa.png")
}