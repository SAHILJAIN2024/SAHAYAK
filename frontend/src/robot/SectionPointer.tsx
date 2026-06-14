"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function SectionPointer() {

  const ref = useRef<THREE.Group>(null!);

  useFrame(({ mouse }) => {

    ref.current.rotation.y = mouse.x * .4;

    ref.current.rotation.x = mouse.y * .2;

  });

  return <group ref={ref}></group>;
}