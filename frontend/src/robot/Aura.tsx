"use client";

import { Sphere } from "@react-three/drei";

export default function Aura() {

    return (

        <Sphere args={[0.45,32,32]}>

            <meshStandardMaterial

                transparent

                opacity={0.1}

                color="#a855f7"

                emissive="#a855f7"

                emissiveIntensity={5}

            />

        </Sphere>

    );

}