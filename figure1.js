// creating scene
var scene = new THREE.Scene();

scene.background = new THREE.Color(0xFF0000)

var loader = new THREE.TextureLoader();
loader.load('../texture/texture2.jpg', function(texture){
    scene.background = texture;
})

// add camera
var camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth/window.innerHeight
);

// renderer

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// materials

var textureLoader = new THREE.TextureLoader();
var matcap = textureLoader.load("../texture/texture1.jpg", (texture)=>{
    material.map = texture
    animate()
})

var material = new THREE.MeshMatcapMaterial()

material.matcap = matcap
material.flatShading = true

var textureLoader = new THREE.TextureLoader();
var matcap = textureLoader.load("../texture/texture2.jpg", (texture)=>{
    material1.map = texture
    animate()
})

var material2 = new THREE.MeshMatcapMaterial()

material2.matcap = matcap
material2.flatShading = true

var textureLoader = new THREE.TextureLoader();
var matcap = textureLoader.load("../texture/texture3.jpg", (texture)=>{
    material2.map = texture
    animate()
})

var material3 = new THREE.MeshMatcapMaterial()

material3.matcap = matcap
material3.flatShading = true

var textureLoader = new THREE.TextureLoader();
var matcap = textureLoader.load("../texture/texture4.jpg", (texture)=>{
    material3.map = texture
    animate()
})

var material4 = new THREE.MeshMatcapMaterial()

material4.matcap = matcap
material4.flatShading = true
// add geometry

var geometry = new THREE.BoxGeometry(2, 2, 2);
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);


const geometry2 = new THREE.CapsuleGeometry( 1, 1, 4, 8 );
const capsule = new THREE.Mesh( geometry2, material2 );
scene.add ( capsule );
 
 
 
const geometry3 = new THREE.ConeGeometry( 1, 2, 32 );
const cone = new THREE.Mesh( geometry3, material3 );
scene.add( cone );



const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
scene.add( line );

// Drivers



const controls = new THREE.DragControls( [cube, capsule, cone, line], camera, renderer.domElement );
controls.deactivate()
controls.activate()

controls.addEventListener("hoveron", function(event){
    event.object.material.wireframe = true
    event.object.scale.y *= 2

})

controls.addEventListener("hoveroff", function(event){
    event.object.material.wireframe = false
    event.object.scale.y /= 2
})

const flyControls = new THREE.FlyControls( camera, renderer.domElement)
flyControls.movementSpeed = 50;
flyControls.rollSpeed = 0.01;
flyControls.autoForward = false
flyControls.dragToLock = false

camera.position.z = 10;
cube.position.x = -4
capsule.position.y = -4
cone.position.y = 4
line.position.x = 4

// Animations

var animate = function(){
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    flyControls.update(0.5)
}

animate();