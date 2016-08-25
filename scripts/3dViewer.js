var scene, camera, renderer;
var currentMesh;
var currentMeshNum = 0;
var loader = new THREE.OBJLoader();
var texLoader = new THREE.TextureLoader();

var texture1 = texLoader.load('mesh/Textures/Mat_02_Base_Color.png');
var texture2 = texLoader.load('mesh/Textures/Mat_02_Metallic.png');
var texture3 = texLoader.load('mesh/Textures/Mat_02_Normal.png');
var texture4 = texLoader.load('mesh/Textures/Mat_02_Roughness.png');
var texture5 = texLoader.load('mesh/Textures/HDRI.png');
var texture6 = texLoader.load('mesh/Textures/shadow.png');

var light2;
//change the mesh in the scene
function loadMesh(){

    texture5.mapping = THREE.SphericalReflectionMapping;

    loader.load( 'mesh/base_'+ shieldMainInfo[0][0] +'.obj', function(mesh){
        if (baseMesh) {
            scene.remove(baseMesh);
        }
        baseMesh = mesh;
        mesh.traverse(function(child) {
            baseMat = child;
            baseMat.material = new THREE.MeshStandardMaterial({color: baseColor,roughness : 1, metalness: 1, map: texture1, metalnessMap :texture2, normalMap: texture3, roughnessMap: texture4, envMap: texture5});
            baseMesh.rotation.z = shieldMainInfo[0][2] * Math.PI / 180 * -1;
                scene.add(mesh);});});

    loader.load( 'mesh/frame_'+ shieldMainInfo[1][0] +'.obj', function(mesh){
        if (frameMesh) {
            scene.remove(frameMesh);
        }
        frameMesh = mesh;
        mesh.traverse(function(child) {
            frameMat = child;
            frameMat.material = new THREE.MeshStandardMaterial({color: frameColor,roughness : 1, metalness: 1, map: texture1, metalnessMap :texture2, normalMap: texture3, roughnessMap: texture4, envMap: texture5});
            frameMesh.rotation.z = shieldMainInfo[1][2] * Math.PI / 180 * -1;
            scene.add(mesh);});});

    loader.load( 'mesh/symbol_'+ shieldMainInfo[2][0] +'.obj', function(mesh){
        if (symbolMesh) {
            scene.remove(symbolMesh);
        }
        symbolMesh = mesh;
        mesh.traverse(function(child) {
            symbolMat = child;
            symbolMat.material = new THREE.MeshStandardMaterial({color: symbolColor,roughness : 1, metalness: 1, map: texture1, metalnessMap :texture2, normalMap: texture3, roughnessMap: texture4, envMap: texture5});
            symbolMesh.rotation.z = shieldMainInfo[2][2] * Math.PI / 180 * -1;
            scene.add(mesh);});});

    loader.load( 'mesh/bolt_'+ shieldMainInfo[3][0] +'.obj', function(mesh){
        if (boltMesh) {
            scene.remove(boltMesh);
        }
        boltMesh = mesh;
        mesh.traverse(function(child) {
            boltMat = child;
            boltMat.material = new THREE.MeshStandardMaterial({color: boltColor,roughness : 1, metalness: 1, map: texture1, metalnessMap :texture2, normalMap: texture3, roughnessMap: texture4, envMap: texture5});
            boltMesh.rotation.z = shieldMainInfo[3][2] * Math.PI / 180 * -1;
            scene.add(mesh);});});

}


// Sets up the scene.
function init() {
    var container = document.getElementById('three-container');
    scene = new THREE.Scene();

    renderer = new THREE.WebGLRenderer({antialias:true, alpha: true});
    var WIDTH = 680, HEIGHT = 500;
    renderer.setSize(WIDTH, HEIGHT);
    container.appendChild(renderer.domElement);
    renderer.domElement.id = "context";

    camera = new THREE.PerspectiveCamera(45, WIDTH / HEIGHT, 0.1, 20000);
    camera.position.set(-59,6,114);
    scene.add(camera);

    var light = new THREE.HemisphereLight( 0xffffff, 0x000000, 1 );
    light2 = new THREE.PointLight(0xffffff, 0.3);
    light2.position.set(-59,6,114);
    scene.add(light);scene.add(light2);

    loadMesh();

    loader.load( 'mesh/shadow.obj', function(mesh){
        mesh.traverse(function(child) {
            var shadowMat = child;
            shadowMat.material = new THREE.MeshStandardMaterial({map: texture6});
            shadowMat.material.transparent = true;
            shadowMat.material.opacity = 0.3;
            scene.add(mesh);});});

    controls = new THREE.OrbitControls(camera, renderer.domElement);
}

// Renders the scene and updates the render as needed.
function animate() {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
    controls.update();
    light2.position.set(camera.position.x,camera.position.y,camera.position.z);
}
