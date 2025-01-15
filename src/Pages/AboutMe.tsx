import { classy, styled } from "@javierayala381/aurora-components";
import React, { useEffect, useRef, useState } from "react";
import { GameOfLife } from "../Components/GameOfLife.tsx";
import { ShufflingText } from "../Components/ShufflingText.tsx";

const DivContainer = styled.div`about-me-container ${{
    default: {
        display: "inline-flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        padding: "20px"
    }
}}`.getReactComponent()

const Description = styled.span`description-about-me ${{
    default: {
        fontSize: "25px",
        display: "inline-flex",
        flexDirection: "column",
        width: "70vh",
        margin: "0 50px 0 50px"
    }
}}`.getReactComponent()

const AboutLetter = styled.img`about-img ${{
    default: {
        width: "80px", // Size of the "A" letter image
        height: "auto",
        scale: 1.5, // Slightly larger scale for emphasis
        transform: "translate(10px, -20px)", // Adjust positioning for more balance
        marginRight: "20px", // Space between the "A" and text
    }
}}`.getReactComponent()

export const AboutMe = classy.component`about-me-section`
    .from(( { id }) => {
        return (
            <DivContainer id={id}>
                <AboutLetter src="/images/a.png"></AboutLetter>
                <ShufflingText as={Description} 
                    text={`
                    I am a Robotics Engineer and IT enthusiast with a deep passion for mathematics, physics, and cutting-edge
                    technologies. Currently pursuing an M.Sc. in Quantum Science and Technology, I bring a meticulous
                    problem-solving approach grounded in a strong mathematical and physical foundation. My curiosity drives
                    me to explore emerging fields like AI, Machine Learning, Robotics, and Big Data, all through the lens of
                    their mathematical and physical principles. I am committed to innovation and eager to make a tangible
                    impact on society through my work in these transformative fields.
                    `}/>
                <GameOfLife></GameOfLife>
            </DivContainer>
        )
    }).getReactComponent()