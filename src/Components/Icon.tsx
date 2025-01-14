import { classy, styled } from "@javierayala381/aurora-components";
import React from "react";
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { keyframes } from "@emotion/css";
import { WordCarousel } from "./WordCarousel.tsx";
import { ShufflingText } from "./ShufflingText.tsx";

// Floating and rotation animation for the icons
export const floatAnimation = keyframes`
    0% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(10deg); }
    100% { transform: translateY(0px) rotate(0deg); }
`;

// Background gradient animation for added visual effect
const gradientAnimation = keyframes`
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
`;

// Styled component for individual icons with animation and hover effects
const SkillIcon = styled.img`skill-icon ${{
    default: {
        width: "120px",
        height: "120px",
        objectFit: "contain",
        margin: "20px",
        borderRadius: "50%",
        boxShadow: "0px 10px 30px rgba(0,0,0,0.3)",
        animation: `${floatAnimation} 5s ease-in-out infinite`,
        transition: "transform 0.5s ease-in-out, filter 0.5s ease-in-out",
        "&:hover": {
            transform: "scale(1.5) rotate(15deg)",
            filter: "grayscale(0%)",
        }
    }
}}`.getReactComponent();

// Container for skill showcase with gradient animation and flexbox layout
const SkillShowcaseContainer = styled.div`skill-showcase ${{
    default: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        gap: "50px",
        padding: "100px 20px",
        height: "150vh", // Adjusted height for scrolling effect
        backgroundSize: "300% 300%",
        animation: `${gradientAnimation} 10s ease infinite`,
        overflow: "hidden",
        position: "relative", // Add relative positioning for absolute elements inside
    }
}}`.getReactComponent();

const skills = [
    // Languages
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
    { name: "Qiskit", icon: "/images/Qiskit.svg" },
    { name: "Quask", icon: "/images/Quask.png" },
    { name: "Wolfram", icon: "/images/Wolfram.png"},
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"},
    { name: "Javascript ", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
    { name: "Dotnet", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg"},
    { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg"},
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"},
    // Cloud
    { name: "GCP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
    { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg"},
    { name: "Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg"},
    { name: "Hadoop", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/hadoop/hadoop-original.svg" },
    { name: "Terraform", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/terraform/terraform-original.svg"},
    { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" },
    { name: "Keras", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/keras/keras-original.svg"},
    { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"},
    { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg"}, 
    { name: "Matlab", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matlab/matlab-original.svg"},
    { name: "Mongo", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"},
];

// Styled text for positioning over the icons
const Text1 = styled.h1`floating-text ${{
    default: {
        fontSize: "280px",
        position: "absolute", // Absolute positioning
        top: "20%", // Position in the middle vertically
        left: "5%", // Adjust horizontally as needed
        zIndex: 5, // Ensure text is on top of icons but not blocking movement
        transform: "translateY(-50%)", // Center text vertically within container
        fontWeight: "bold",
        textShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)", // Add some shadow for better visibility
    }
}}`.getReactComponent();

const Text2 = styled.h1`floating-text ${{
    default: {
        fontSize: "280px",
        position: "absolute", // Absolute positioning
        top: "50%", // Position in the middle vertically
        left: "65%", // Adjust horizontally as needed
        zIndex: 10, // Ensure text is on top of icons
        transform: "translateY(-50%)", // Center text vertically within container
        fontWeight: "bold",
        textShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)", // Add some shadow for better visibility
    }
}}`.getReactComponent();

export const Icon = classy.state.component`skill-showcase`
    .from(() => {
        return (
            <ParallaxProvider>
                <SkillShowcaseContainer>
                    {/** SHould appear on the left */}
                    <ShufflingText
                        as={Text1}
                        text="Tools"/>
                    { /** should appear in the right */}
                    <ShufflingText
                        as={Text2}
                        text="Skills"/>
                    {skills.map((skill, index) => (
                        <Parallax key={index} speed={Math.random() * 40 - 20} rotate={[-20, 20]}>
                            { skill.name !== "Quask" ? 
                                <SkillIcon src={skill.icon} alt={skill.name} /> :
                                <SkillIcon src={skill.icon} alt={skill.name} style={{ backgroundColor: "black"}}/>
                            }
                        </Parallax>
                    ))}
                </SkillShowcaseContainer>
            </ParallaxProvider>
        );
    }).getReactComponent();
