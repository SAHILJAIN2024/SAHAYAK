"use client";

import { useGLTF } from "@react-three/drei";

export default function SAHAModel(props: any) {

    const { scene } = useGLTF("/models/SAHA.glb");

    return (
        <primitive
            object={scene}
            scale={1.5}
            rotation={[0, -Math.PI / 2, 0]}
        />
    );
}

useGLTF.preload("/models/SAHA.glb");