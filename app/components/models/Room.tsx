import React from 'react'
import { useGLTF, useScroll, useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';

export default function Room(props) {
  const scroll = useScroll()
  const { nodes, materials } = useGLTF('/models/room.glb')
  const wallMap = useTexture({ aoMap:"/images/wall/ao.jpg", lightMap:"/images/wall/lightmap.jpg"});
  const floorMap = useTexture({ aoMap:"/images/floor/ao.jpg", lightMap:"/images/floor/lightmap.jpg"});

  useFrame((state) => {
    const offset = 1.006 - scroll.offset
    state.camera.position.set(Math.sin(offset) * 10, offset*2-0.01, Math.sin((offset * Math.PI)/3) * 8)

    state.camera.lookAt(0, 0, 0.05)
  })
  wallMap.aoMap.flipY = false;
  wallMap.lightMap.flipY = false;
  floorMap.aoMap.flipY = false;
  floorMap.lightMap.flipY = false;
  return (
    <group {...props} dispose={null}>
      <mesh
        
        geometry={nodes.Plane.geometry}
        material={materials['Material.004']}
      >
        <meshBasicMaterial {...floorMap} />
      </mesh>
      <mesh

        geometry={nodes.Cube002.geometry}
        material={materials['Material.013']}
      >
        <meshBasicMaterial {...wallMap} />
      </mesh>
    </group>
  )
}

useGLTF.preload('/models/room.glb')
