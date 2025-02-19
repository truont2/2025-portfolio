"use client";

import {
    Html,
    OrbitControls,
    PerspectiveCamera,
    Stage,
    useProgress,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Model from "./Model";

function Loader() {
    const { progress } = useProgress();

    return <Html center>{progress.toFixed(1)} % loaded</Html>;
}

export default function Scene() {
    return (
        <Canvas>
            <Suspense fallback="loading...">
                <Stage environment="night" intensity={0.5}>
                    <Model />
                </Stage>
                <OrbitControls enableZoom={true} autoRotate />
                <PerspectiveCamera
                    position={[-1, 0, 1.8]}
                    zoom={0.7}
                    makeDefault
                />
            </Suspense>
        </Canvas>
    );
}
