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
import { useOnce } from '@javierayala381/aurora-components/dist/Api/stateApi';

interface IMobileContext {
    isMobile: boolean,
    windowsWidth: number | undefined
}

const Main = classy.state.component`layout-component`
    .setStates<IMobileContext>({ 
        isMobile: false,
        windowsWidth: undefined
    })
    .from(({ react })=> {

        useOnce(() => {
            window.addEventListener('resize', () => {
                const isMobile = window.innerWidth <= 768;
                react.dispatch("state", {
                    isMobile: isMobile,
                    windowsWidth: window.innerWidth
                })
            })
        });

        return (
        <>
            <TwoSpheresBackground></TwoSpheresBackground>
            <Header isMobile={react.state.isMobile}></Header>
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
            <Section title={"Contact"} sectionId="contact">
                <ContactSection></ContactSection>
            </Section>
        </>
        )
    }).getReactComponent()

export default Main;