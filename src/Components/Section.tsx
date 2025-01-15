import React, { useEffect, useRef, useState } from 'react'
import { classy, styled } from "@javierayala381/aurora-components";
import { keyframes } from "@emotion/css";

const quantumGlow = keyframes`
    0% { text-shadow: 0px 0px 2px rgba(255, 255, 255, 0.9); opacity: 0.8; }
    25% { text-shadow: 0px 0px 8px rgba(255, 255, 255, 1); opacity: 1; }
    50% { text-shadow: 0px 0px 14px rgba(255, 255, 255, 0.9); opacity: 0.9; }
    75% { text-shadow: 0px 0px 10px rgba(255, 255, 255, 1); opacity: 1; }
    100% { text-shadow: 0px 0px 4px rgba(255, 255, 255, 0.9); opacity: 0.8; }
`;
const SectionHeader = styled.h3`section-header ${{
    default: {
        fontSize: "35px",                  // Same font size as PageName for consistency
        fontWeight: "bold",                // Bold for emphasis, like PageName
        color: "#222",                     // Slightly darker gray for the text color to match the main header
        letterSpacing: "1px",              // Same spacing as in the main header for consistency
        lineHeight: "1.3",                  // Align line height with the main header
        textTransform: "uppercase",        // Keep the uppercase style as requested
        marginBottom: "20px",              // Consistent margin bottom with PageName
        marginLeft: "50px",                // Space from the left to align with page name
        textAlign: "left",                 // Align to the left, keeping consistency
        position: "relative",              // Ensure the positioning is correct
        display: "inline-block",           // Align with the block styling of the main header
        "&::before": {
            content: '"< "',               // Add visual element before the text for emphasis
            left: "-20px",                 // Align it to the left for better spacing
            top: "0",
            fontSize: "35px",              // Small arrow size
            color: "#444",                 // Slightly lighter gray
        },
        "&::after": {
            content: '" >"',                // Add visual element after the text
            top: "0",
            fontSize: "35px",              // Same arrow size as before
            color: "#444",                 // Consistent gray color
        }
    }
}}`.getReactComponent();

interface ISection {
    title: string
}

const shuffleText = (text: string): string => {
    const chars = text.split('');
    for (let i = chars.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * chars.length);
        [chars[i], chars[j]] = [chars[j], chars[i]];
    }
    return chars.join('');
};

const QuantumHeader = ({ title, id }: { title: string, id: string }) => {
    const [displayText, setDisplayText] = useState(shuffleText(title));
    const headerRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    let iterations = 0;
                    const interval = setInterval(() => {
                        setDisplayText(shuffleText(title));
                        iterations++;
                        if (iterations > 10) {
                            clearInterval(interval);
                            setDisplayText(title); // Final reveal
                        }
                    }, 100);
                }
            },
            { threshold: 0.6 }
        );

        if (headerRef.current) {
            observer.observe(headerRef.current);
        }

        return () => observer.disconnect();
    }, [title]);

    return <SectionHeader id={id} ref={headerRef}>{displayText}</SectionHeader>;
};

const Sec = styled.section`section ${{
    default: {
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        margin: "0 20px 0 20px"
    }
}}`.getReactComponent()

interface ISection {
    sectionId: string,
    title: string,
    style?: React.CSSProperties
}

export const Section = classy.sg.component<ISection>`section`
    .from(({ title, children, style, sectionId, id }) => {
        return (
            <Sec id={sectionId} style={style}>
                <QuantumHeader id={id} title={title}></QuantumHeader>
                <>{children}</>
            </Sec>
        )
    }).getReactComponent()