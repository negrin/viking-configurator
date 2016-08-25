function createRotationDiv(){
    rotationDiv.innerHTML = "<div class='settingstext'>Rotation</div>" +
    "<div class='flex-container'>" +
    "<div class='rotationRangeDiv'>" +
    "<input id='rotationRange' type='range' max='360' value='"+ shieldMainInfo[currentMenuID][2] +"' oninput='changeRotationValue(this.value)'>" +
    "</div></div>";
}


function changeRotationValue(num){
    shieldMainInfo[currentMenuID][2] = num;
    updateMeshInfo();
}

function changeModelIcons(){
    smIcon01.src =  "img/sm_"+(currentMenuID === 0 ? "base" : "" )+(currentMenuID === 1 ? "none" : "")+(currentMenuID === 2 ? "none" : "")+(currentMenuID === 3 ? "none" : "")+"_01_"+ (shieldMainInfo[currentMenuID][0] ===0 ? "B" :"A") +".png";
    smIcon02.src =  "img/sm_"+(currentMenuID === 0 ? "none2" : "" )+ (currentMenuID === 1 ? "frame" : "" )+(currentMenuID === 2 ? "symbol" : "")+(currentMenuID === 3 ? "bolt" : "")+"_01_"+ (shieldMainInfo[currentMenuID][0] === 1 ? "B" :"A") +".png";
    smIcon03.src =  "img/sm_"+(currentMenuID === 0 ? "none2" : "" )+ (currentMenuID === 1 ? "frame" : "" )+(currentMenuID === 2 ? "symbol" : "")+(currentMenuID === 3 ? "bolt" : "")+"_02_"+ (shieldMainInfo[currentMenuID][0] === 2 ? "B" :"A") +".png";
    smIcon04.src =  "img/sm_"+(currentMenuID === 0 ? "none2" : "" )+ (currentMenuID === 1 ? "frame" : "" )+(currentMenuID === 2 ? "symbol" : "")+(currentMenuID === 3 ? "bolt" : "")+"_03_"+ (shieldMainInfo[currentMenuID][0] === 3 ? "B" :"A") +".png";
}

function changeModelValue(num){
    shieldMainInfo[currentMenuID][0] = num;
    changeModelIcons();
    loadMesh();
}

function changeColors(){
    color01.className = (shieldMainInfo[currentMenuID][1] === 0 ? "color-circle circle-border" :"color-circle");
    color02.className = (shieldMainInfo[currentMenuID][1] === 1 ? "color-circle circle-border" :"color-circle");
    color03.className = (shieldMainInfo[currentMenuID][1] === 2 ? "color-circle circle-border" :"color-circle");
    color04.className = (shieldMainInfo[currentMenuID][1] === 3 ? "color-circle circle-border" :"color-circle");
    color05.className = (shieldMainInfo[currentMenuID][1] === 4 ? "color-circle circle-border" :"color-circle");
    color06.className = (shieldMainInfo[currentMenuID][1] === 5 ? "color-circle circle-border" :"color-circle");
}

function changeColorValue(num){
    shieldMainInfo[currentMenuID][1] = num;
    changeColors();
    updateMeshInfo();
}

function updateMeshInfo(){
    //rotation
    baseMesh.rotation.z = shieldMainInfo[0][2] * Math.PI / 180 * -1;
    frameMesh.rotation.z = shieldMainInfo[1][2] * Math.PI / 180 * -1;
    symbolMesh.rotation.z = shieldMainInfo[2][2] * Math.PI / 180 * -1;
    boltMesh.rotation.z = shieldMainInfo[3][2] * Math.PI / 180 * -1;
    //color
    baseMat.material.color.setHex(shieldColors[shieldMainInfo[0][1]]);
    frameMat.material.color.setHex(shieldColors[shieldMainInfo[1][1]]);
    symbolMat.material.color.setHex(shieldColors[shieldMainInfo[2][1]]);
    boltMat.material.color.setHex(shieldColors[shieldMainInfo[3][1]]);

    baseColor = shieldColors[shieldMainInfo[0][1]];
    frameColor = shieldColors[shieldMainInfo[1][1]];
    symbolColor = shieldColors[shieldMainInfo[2][1]];
    boltColor = shieldColors[shieldMainInfo[3][1]];

    changeColors();
}

