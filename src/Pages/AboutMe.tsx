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
                <AboutLetter src="http://localhost:3000/my-portafolio/images/a.png"></AboutLetter>
                <Description>
                    <p>
                        I am a <strong>Robotics Engineer</strong> and <strong>IT enthusiast</strong> with a deep passion for <strong>mathematics</strong>, <strong>physics</strong>, and cutting-edge technologies. Currently pursuing an <em>M.Sc. in Quantum Science and Technology</em> at <strong>Trinity College Dublin</strong>, I bring a meticulous problem-solving approach grounded in a strong mathematical and physical foundation. 
                    </p>
                    <p>
                        My curiosity drives me to explore emerging fields like <strong>AI</strong>, <strong>Machine Learning</strong>, <strong>Robotics</strong>, and <strong>Big Data</strong>, all through the lens of their <strong>mathematical</strong> and <strong>physical principles</strong>. I am committed to innovation and eager to make a tangible impact on society through my work in these transformative fields.
                    </p>
                    <p>
                        Despite being deeply immersed in my academic work, I am still as <em>passionate</em> about <strong>mathematics</strong> and <strong>robotics</strong> as I was when I first started. These fields fuel my enthusiasm and provide a sense of purpose as I continue my journey in Quantum Science and Technology.
                    </p>
                </Description>
                <GameOfLife>
                </GameOfLife>
            </DivContainer>
        )
    }).getReactComponent()