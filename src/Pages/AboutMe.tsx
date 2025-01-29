import { classy, styled } from "@javierayala381/aurora-components";
import React from "react";
import { GameOfLife } from "../Components/GameOfLife.tsx";

const DivContainer = styled.div`about-me-container ${{
    default: {
        display: "inline-flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        width: "100%",
        padding: "10px",
        "@media (max-width: 1200px)": {
            flexDirection: "column", // Reduce font size for mobile
        }
    }
}}`.getReactComponent()

const Description = styled.span`description-about-me ${{
    default: {
        fontSize: "clamp(15px, 5vw, 25px)",
        display: "inline-flex",
        flexDirection: "column",
        width: "50%",
        "@media (max-width: 1200px)": {
            width: "80%",
        }
    }
}}`.getReactComponent()

const AboutLetter = styled.img`about-img ${{
    default: {
        width: "80px", // Size of the "A" letter image
        height: "auto",
        scale: 1.5, // Slightly larger scale for emphasis
        transform: "translate(10px, -20px)", // Adjust positioning for more balance
        marginRight: "20px", // Space between the "A" and text
        "@media (max-width: 1200px)": {
            transform: "none",
            marginTop: "10px",
            marginBottom: "30px"
        }
    }
}}`.getReactComponent()

export const AboutMe = classy.component`about-me-section`
    .from(( { id }) => {
        return (
            <DivContainer id={id}>
                <AboutLetter src="images/a.png"></AboutLetter>
                <Description>
                    <p> <strong>Hey there, and welcome!</strong> I’m a <strong>Physicist</strong>, <strong>Mathematician</strong>, and <strong>Robotics Engineer</strong> with a deep love for all things science and tech. 
                    Every day feels like an adventure as I dive into new challenges, exploring the unknown and figuring out how things work—or how they *could* work. 
                    Whether it’s unraveling the secrets of the universe, solving tricky equations, or building robots that can do cool things, I’m all in. </p><p> 
                    For me, science isn’t just about formulas and theories—it’s about curiosity, creativity, and making a real impact. 
                    I get a kick out of sharing what I’ve learned and seeing how it can help push the boundaries of what’s possible. 
                    It’s not just a job; it’s a way of life, and I wouldn’t have it any other way. </p><p> I’m not just here to find opportunities—I’m here to <strong>create them</strong>, <strong>solve problems</strong>, and <strong>build a future</strong> that’s exciting and meaningful. If you’re as passionate about innovation as I am, let’s team up and make something amazing together. Who knows? We might just change the world! </p>
                </Description>
                <GameOfLife>
                </GameOfLife>
            </DivContainer>
        )
    }).getReactComponent()