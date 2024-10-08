import React from 'react'
import { useGLTF, useTexture } from '@react-three/drei'

export default function Table(props) {
  const { nodes, materials } = useGLTF('/models/table.glb')
  const tableMap = useTexture({ aoMap:"/images/table/ao.jpg", lightMap:"/images/table/lightmap.jpg"});
  const legMap = useTexture({ aoMap:"/images/table_legs/ao.jpg", lightMap:"/images/table_legs/lightmap.jpg"});
  tableMap.aoMap.flipY = false;
  tableMap.lightMap.flipY = false;
  legMap.aoMap.flipY = false;
  legMap.lightMap.flipY = false;


  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube029.geometry}
        material={materials['Material.001']}
      >
        <meshBasicMaterial {...legMap} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube028.geometry}
        material={materials['Material.001']}
        >
        <meshBasicMaterial {...legMap} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube012.geometry}
        material={materials['Material.001']}
        >
        <meshBasicMaterial {...legMap} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube011.geometry}
        material={materials['Material.001']}
        >
        <meshBasicMaterial {...legMap} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={materials['Material.001']}
        >
        <meshBasicMaterial {...tableMap} />
      </mesh>
    </group>
  )
}

useGLTF.preload('/models/table.glb')

