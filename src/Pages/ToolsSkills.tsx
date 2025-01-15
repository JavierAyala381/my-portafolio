import { classy } from "@javierayala381/aurora-components";
import { WordCarousel } from "../Components/WordCarousel.tsx";
import React from "react";
import { Icon } from "../Components/Icon.tsx";


const skillsArray = [
    "Initiative", 
    "Conflict Resolution", 
    "Teamwork", 
    "Professionalism", 
    "Professional Ethics", 
    "Active Listening", 
    "Strong oral and written communication skills", 
    "Analytical mind", 
    "Problem-Solving", 
    "Able to make decisions efficiently", 
    "Marked leadership skills"
];

const additionalSkillsArray = [
    "Time Management", 
    "Adaptability", 
    "Creativity", 
    "Emotional Intelligence", 
    "Collaboration", 
    "Project Management", 
    "Critical Thinking", 
    "Attention to Detail", 
    "Negotiation", 
    "Interpersonal Skills", 
    "Multitasking", 
    "Decision Making"
];

export const ToolsSkills = classy.component`skills`
    .from(() => {
        return (
            <>
                <WordCarousel words={skillsArray} direction='right' />
                <WordCarousel words={additionalSkillsArray} direction='left' />
                <Icon></Icon>
            </>
        )
    }).getReactComponent()