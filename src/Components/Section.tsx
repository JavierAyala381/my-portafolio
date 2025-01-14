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
        fontSize: "42px",
        fontWeight: "600",
        color: "#333",
        letterSpacing: "2px",
        textTransform: "uppercase",
        marginBottom: "20px",
        paddingBottom: "5px",
        textAlign: "left",
        marginLeft: "20px",
        animation: `${quantumGlow} 3s ease-in-out infinite`,
        position: "relative",
        overflow: "hidden",
        display: "inline-block",
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

const QuantumHeader = ({ title }: { title: string }) => {
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

    return <SectionHeader ref={headerRef}>{displayText}</SectionHeader>;
};

const Sec = styled.section`section ${{
    default: {
        margin: "0 20px 0 20px"
    }
}}`.getReactComponent()

interface ISection {
    title: string,
    style?: React.CSSProperties
}

export const Section = classy.sg.component<ISection>`section`
    .from(({ title, children, style }) => {
        return (
            <Sec style={style}>
                <QuantumHeader title={title}></QuantumHeader>
                <>{children}</>
            </Sec>
        )
    }).getReactComponent()