import React from 'react'
import { useGLTF, useTexture } from '@react-three/drei'

export default function Apron(props) {
  const { nodes, materials } = useGLTF('/models/apron.glb')
  const textures = useTexture({ aoMap:"/images/apron/ao.jpg", lightMap:"/images/apron/lightmap.jpg"});
  textures.aoMap.flipY = false;
  textures.lightMap.flipY = false;

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane005.geometry}
        material={materials['Material.014']}
      >
        <meshBasicMaterial {...textures} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane004.geometry}
        material={materials['Material.014']}
        >
        <meshBasicMaterial {...textures} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder003.geometry}
        material={materials['Material.015']}
        >
        <meshBasicMaterial {...textures} />
      </mesh>
    </group>
  )
}

useGLTF.preload('/models/apron.glb')