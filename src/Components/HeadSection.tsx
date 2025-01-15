import { classy, styled } from "@javierayala381/aurora-components";
import React from 'react'
import { ShufflingText } from "./ShufflingText.tsx";

const BallsCluster = styled.div`balls-cluster ${{
    default: {
        position: "relative",
        width: "100%",
        height: "85vh", //get all the rest of the visible screen
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden", // Prevents balls from moving out of view
    }
}}`.getReactComponent();

// Individual ball styling with random movement effect
const Ball = styled.div`ball ${{
    default: {
        position: "absolute",
        borderRadius: "50%",
        background: "linear-gradient(135deg, #909090, #c7abff 50%, #ffc5cf 100%)",
    }
}}`.getReactComponent()
// Helper to get random number within a range
const getRandomNumber = (min: number, max: number) =>
    Math.random() * (max - min) + min;

// Generate positions and sizes
const generateBallData = (
    numBalls: number,
    maxRadius: number,
    minSize: number,
    maxSize: number,
    spread: number
) => {
    const ballsData: { x: number, y: number, size: number }[] = [];

    for (let i = 0; i < numBalls; i++) {
        // Adjust the radius based on the spread value
        const radius = getRandomNumber(0, maxRadius * spread); // Spread factor affects how far out the balls can go
        const angle = Math.random() * Math.PI * 2; // Random angle between 0 and 2π
        const ballSize = getRandomNumber(minSize, maxSize); // Random size between minSize and maxSize

        // Calculate the position of the ball (in Cartesian coordinates)
        const x = radius * Math.cos(angle); // x position on the circle
        const y = radius * Math.sin(angle); // y position on the circle

        ballsData.push({ x, y, size: ballSize });
    }

    return ballsData;
};

const cluster = (numBalls, minSize, maxSize, spread) => {
    const maxRadius = 200;  // Maximum radius from the center

    const ballsData = generateBallData(numBalls, maxRadius, minSize, maxSize, spread);

    const balls = ballsData.map((data, index) => (
        <Ball 
            key={index} 
            style={{
                width: `${data.size}px`,
                height: `${data.size}px`,
                left: `calc(50% + ${data.x}px)`, // Positioning ball from the center (horizontally)
                top: `calc(50% + ${data.y}px)`  // Positioning ball from the center (vertically)
            }} 
        />
    ));

    return balls;
};

const Header = styled.h1`name-holder ${{
    default: {
        position: "relative",
        fontSize: "200px",
        fontWeight: "bold",
        zIndex: "10",
        margin: "0"
    }
}}`.getReactComponent()

const SubHeader = styled.h2`sub-header ${{
    default: {
        position: "relative",
        fontSize: "50px",
        fontWeight: "bold",
        zIndex: "10",
        margin: "0",
        color: "#824ed5"
    }
}}`.getReactComponent()

const HeadContainer = styled.div`container ${{
    default: {
        display: "inline-flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    }
}}`.getReactComponent()

export const HeadSection = classy.component`Head-Section`
    .from(({ id }) => {
        return (
            <>
            <BallsCluster>
                <HeadContainer>
                    <Header>Javier Ayala</Header>
                    <ShufflingText
                        as={SubHeader}
                        text="Quantum-Mathematician-Robotics"
                    />
                </HeadContainer>
                {cluster(80, 30, 80, 1.5)}
                {cluster(70, 60, 100, 1.6)}
                {cluster(50, 100, 150, 1.3)}
                {cluster(10, 200, 250, 1)}
            </BallsCluster></>
        )
    }).getReactComponent()