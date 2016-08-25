var shieldColors = [0xffffff, 0x6e6e6e, 0xf4eaa2, 0xb58657, 0xb7d9b8, 0x9fd1ec];
var shieldPartA =[1,0,0];
var shieldPartB =[1,0,0];
var shieldPartC =[1,0,0];
var shieldPartD =[1,0,0];
var shieldMainInfo = [shieldPartA, shieldPartB, shieldPartC, shieldPartD];

var baseMesh;
var frameMesh;
var symbolMesh;
var boltMesh;

var baseColor = 0xffffff;
var frameColor = 0xffffff;
var symbolColor = 0xffffff;
var boltColor = 0xffffff;

var baseMat;
var frameMat;
var symbolMat;
var boltMat;

var currentMenuID = 1;
var mmIcon01;
var mmIcon02;
var mmIcon03;
var mmIcon04;
var smIcon01;
var smIcon02;
var smIcon03;
var smIcon04;
var color01;
var color02;
var color03;
var color04;
var color05;
var color06;
var topRowText;
var topRowText2;
var rotationDiv;
var mainModelDiv;
var colorDiv;

function getElements(){
    mmIcon01 = document.getElementById('mmIcon01') ;
    mmIcon02 = document.getElementById('mmIcon02') ;
    mmIcon03 = document.getElementById('mmIcon03') ;
    mmIcon04 = document.getElementById('mmIcon04') ;

    smIcon01 = document.getElementById('smIcon01') ;
    smIcon02 = document.getElementById('smIcon02') ;
    smIcon03 = document.getElementById('smIcon03') ;
    smIcon04 = document.getElementById('smIcon04') ;

    color01 = document.getElementById('color01') ;
    color02 = document.getElementById('color02') ;
    color03 = document.getElementById('color03') ;
    color04 = document.getElementById('color04') ;
    color05 = document.getElementById('color05') ;
    color06 = document.getElementById('color06') ;

    topRowText = document.getElementById('topRowText') ;
    topRowText2 = document.getElementById('topRowText2') ;

    rotationDiv = document.getElementById('rotationDiv') ;
    mainModelDiv = document.getElementById('mainModelDiv') ;
    colorDiv = document.getElementById('colorDiv') ;

    createRotationDiv(currentMenuID);
    changeColors();
    init();
    animate();
}

function bottomMenu(num){
    currentMenuID = num;
    switch (currentMenuID) {
        case 0: topRowText.innerHTML = "base"; break;
        case 1: topRowText.innerHTML = "frame"; break;
        case 2:  topRowText.innerHTML = "symbol"; break;
        case 3: topRowText.innerHTML = "bolt"; break;
        }

    // ternary if
    mmIcon01.src = "img/mm_01_" + (currentMenuID === 0 ? "b" : "a") + ".png";
    mmIcon02.src = "img/mm_02_" + (currentMenuID === 1 ? "b" : "a") + ".png";
    mmIcon03.src = "img/mm_03_" + (currentMenuID === 2 ? "b" : "a") + ".png";
    mmIcon04.src = "img/mm_04_" + (currentMenuID === 3 ? "b" : "a") + ".png";
    topRowText2.innerHTML = currentMenuID +1;
    createRotationDiv(currentMenuID);
    changeModelIcons();
    changeColors();

}

