"use client";

import { Points, PointMaterial } from "@react-three/drei";
import { useMemo } from "react";
import * as random from "maath/random";

export default function Particles() {

    const particles = useMemo(() => {

        return random.inSphere(
            new Float32Array(3000),
            { radius: 8 }
        ) as Float32Array;

    }, []);

    return (

        <Points positions={particles as any} stride={3}>

            <PointMaterial

                size={0.03}

                transparent

                color="#67e8f9"

                sizeAttenuation

                depthWrite={false}

            />

        </Points>

    );

}