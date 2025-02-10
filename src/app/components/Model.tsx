"use client";

import { useGLTF } from "@react-three/drei";

export default function Model(props: any) {
    const { nodes, materials } = useGLTF("/macbookModel.glb") as any;

    return (
        <group {...props} dispose={null}>
            <group position={[0.121, 0.007, 0]}>
                <mesh
                    geometry={nodes.Object_6.geometry}
                    material={materials.MacBookPro}
                />
                <mesh
                    geometry={nodes.Object_8.geometry}
                    material={materials.MacBookPro}
                />
            </group>
            <mesh
                geometry={nodes.Object_4.geometry}
                material={materials.MacBookPro}
            />
        </group>
    );
}

useGLTF.preload("/computerModel.glb");
