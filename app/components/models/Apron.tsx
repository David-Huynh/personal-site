import React from 'react'
import { useGLTF, useTexture } from '@react-three/drei'
import { Mesh } from 'three';

const Apron:React.FC<Model>= (props) =>{
  const { nodes, materials } = useGLTF('/models/apron.glb') as unknown as {
    nodes: {
      Plane005: Mesh;
      Plane004: Mesh;
      Cylinder003: Mesh;
    };
    materials: any;
  };
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

export default Apron;