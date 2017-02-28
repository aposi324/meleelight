import * as THREE from 'three';
import { MeshText2D, textAlign } from 'three-text2d';

export function clearScene(scene){
  scene.children.forEach((object)=>{
    scene.remove(object);
  });
}

export function fillBackground(scene,color){
  scene.background = new THREE.Color( color );
}

export function addTexttoScene(scene,text,x,y,layer,config){
  if(config === null || config === undefined){
    const text = new MeshText2D(text,config);
    text.position.set(x,y,layer);
    scene.add(text);
  }else {
    const text = new MeshText2D(text, {
      align: textAlign.center,
      font: '25px Arial',
      fillStyle: '#000000',
      antialias: true
    });
    text.position.set(x,y,layer);
    scene.add(text);
  }
}
export function addImageToScene(scene,image,x,y) {
  var img = new THREE.MeshBasicMaterial({
    map:THREE.ImageUtils.loadTexture(image.src)
  });
  img.map.needsUpdate = true;

  // plane
  const plane = new THREE.Mesh(new THREE.PlaneGeometry(x, y),img);
  plane.overdraw = true;
  scene.add(plane);
}