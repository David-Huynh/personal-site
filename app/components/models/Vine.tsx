import React from 'react'
import { useGLTF, useTexture } from '@react-three/drei'

export default function Vine(props) {
  const { nodes, materials } = useGLTF('/models/vine.glb')
  const vineText = useTexture({ aoMap:"/images/vine/ao.jpg", lightMap:"/images/vine/lightmap.jpg"});
  const potText = useTexture({ aoMap:"/images/pot/ao.jpg", lightMap:"/images/pot/lightmap.jpg"});
  vineText.aoMap.flipY = false;
  vineText.lightMap.flipY = false;
  potText.aoMap.flipY = false;
  potText.lightMap.flipY = false;
  
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={materials['Material.002']}
        >
        <meshBasicMaterial {...potText}  />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve002.geometry}
        material={materials['Material.003']}
        >
        <meshBasicMaterial {...vineText} lightMapIntensity={10} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve002_1.geometry}
        material={materials['aCG_LeafSet029_4K_PNG.001']}
      >
        <meshBasicMaterial {...vineText} lightMapIntensity={10}/>
      </mesh>
    </group>
  )
}

useGLTF.preload('/models/vine.glb')
