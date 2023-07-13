import * as THREE from 'three';
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

// camera
const camera2 = new THREE.OrthographicCamera(window.innerWidth / - 2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / - 2,  -100000, 100000);
camera2.position.set(0,0,0);
camera2.quaternion.setFromEuler(new THREE.Euler(-0.15, 0.15, 0.02));

// scene
const scene2 = new THREE.Scene();

//let splineScene2;

// spline scene
const loader2 = new SplineLoader();
loader2.load(
  'https://prod.spline.design/ejquq6cwQH395nML/scene.splinecode',
  (splineScene2) => {
    scene2.add(splineScene2);
  }
);

// renderer
const canvas2 = document.querySelector('.webgl2');
const renderer2 = new THREE.WebGLRenderer({ antialias: true, canvas: canvas2 });
renderer2.setSize(window.innerWidth, window.innerHeight);
renderer2.setAnimationLoop(animate2);
document.body.appendChild(renderer2.domElement);

// scene settings
renderer2.shadowMap.enabled = true;
renderer2.shadowMap.type = THREE.PCFShadowMap;

scene2.background = new THREE.Color('#FFFFFFF');
renderer2.setClearAlpha(1);

// orbit controls
const controls2 = new OrbitControls(camera2, renderer2.domElement);
controls2.enableDamping = true;
controls2.dampingFactor = 0.125;
controls2.enablePan = false;
controls2.enableZoom = false;
controls2.enableRotate = false;

function animate2(time) {
  controls2.update();
  renderer2.render(scene2, camera2);
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
  controls2.update()
  renderer2.render(scene2, camera2);
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
