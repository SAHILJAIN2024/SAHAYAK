"use client";

import Rings from "./Rings";
import Eyes from "./Eyes";
import Particles from "./Particles";

export default function SAHACore() {
  return (
    <group>

      <mesh>
        <sphereGeometry args={[1.2, 64, 64]} />

        <meshStandardMaterial
          color="#09090b"
          metalness={1}
          roughness={0}
        />

      </mesh>

      <Rings />

      <Eyes />

      <Particles />

    </group>
  );
}