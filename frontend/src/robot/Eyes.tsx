"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function Eyes() {
  const leftEye = useRef<THREE.Mesh>(null!);
  const rightEye = useRef<THREE.Mesh>(null!);

  useFrame(({ clock }) => {

    const pulse =
      1 + Math.sin(clock.elapsedTime * 4) * 0.15;

    leftEye.current.scale.setScalar(pulse);
    rightEye.current.scale.setScalar(pulse);

  });

  return (
    <>
      <mesh
        ref={leftEye}
        position={[-0.35, 0.2, 1.1]}
      >
        <sphereGeometry args={[0.12]} />

        <meshStandardMaterial
          emissive="#a855f7"
          emissiveIntensity={5}
        />
      </mesh>

      <mesh
        ref={rightEye}
        position={[0.35, 0.2, 1.1]}
      >
        <sphereGeometry args={[0.12]} />

        <meshStandardMaterial
          emissive="#06b6d4"
          emissiveIntensity={5}
        />
      </mesh>
    </>
  );
}