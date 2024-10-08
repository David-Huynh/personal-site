import { Center, ScrollControls, Text3D } from "@react-three/drei";

import { Bloom, EffectComposer } from "@react-three/postprocessing";

import { Bed, Room, Vine, Window, Table, Laptop, Shelf, Apron} from "../models";

export function MainScene() {  
    return (
        <>  
            <Center top position={[-1,5,-2]} rotation={[0,0.95,0]}>
                <Text3D font={"/fonts/Oswald_Bold.json"} scale={1.8}>
                    DAVID
                    <meshNormalMaterial />
                </Text3D>
            </Center>
            <Vine position={[1.5,-2.4,0.4]}/>
            <ScrollControls pages={1} maxSpeed={1}>
                <Room position={[1.5,-2.4,0.4]}/>
                <Laptop position={[1.5,-2.4,0.4]}/>
            </ScrollControls>
            <Window position={[1.5,-2.4,0.4]}/>
            <Table position={[1.5,-2.4,0.4]}/>
            <Bed position={[1.5,-2.4,0.4]}/>
            <Shelf position={[1.5,-2.4,0.4]}/>
            <Apron position={[1.5,-2.4,0.4]}/>
            <EffectComposer>
                <Bloom luminanceThreshold={0.5} luminanceSmoothing={0.9} height={300} />
            </EffectComposer>
        </>
    )
}