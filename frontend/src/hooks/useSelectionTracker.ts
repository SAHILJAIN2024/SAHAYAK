"use client";

import { useEffect, useState } from "react";

export default function useSectionTracker() {

    const [section, setSection] = useState("hero");

    useEffect(() => {

        const sections = [
            "hero",
            "mission",
            "capabilities",
            "architecture",
            "memory",
            "footer"
        ];

        const observer = new IntersectionObserver(

            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        setSection(entry.target.id);

                    }

                });

            },

            {
                threshold: 0.4
            }

        );

        sections.forEach(id => {

            const el = document.getElementById(id);

            if (el) observer.observe(el);

        });

        return () => observer.disconnect();

    }, []);

    return section;
}