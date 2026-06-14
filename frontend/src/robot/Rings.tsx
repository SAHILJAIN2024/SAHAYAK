"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function OrbitRings() {

    const ring1 = useRef<THREE.Mesh>(null!);
    const ring2 = useRef<THREE.Mesh>(null!);

    useFrame(() => {

        ring1.current.rotation.z += 0.01;
        ring2.current.rotation.x -= 0.007;

    });

    return (
        <>
            <mesh ref={ring1}>
                <torusGeometry args={[1.3,0.02,16,100]} />
                <meshStandardMaterial
                    color="#06b6d4"
                    emissive="#06b6d4"
                    emissiveIntensity={2}
                />
            </mesh>

            <mesh ref={ring2}>
                <torusGeometry args={[1.6,0.02,16,100]} />
                <meshStandardMaterial
                    color="#a855f7"
                    emissive="#a855f7"
                    emissiveIntensity={2}
                />
            </mesh>
        </>
    );
}