import React, { useEffect, useRef } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'
import * as THREE from 'three';


export default function Window(props) {
  const sceneRef = useRef<THREE.Object3D | undefined>();
  const { scene } = useGLTF('/models/window.glb')
  const textures = useTexture({ aoMap:"/images/window/ao.jpg", lightMap:"/images/window/lightmap.jpg"});
  textures.aoMap.flipY = false;
  textures.lightMap.flipY = false;
  useEffect(() => {
    if (sceneRef.current) {
      // Traverse the scene and apply the material to all meshes
      sceneRef.current.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          
          if (child.isMesh) {
            // Create a new MeshBasicMaterial with AO and Lightmap
            if (child.isMesh) {
              child.material = new THREE.MeshBasicMaterial({
                map: child.material?.map, 
                aoMap: textures.aoMap,            
                lightMap: textures.lightMap,       
              });
            }
          }
        }
      });
    }
  }, [scene, textures]);
  return (
    <primitive object={scene} ref={sceneRef} {...props} />
  )
}

useGLTF.preload('/models/window.glb')
