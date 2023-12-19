import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight);
document.body.appendChild( renderer.domElement );

const controls = new OrbitControls( camera, renderer.domElement )

const loader = new GLTFLoader()
let city; 

loader.load( './city.glb', function ( gltf ){

    scene.add(gltf.scene)
    city = gltf.scene;

});
const light = new THREE.AmbientLight(0xffffff)
scene.add(light);
camera.position.z = 5;
controls.update();

function animate() {
    requestAnimationFrame( animate );
    city.rotation.x += 0.00;
    city.rotation.y += 1.00;
    controls.update()
    renderer.render( scene,camera );
    
}
animate();