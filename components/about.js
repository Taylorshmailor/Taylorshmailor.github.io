// import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
// import { MTLLoader } from 'three/addons/loaders/MTLLoader.js';
// import gsap from "gsap";
//import '../css/styles.css'

// import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
// import SplineLoader from '@splinetool/loader';
// import '../css/styles.css'

// // camera
// const camera2 = new THREE.OrthographicCamera(window.innerWidth / - 2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / - 2,  -100000, 100000);
// camera2.position.set(232.47, 108.52, 1008.05);
// camera2.quaternion.setFromEuler(new THREE.Euler(-0.15, 0.15, 0.02));

// // scene
// const scene2 = new THREE.Scene();

// // spline scene
// const loader2 = new SplineLoader();
// loader2.load(
//   'https://prod.spline.design/ejquq6cwQH395nML/scene.splinecode',
//   (splineScene) => {
//     scene2.add(splineScene);
//   }
// );

// // renderer
// const renderer2 = new THREE.WebGLRenderer({ antialias: true });
// renderer2.setSize(window.innerWidth, window.innerHeight);
// renderer2.setAnimationLoop(animate);
// document.body.appendChild(renderer2.domElement);

// // scene settings
// renderer2.shadowMap.enabled = true;
// renderer2.shadowMap.type = THREE.PCFShadowMap;

// scene2.background = new THREE.Color('#2d2e32');
// renderer2.setClearAlpha(1);

// // orbit controls
// const controls2 = new OrbitControls(camera2, renderer2.domElement);
// controls2.enableDamping = true;
// controls2.dampingFactor = 0.125;

// window.addEventListener('resize', onWindowResize);
// function onWindowResize() {
//   camera2.left = window.innerWidth / - 2;
//   camera2.right = window.innerWidth / 2;
//   camera2.top = window.innerHeight / 2;
//   camera2.bottom = window.innerHeight / - 2;
//   camera2.updateProjectionMatrix();
//   renderer2.setSize(window.innerWidth, window.innerHeight);
// }

// function animate(time) {
//   controls2.update();
//   renderer2.render(scene2, camera2);
// }


// // Scene
// const scene = new THREE.Scene();

// // Defining a variable for our model 
// var myObj;

// //create material for obj
// var mtlLoader = new MTLLoader();
// mtlLoader.load('../vectary/Avatar.mtl',function (materials) {
//   materials.preload();

//   // Load the object
//   var objLoader = new OBJLoader();
//   objLoader.setMaterials(materials);
//   objLoader.load('../vectary/Avatar.obj', function (object) {
//     scene.add(object);
//     myObj = object;
//     myObj.position.x = 350;
//     myObj.position.y = -100;
//   });
// });

// // // Create our sphere
// const geometry = new THREE.SphereGeometry(1, 64, 64)
// const material = new THREE.MeshStandardMaterial({
//   color: '#FFFEF4',
//   roughness: 0.5,

// })
// const mesh = new THREE.Mesh(geometry, material)
// mesh.receiveShadow = true;
// scene.add(mesh)

// // Sizes
// const sizes = {
//   width: window.innerWidth,
//   height: window.innerHeight
// }

// console.log(sizes.width);
// console.log(sizes.height);

// // // Light
// //const light2 = new THREE.PointLight(0xffffff, 1, 800)
// const light = new THREE.AmbientLight( 0xffffff, .8); // soft white light
// //light2.position.set(-10, 100, 250)
// //light2.intensity = 1.25
// scene.add(light)
// //scene.add(light2)

// // Camera
// const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height)
// camera.position.z = 950
// camera.position.x = 300
// camera.position.y = 50


// scene.add(camera)

// // Render scene onto 
// const canvas = document.querySelector('.webgl2')
// //const renderer = new THREE.WebGLRenderer({canvas})
// const renderer = new THREE.WebGLRenderer({canvas})
// renderer.setSize(sizes.width, sizes.height)
// renderer.setPixelRatio(2)
// renderer.setClearColor("#FFFFFF")
// renderer.render(scene, camera)

// // Controls
// const controls = new OrbitControls(camera, canvas)
// controls.enableDamping = true
// controls.enablePan = false
// controls.enableZoom = false

// // Resize
// window.addEventListener("resize", () => {
//   // Update sizes
//   sizes.width = window.innerWidth;
//   sizes.height = window.innerHeight;
//   // Update Camera
//   camera.updateProjectionMatrix()
//   camera.aspect = sizes.width / sizes.height;
//   renderer.setSize(sizes.width, sizes.height);
// })

// const loop = () => {
//   controls.update()
//   renderer.render(scene, camera);
//   window.requestAnimationFrame(loop)
// }
// loop()

// // Timeline magicccc
// const tl = gsap.timeline({defaults: {duration: 1}})
// tl.fromTo('.webgl2', {opacity: 0}, {opacity: 1})






