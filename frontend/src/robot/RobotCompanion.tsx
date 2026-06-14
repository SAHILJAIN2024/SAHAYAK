"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { Trail } from "@react-three/drei";

import SAHAModel from "./SAHAModel";
import Particles from "./Particles";
import Aura from "./Aura";
import OrbitRings from "./Rings";

import usePointerTracking from "../hooks/usePointerTracking";
import useSectionTracker from "../hooks/useSelectionTracker";

export default function RobotCompanion() {
  const group = useRef<THREE.Group>(null!);

  const pointer = usePointerTracking();
  const section = useSectionTracker();

 const positions: Record<string, { x: number; y: number; rotateY: number }> = {
  hero: {
    x: 2.5,   // ← starts on the right
    y: -0.25,
    rotateY: -0.3,
  },
  mission: {
    x: -4,
    y: 1,
    rotateY: 0.4,
  },
  capabilities: {
    x: 4,
    y: -1,
    rotateY: -0.4,
  },
  architecture: {
    x: -4,
    y: 0,
    rotateY: 0.4,
  },
  memory: {
    x: 4,
    y: 1,
    rotateY: -0.4,
  },
  footer: {
    x: 2.5,   // ← returns to the right to match the hero
    y: -0.5,
    rotateY: -0.3,
  },
};
  useFrame(({ clock }) => {
    if (!group.current) return;

    const breathing =
      Math.sin(clock.elapsedTime * 1.5) * 0.15;

    // fallback to hero if section isn't found
    const target = positions[section] || positions.hero;

    // Move across sections
    group.current.position.x = THREE.MathUtils.lerp(
      group.current.position.x,
      target.x,
      0.05
    );

    group.current.position.y = THREE.MathUtils.lerp(
      group.current.position.y,
      target.y + breathing,
      0.03
    );

    // Cursor tracking + section rotation
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      target.rotateY + pointer.current.x * 0.3,
      0.05
    );

    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      pointer.current.y * 0.1,
      0.05
    );
  });

  return (
    <group ref={group}>
      {/* Effects */}
      <Particles />

      <OrbitRings />

      <Aura />

      {/* Robot */}
      <Trail
        width={2}
        length={4}
        color={"#06b6d4"}
        attenuation={(t) => t * t}
      >
        <SAHAModel />
      </Trail>
    </group>
  );
}