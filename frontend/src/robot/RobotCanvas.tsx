"use client";

import { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Float, ContactShadows } from "@react-three/drei";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import * as THREE from "three";
import RobotCompanion from "./RobotCompanion";

export default function RobotCanvas() {
  const groupRef = useRef<THREE.Group>(null);
  const { scrollYProgress } = useScroll();

  // Animation values map:
  // At 0% scroll (top): Robot is hidden, slightly further back, and scaled down.
  // Between 10% and 70% scroll: Robot fades in, moves forward, and scales up.
  const robotOpacity = useTransform(scrollYProgress, [0, 0.15, 0.7], [0, 1, 1]);
  const zPosition = useTransform(scrollYProgress, [0, 0.7], [-1, 1.5]);
  const robotScale = useTransform(scrollYProgress, [0, 0.7], [0.8, 1.25]);
  const xRotation = useTransform(scrollYProgress, [0, 0.7], [0, 0.2]);

  useMotionValueEvent(scrollYProgress, "change", () => {
    if (groupRef.current) {
      groupRef.current.position.z = zPosition.get();
      groupRef.current.rotation.x = xRotation.get();
      
      const s = robotScale.get();
      groupRef.current.scale.set(s, s, s);
    }
  });

  return (
    // Tie the DOM wrapper visibility to our scroll-controlled opacity transform
    <div className="fixed inset-0 pointer-events-none z-10 w-full h-full">
      <Canvas camera={{ position: [0, 0, 7], fov: 50 }}>
        <ambientLight intensity={1} />
        <directionalLight intensity={3} position={[3, 4, 3]} />
        <pointLight color="#06b6d4" position={[2, 2, 2]} intensity={25} />
        <pointLight color="#a855f7" position={[-2, 2, 2]} intensity={20} />
        <pointLight color="#ec4899" position={[0, -2, 2]} intensity={15} />
        <Environment preset="city" />

        <group ref={groupRef}>
          <Float speed={2} rotationIntensity={0.3} floatIntensity={1}>
            {/* Standard component wrapped in a sub-group to inject dynamic opacity if needed */}
            <object3D>
              <RobotCompanion />
            </object3D>
          </Float>
        </group>

        <ContactShadows position={[0, -2, 0]} opacity={0.5} blur={3} scale={10} />
      </Canvas>
    </div>
  );
}