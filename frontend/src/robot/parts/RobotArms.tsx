"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function RobotArm({

direction

}:{

direction:string

}){

const arm=useRef<THREE.Group>(null!);

useFrame(()=>{

let target=0;

if(direction==="right")
target=-0.8;

if(direction==="left")
target=0.8;

arm.current.rotation.z=

THREE.MathUtils.lerp(

arm.current.rotation.z,

target,

0.05

);

});

return(

<group ref={arm} position={[0.7,0.5,0]}>

<mesh>

<boxGeometry args={[0.15,1,0.15]}/>

<meshStandardMaterial color="#06b6d4"/>

</mesh>

</group>

);

}