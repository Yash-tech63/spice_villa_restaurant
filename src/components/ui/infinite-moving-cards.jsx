"use client";

import { cn } from "../../lib/utils";
import React, { useEffect, useRef, useState } from "react";

export const InfiniteMovingCards = ({
    items,
    direction = "left",
    speed = "fast",
    pauseOnHover = true,
    className,
}) => {
    const containerRef = useRef(null);
    const scrollerRef = useRef(null);
    const [start, setStart] = useState(false);

    useEffect(() => {
        if (!containerRef.current || !scrollerRef.current) return;

        const scrollerContent = Array.from(scrollerRef.current.children);

        scrollerContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true);
            scrollerRef.current.appendChild(duplicatedItem);
        });

        containerRef.current.style.setProperty(
            "--animation-direction",
            direction === "left" ? "forwards" : "reverse"
        );

        containerRef.current.style.setProperty(
            "--animation-duration",
            speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s"
        );

        setStart(true);
    }, []);

    return (
        <div
            ref={containerRef}
            className={cn(
                "scroller relative z-20 max-w-7xl overflow-hidden",
                className
            )}
        >
            <ul
                ref={scrollerRef}
                className={cn(
                    "flex w-max flex-nowrap gap-4 py-4",
                    start && "animate-scroll",
                    pauseOnHover && "hover:[animation-play-state:paused]"
                )}
            >
                {items.map((item, idx) => (
                    <li
                        key={idx}
                        className="w-[350px] shrink-0 rounded-2xl border bg-white px-6 py-4"
                    >
                        <p className="text-sm">{item.quote}</p>
                        <div className="mt-4 text-xs text-gray-500">
                            {item.name} — {item.title}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};
