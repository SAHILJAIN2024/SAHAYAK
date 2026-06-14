"use client";

import { Sphere } from "@react-three/drei";

export default function EnergyCore() {

    return (

        <mesh position={[0,-1.5,0]}>

<cylinderGeometry args={[0.03,0.03,3]} />

<meshStandardMaterial

color="#67e8f9"

emissive="#67e8f9"

emissiveIntensity={8}

/>

</mesh>

    );

}