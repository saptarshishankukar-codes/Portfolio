// Scene
const scene = new THREE.Scene();

// Camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setSize(window.innerWidth, window.innerHeight);

// Stars
const geometry = new THREE.BufferGeometry();
const vertices = [];

for (let i = 0; i < 5000; i++) {
  vertices.push(
    (Math.random() - 0.5) * 2000,
    (Math.random() - 0.5) * 2000,
    (Math.random() - 0.5) * 2000
  );
}

geometry.setAttribute(
  'position',
  new THREE.Float32BufferAttribute(vertices, 3)
);

const material = new THREE.PointsMaterial({
  color: 0xffffff,
});

const stars = new THREE.Points(geometry, material);
scene.add(stars);

camera.position.z = 5;

// Animation
function animate() {
  requestAnimationFrame(animate);

  stars.rotation.x += 0.0005;
  stars.rotation.y += 0.0005;

  renderer.render(scene, camera);
}

animate();

// Scroll function
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: 'smooth'
  });
}