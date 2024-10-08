import React from 'react'
import { useGLTF, useScroll, useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import { Color } from '../utils/Color';

export default function Laptop(props) {
  const scroll = useScroll();
  const [ emissiveIntensity, setIntensity] = React.useState(100);
  const [ color, setColor] = React.useState(new Color(141, 92, 214));

  const { nodes, materials } = useGLTF('/models/laptop.glb');
  const laptopMap = useTexture({ lightMap:"/images/laptop/lightmap.jpg"});
  const laptopScreen = useTexture({ emissiveMap:"/images/laptop/emit.jpg"});
  
  laptopMap.lightMap.flipY = false;
  useFrame(() => {
    const offset = 1 - scroll.offset
    setIntensity(offset*100);
    setColor(new Color(Math.round(141*offset + (1-offset)*31), Math.round(92*offset), Math.round(214*offset + (1-offset)*79)));
  })

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube035.geometry}
        material={materials['Material.006']}
      >
        <meshBasicMaterial {...laptopMap} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube034.geometry}
        material={materials['Material.006']}
        >
        <meshBasicMaterial {...laptopMap}/>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube033.geometry}
        material={materials['Material.007']}
        >
        <meshStandardMaterial {...laptopMap} {...laptopScreen} emissive={"#8333ff"} color={color.toString()} emissiveIntensity={emissiveIntensity} />
      </mesh> 
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube032.geometry}
        material={materials['Material.006']}
        >
        <meshBasicMaterial {...laptopMap} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube031.geometry}
        material={materials['Material.006']}
        >
        <meshBasicMaterial {...laptopMap} />
      </mesh>
    </group>
  )
}

useGLTF.preload('/models/laptop.glb')

