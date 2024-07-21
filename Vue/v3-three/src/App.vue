<script setup>
import { ref, onMounted } from 'vue'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'

//canvas 3D 基于html5的绘图标签 数据可视化，游戏
const containerRef = ref(null)// 挂载canvas
// 相机
const camera = new THREE.PerspectiveCamera(
  40,//角度
  window.innerWidth / window.innerHeight,//判断横着还是竖着  这里是横着
  0.1,//近
  1000//远
)
let controls = null
camera.position.set(0, 2, 6)//摆好摄像头
// 场景
const scene = new THREE.Scene()
// 渲染器 canvas->幕布 不停地输出
// OpenGL 3D建模 显卡计算 GPU  canvas 3D GPU 
const renderer = new THREE.WebGLRenderer({//网页3D渲染
  antialias: true,//抗锯齿
})
renderer.setSize(window.innerWidth * 0.8, window.innerHeight * 0.8)
const render = () => {
  renderer.render(scene, camera)
  requestAnimationFrame(render)// 性能优化
}
onMounted(() => {
  // 
  containerRef.value.appendChild(renderer.domElement)

  renderer.setClearColor('#000')
  scene.background = new THREE.Color("#fff")
  scene.environment = new THREE.Color("#fff")
  render()

  controls = new OrbitControls(camera, renderer.domElement)
  controls.update()
  // 坐标辅助线
  const gridHelper = new THREE.GridHelper(10, 10);
  gridHelper.material.opacity = 0.2
  gridHelper.material.transparent = true
  scene.add(gridHelper)

  // 加载汽车模型
  const loader = new GLTFLoader();// 3DMax gltf格式
  const dracoloader = new DRACOLoader();
  dracoloader.setDecoderPath('../public/roadSter/draco/gltf/')
  loader.setDRACOLoader(dracoloader)
  loader.load('../public/roadSter/model/bmw01.glb', gltf => {
    const bmw = gltf.scene
    scene.add(bmw)
    bmw.traverse(child=>{
      if(child.isMesh && child.name.includes('轮毂')){
        child.material = wheelsMaterial
        wheels.push(child)
      }
    })
  })
  const light = new THREE.DirectionalLight(0xffffff, 1)
  light.position.set(0, 0, 10)
  scene.add(light)
  const light2 = new THREE.DirectionalLight(0xffffff, 1);
  light2.position.set(0, 0, -10);
  scene.add(light2);
  const light3 = new THREE.DirectionalLight(0xffffff, 1);
  light3.position.set(10, 0, 0);
  scene.add(light3);
  const light4 = new THREE.DirectionalLight(0xffffff, 1);
  light4.position.set(-10, 0, 0);
  scene.add(light4);
  const light5 = new THREE.DirectionalLight(0xffffff, 1);
  light5.position.set(0, 10, 0);
  scene.add(light5);
  const light6 = new THREE.DirectionalLight(0xffffff, 1);
  light6.position.set(5, 10, 0);
  scene.add(light6);
  const light7 = new THREE.DirectionalLight(0xffffff, 1);
  light7.position.set(0, 10, 5);
  scene.add(light7);
  const light8 = new THREE.DirectionalLight(0xffffff, 1);
  light8.position.set(0, 10, -5);
  scene.add(light8);
  const light9 = new THREE.DirectionalLight(0xffffff, 1);
  light9.position.set(-5, 10, 0);
  scene.add(light9);

})
let wheels = []
const wheelsMaterial = new THREE.MeshPhysicalMaterial({
  color: 0x424449,
  metalness: 1,
  roughness: 0.5,
 
})
</script>
<template>
  <div>
    <div class="header">

    </div>

    <div class="home">
      <div class="content-box">
        <div class="container" ref="containerRef">

        </div>
      </div>
    </div>

  </div>
</template>

<style scoped></style>
