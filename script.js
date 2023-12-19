import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight);
document.body.appendChild( renderer.domElement );

const controls = new OrbitControls( camera, renderer.domElement )

const loader = new GLTFLoader();

const geometry = new THREE.BoxGeometry (1, 1, 1,);
const material = new THREE.MeshLambertMaterial( {color: 0xffffff} );
const cube = new THREE.Mesh( geometry, material);
scene.add( cube );


const light = new THREE.PointLight(0x00ff0f, 1000)
light.position.set(0,20,0)
scene.add(light)

const ambientLight = new THREE.AmbientLight(0xffffff)

scene.add(ambientLight)



camera.position.z = 5;
controls.update()

function animate() {
    requestAnimationFrame ( animate );
    cube.rotation.x += 0.07;
    cube.rotation.y += 0.07;
    controls.update()
    renderer.render( scene, camera);
}
animate();