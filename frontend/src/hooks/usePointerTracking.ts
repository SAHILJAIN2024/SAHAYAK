"use client";

import { useRef } from "react";

export default function usePointerTracking() {

    const pointer = useRef({
        x: 0,
        y: 0
    });

    if (typeof window !== "undefined") {

        window.onmousemove = (e) => {

            pointer.current.x =
                (e.clientX / window.innerWidth) * 2 - 1;

            pointer.current.y =
                -(e.clientY / window.innerHeight) * 2 + 1;
        };
    }

    return pointer;
}