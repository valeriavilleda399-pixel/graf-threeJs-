import * as THREE from 'https://unpkg.com/three@0.154.0/build/three.module.js';

// 1. Configuración de la Escena
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// --- 2. GEOMETRÍA DE TETRADECAEDRO (14 caras) ---
const geometry = new THREE.IcosahedronGeometry(1.5, 0); 

// --- 3. MATERIALES METÁLICOS (Verde, Azul, Naranja) ---
const matGreen = new THREE.MeshStandardMaterial({ color: 0x00ff00, metalness: 0.7, roughness: 0.2 });
const matBlue = new THREE.MeshStandardMaterial({ color: 0x0000ff, metalness: 0.7, roughness: 0.2 });
const matOrange = new THREE.MeshStandardMaterial({ color: 0xff5722, metalness: 0.7, roughness: 0.2 });

// 4. Creación de Objetos
const fig1 = new THREE.Mesh(geometry, matGreen);
const fig2 = new THREE.Mesh(geometry, matBlue);
const fig3 = new THREE.Mesh(geometry, matOrange);

fig1.position.x = -4;
fig2.position.x = 0;
fig3.position.x = 4;

scene.add(fig1, fig2, fig3);

// --- 5. ILUMINACIÓN (Añadida según tu petición) ---
const directionalLight = new THREE.DirectionalLight(0xffffff, 6);
directionalLight.position.set(7, 5, 5).normalize(); // Normalización para dirección constante
scene.add(directionalLight);

// Luz ambiental adicional para que las sombras no sean negras
const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
scene.add(ambientLight);

camera.position.z = 8;

// --- 6. ANIMACIÓN CON VELOCIDADES DIFERENTES ---
function animate() {
    // Figura 1: Rotación suave
    fig1.rotation.x += 0.005;
    fig1.rotation.y += 0.01;

    // Figura 2: Rotación media
    fig2.rotation.x += 0.02;
    fig2.rotation.y += 0.005;

    // Figura 3: Rotación rápida
    fig3.rotation.x += 0.015;
    fig3.rotation.y += 0.03;

    renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);