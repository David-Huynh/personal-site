import React from 'react'
import { useGLTF, useTexture } from '@react-three/drei'

export default function Bed(props) {
  const { nodes, materials } = useGLTF('/models/bed.glb')
  const textures = useTexture({ aoMap:"/images/bed/ao.jpg", lightMap:"/images/bed/lightmap.jpg"});
  textures.aoMap.flipY = false;
  textures.lightMap.flipY = false;
  
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane003.geometry}
        material={materials['Material.009']}
      >
        <meshBasicMaterial {...textures} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001.geometry}
        material={materials['Material.001']}
        >
        <meshBasicMaterial {...textures} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube008.geometry}
        material={materials['Material.004']}
        >
        <meshBasicMaterial {...textures} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube007.geometry}
        material={materials['Material.004']}
        >
        <meshBasicMaterial {...textures} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube006.geometry}
        material={materials['Material.004']}
        >
        <meshBasicMaterial {...textures} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube005.geometry}
        material={materials['Material.004']}
        >
        <meshBasicMaterial {...textures} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube004.geometry}
        material={materials['Material.015']}
        >
        <meshBasicMaterial {...textures} />
      </mesh>
    </group>
  )
}

useGLTF.preload('/models/bed.glb')
