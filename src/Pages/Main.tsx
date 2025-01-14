import React from 'react'
import { classy } from "@javierayala381/aurora-components";
import { Header } from '../Components/Header.tsx';
import { Section } from '../Components/Section.tsx';
import { HeadSection } from '../Components/HeadSection.tsx';
import ContactSection from '../Components/Contact.tsx';
import { WorkExperience } from './WorkExperience.tsx';
import { WordCarousel } from '../Components/WordCarousel.tsx';
import { AboutMe } from './AboutMe.tsx';
import { Icon } from '../Components/Icon.tsx';

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
const Main = classy.state.component`layout-component`
    .from(()=>{
        return(
            <>
            <Header></Header>
            <HeadSection></HeadSection>
            <Section title={"About Me"}>
                <AboutMe></AboutMe>
            </Section>
            <Section title={"Skills and tools"}>
                <WordCarousel words={skillsArray} direction='right'/>
                <WordCarousel words={skillsArray} direction='left'/>
                <Icon></Icon>
            </Section>
            <Section 
                title={"Here's a few things Im involved in right now"}
                style={{ display: "inline-flex", flexDirection: "column"}}
            >
                <WorkExperience></WorkExperience>
            </Section>
            <ContactSection></ContactSection>
            </>
        )
    }).getReactComponent()

export default Main;