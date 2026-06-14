"use client";

import { Float, Text } from "@react-three/drei";

export default function HologramLabel({

position,

text

}:any){

return(

<Float speed={2}>

<Text

position={position}

fontSize={0.18}

color="#22d3ee"

>

{text}

</Text>

</Float>

);

}