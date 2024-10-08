"use client";
import { Environment, OrbitControls, Sky, Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { MainScene } from "./mainScene";
import { Autofocus, Bloom, DepthOfField, EffectComposer, Noise, Vignette } from "@react-three/postprocessing";

export function MainCanvas() {
    

    return (
        <div className="w-screen h-screen fixed top-0 left-0">
            <Canvas
            shadows
            dpr={[1,2]}
            camera={{ position: [10, 3, 10]}}

            >
                <Environment files="/images/night.jpg" />
                
                <MainScene />
            </Canvas>
        </div>
    );
}