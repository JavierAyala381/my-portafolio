import React from "react";
import { useEffect, useRef, useState } from "react";

// General reusable component for text shuffling with inherited styles
export const ShufflingText = ({ text, as: Component = "span", ...props }: { text: string, as?: any }) => {
    const [displayText, setDisplayText] = useState(text);
    const textRef = useRef<HTMLSpanElement>(null);

    const shuffleText = (input: string): string => {
        const chars = input.split('');
        for (let i = chars.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * chars.length);
            [chars[i], chars[j]] = [chars[j], chars[i]];
        }
        return chars.join('');
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    let iterations = 0;
                    const interval = setInterval(() => {
                        setDisplayText(shuffleText(text));
                        iterations++;
                        if (iterations > 10) {
                            clearInterval(interval);
                            setDisplayText(text); // Reveal final text
                        }
                    }, 100);
                }
            },
            { threshold: 0.6 }
        );

        if (textRef.current) {
            observer.observe(textRef.current);
        }

        return () => observer.disconnect();
    }, [text]);

    return <Component ref={textRef} {...props}>{displayText}</Component>;
};
