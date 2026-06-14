"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function SplitCore() {

  const left = useRef<THREE.Mesh>(null!);
  const right = useRef<THREE.Mesh>(null!);

  useFrame(({ clock }) => {

    const t = Math.sin(clock.elapsedTime);

    left.current.position.x = -0.5 + t * .1;

    right.current.position.x = .5 - t * .1;

  });

  return (
    <>
      <mesh ref={left}>
        <sphereGeometry args={[0.8]} />
        <meshStandardMaterial color="#09090b" />
      </mesh>

      <mesh ref={right}>
        <sphereGeometry args={[0.8]} />
        <meshStandardMaterial color="#09090b" />
      </mesh>
    </>
  );
}