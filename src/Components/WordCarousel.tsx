import { styled } from "@javierayala381/aurora-components";
import { keyframes } from "@emotion/css";
import React, { useEffect, useMemo } from "react";
import { getStyles } from "@javierayala381/aurora-components/dist/Api/stateApi";

const CarouselContainer = styled.div`carousel-container ${{
    default: {
        display: "inline-flex",
        flexDirection: "row",
        overflow: "hidden",
        position: "relative",
        width: "100%",
        padding: "10px 0",
        margin: "20px"
    }
}}`.getReactComponent();

const moveLeft = keyframes`
    0% { 
        transform: translateX(100%) 
    },
    100% { 
        transform: translateX(-100%)
    }
`

const moveRight = keyframes`
    0% { 
        transform: translateX(-100%) 
    },
    100% { 
        transform: translateX(100%)
    }
`;

const CarouselItem = styled.div`carousel-item ${{
    default: {
        init: { default: { direction: "right"} },
        rule: (props) => ({
            fontSize: "30px",
            fontWeight: "bold",
            padding: "10px 30px",
            animation: `${props.default.direction === "right" ? moveRight : moveLeft} 10s linear infinite`,
            margin: "0px 80px 0px 80px",
            whiteSpace: "nowrap",
            display: "inline-block",
            borderRadius: "50px",
            background: "linear-gradient(45deg, #FF6F61, #6A1B9A)",  // Add a gradient background
            color: "white",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",  // Add shadow for a floating effect
            textAlign: "center",  // Center-align text
            transform: "scale(1)",
            transition: "transform 0.3s ease-in-out",
            // Ensure smooth movement on hover
            "&:hover": {
                transform: "scale(1.05)",  // Slightly scale up on hover for an interactive feel
                cursor: "pointer",
                boxShadow: "0 8px 30px rgba(0, 0, 0, 0.2)",  // Make shadow more prominent on hover
            },
            // Add a subtle text shadow to enhance visibility on backgrounds
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        })
    }
}}`

export const WordCarousel = ({ words, direction }: { words: string[], direction?: string }) => {

    const { StyledComponent: CItem , StyleSbj$ } = useMemo(() => getStyles(CarouselItem),[])

    useEffect(() => {
        direction &&  StyleSbj$.next({
            type: "default",
            payload: {
                direction: direction
            }
        })
    },[StyleSbj$, direction])

    return (
        <CarouselContainer>
            {words.map((word, index) => (
                <CItem key={index}>{word}</CItem>
            ))}
        </CarouselContainer>
    );
};
