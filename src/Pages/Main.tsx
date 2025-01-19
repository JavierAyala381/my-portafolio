import React from 'react'
import { classy } from "@javierayala381/aurora-components";
import { Header } from '../Components/Header.tsx';
import { Section } from '../Components/Section.tsx';
import { HeadSection } from '../Components/HeadSection.tsx';
import ContactSection from '../Components/Contact.tsx';
import { WorkExperience } from './WorkExperience.tsx';
import { AboutMe } from './AboutMe.tsx';
import { ToolsSkills } from './ToolsSkills.tsx';
import TwoSpheresBackground from '../Components/Test.tsx';

const Main = classy.state.component`layout-component`
    .from(()=>{
        return(
            <>
            {/*<TwoSpheresBackground></TwoSpheresBackground>*/}
            <Header></Header>
            <HeadSection></HeadSection>
            <Section title={"About Me"} sectionId='about'>
                <AboutMe></AboutMe>
            </Section>
            <Section title={"Skills and tools"} sectionId="skills">
                <ToolsSkills></ToolsSkills>
            </Section>
            <Section title={"Here's a few things Im involved in"} sectionId="projects">
                <WorkExperience></WorkExperience>
            </Section>
            <ContactSection></ContactSection>
            </>
        )
    }).getReactComponent()

export default Main;