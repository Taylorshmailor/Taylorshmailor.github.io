import * as THREE from 'https://unpkg.com/three@0.138.0/build/three.module.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import SplineLoader from '@splinetool/loader';
import gsap from "gsap";
import "./css/styles.css"

// Scene
const scene = new THREE.Scene();

// camera
const camera = new THREE.OrthographicCamera(
  window.innerWidth / -2,
  window.innerWidth / 2,
  window.innerHeight / 2,
  window.innerHeight / -2,
  -50000,
  100000
);
camera.position.set(565.14, 375.08, 723.2);
camera.quaternion.setFromEuler(new THREE.Euler(-0.52, 0.6, 0.31));

// renderer
const canvas = document.querySelector('.webgl');
const renderer = new THREE.WebGLRenderer({ antialias: true, canvas });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animate);
document.body.appendChild(renderer.domElement);

// scene settings
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

scene.background = new THREE.Color('#FFFFFF');
renderer.setClearColor('#FFFFFF', 1);
// #fffef4 - pastel yellow background instead

// spline scene
const loader = new SplineLoader();

let splineScene;

loader.load(
  'https://prod.spline.design/gjQGY0N6M0y5-ws5/scene.splinecode',
  (loadedSplineScene) => {
    splineScene = loadedSplineScene;
    scene.add(splineScene);

    // Adjust position and rotation
    const box = new THREE.Box3().setFromObject(splineScene);
    const center = box.getCenter(new THREE.Vector3());
    splineScene.position.copy(center).multiplyScalar(-1);

  },
  null,
  (error) => {
    console.log('An error happened', error);
  }
);


// orbit controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.125;
controls.enablePan = false;
controls.enableZoom = false;
controls.enableRotate = false;

// window resize event
window.addEventListener('resize', onWindowResize);

function onWindowResize() {
  camera.left = window.innerWidth / -2;
  camera.right = window.innerWidth / 2;
  camera.top = window.innerHeight / 2;
  camera.bottom = window.innerHeight / -2;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

// Rotate direction variables
let rotationSpeed = 0.0005; // Adjust the rotation speed as needed
let rotationDirection = 1; // 1 for clockwise, -1 for counterclockwise

function animate() {
  controls.update();

  if (splineScene) {
    const aspectRatio = window.innerWidth / window.innerHeight;

    //Set the desired offsets for left and down
    const offsetX = 0.55; // Adjust the offset value as needed
    const offsetY = 0.70; // Adjust the offset value as needed

    // Calculate the position based on aspect ratio and offsets
    const shiftX = offsetX * window.innerWidth * aspectRatio;
    const shiftY = offsetY * window.innerHeight;

    splineScene.position.x = shiftX - window.innerWidth / 2;
    splineScene.position.y = shiftY - window.innerHeight / 2;

    // splineScene.position.x = (window.innerWidth / 2);
    // splineScene.position.y = (window.innerHeight / 2);

    // Rotate the splineScene around its own center
    splineScene.rotation.y += rotationSpeed * rotationDirection;

    // Reverse the rotation direction when exceeding a threshold
    const rotationThreshold = Math.PI / 4; // Adjust the rotation threshold as needed
    if (splineScene.rotation.y >= rotationThreshold || splineScene.rotation.y <= -rotationThreshold) {
      rotationDirection *= -1;
    }
  }

  renderer.render(scene, camera);
}

// Sizes
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
}

scene.add(camera)

// Resize
window.addEventListener("resize", () => {
  // Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;
  // Update Camera
  camera.updateProjectionMatrix()
  camera.aspect = sizes.width / sizes.height;
  renderer.setSize(sizes.width, sizes.height);
})

const loop = () => {
  controls.update()
  renderer.render(scene, camera);
  window.requestAnimationFrame(loop)
}
loop()

// Timeline magicccc
const tl = gsap.timeline({defaults: {duration: .5}})
tl.fromTo('nav', {y: '-100%'}, {y: '0%'})
tl.fromTo('.webgl', {opacity: 0}, {opacity: 1})
tl.fromTo('.title', {opacity: 0}, {opacity: 1})
tl.fromTo('.title-2', {opacity: 0}, {opacity: 1})
tl.fromTo('.intro', {opacity: 0}, {opacity: 1})
tl.fromTo('.experience', {opacity: 0}, {opacity: 1})
tl.fromTo('.project-heading', {opacity: 0}, {opacity: 1})
tl.fromTo('.cards', {opacity: 0}, {opacity: 1})
