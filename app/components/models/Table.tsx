import React from 'react'
import { useGLTF, useTexture } from '@react-three/drei'
import { Mesh } from 'three';

const Table:React.FC<Model> = (props) => {
  const { nodes, materials } = useGLTF('/models/table.glb') as unknown as {
    nodes: {
      Cube029: Mesh;
      Cube028: Mesh;
      Cube012: Mesh;
      Cube011: Mesh;
      Cube001: Mesh;
    };
    materials: any;
  };
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

export default Table;