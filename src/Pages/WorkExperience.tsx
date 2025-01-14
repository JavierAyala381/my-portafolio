import { classy, styled } from "@javierayala381/aurora-components";
import React from "react";

const CardContainer = styled.div`card-container ${{
    default: {
        position: "relative",
        display: "flex",
        flexDirection: "row",
        width: "300px",  // Default width
        height: "500px",
        borderRadius: "10px",
        boxShadow: "#e7e7e7 6px 4px 20px 0px",
        overflow: "hidden", 
        transition: "transform 0.3s ease-in-out, width 0.3s ease-in-out",
        margin: "20px",
        "&:hover": {
            transform: "scale(1.05)", // Expands the card slightly on hover
            width: "700px",          // Grows in width to reveal content
        }
    }
}}`.getReactComponent()

const CardImage = styled.img`card-img ${{
    default: {
        width: "300px",
        height: "100%",
        objectFit: "contain" // or use "contain" if you want the entire image visible without cropping
    }
}}`.getReactComponent()

// Title element for the card
const CardTitle = styled.h1`card-title ${{
    default: {
        fontSize: "28px",
        fontWeight: "700",
        color: "#333",
        marginBottom: "10px"
    }
}}`.getReactComponent();

// Date element for the card
const CardDate = styled.span`card-date ${{
    default: {
        fontSize: "14px",
        fontWeight: "500",
        color: "#666",
        letterSpacing: "1px",
        textTransform: "uppercase"
    }
}}`.getReactComponent();

// Description element for the card
const CardDescription = styled.span`card-description ${{
    default: {
        fontSize: "16px",
        lineHeight: "1.6",
        color: "#555"
    }
}}`.getReactComponent();

const DescriptionContainer = styled.div`container ${{
    default: {
        display: "inline-flex",
        flexDirection: "column",
        padding: "20px"
    }
}}`.getReactComponent()

interface ICard {
    name: string,
    date: string,
    description: string,
    src: string,
    altText: string
}

const Card = classy.state.component<ICard>`card-component`
    .from(({ name, date, description, src, altText }) => {
        return (
            <CardContainer>
                {/** this part shoes a prev of the job experience*/}
                <CardImage src={src} alt={altText}/>
                {/**this is hidden until hover */}
                <DescriptionContainer>
                    <CardTitle>{name}</CardTitle>
                    <CardDate>{date}</CardDate>
                    <CardDescription>
                        {description}
                    </CardDescription>
                </DescriptionContainer>
            </CardContainer>
        )
    }).getReactComponent()

const CardCarousel = styled.div`carousel ${{
    default: {
        display: "inline-flex",
        flexDirection: "row"
    }
}}`.getReactComponent()


const experience: ICard[] = [
    {
        name: "Software and Database Developer",
        date: "April 2023 Current",
        description: `At Wolfram Research, I focus on optimizing queries for lightning-fast response times. Through the
            use of cutting-edge technologies and methodologies, I honed my abilities in handling and analyzing large datasets.
            Utilizing Java development expertise, I created powerful software solutions that facilitated seamless data accessibility
            for various applications. Furthermore, my proficiency in managing multiple data sources enabled me to integrate
            them into cohesive systems.
            Outcome: I gained expertise in optimizing queries for lightning-fast response times and handling extensive datasets.
            My proficiency in Java development enabled me to create user-friendly software solutions for seamless data
            accessibility. Managing multiple data sources, I developed robust data pipelines and streamlined integration
            processes, facilitating efficient workflows and data-driven decision-making`,
        src: "/images/Wolfram.png",
        altText: "wolfram logo"
    }, {
        name: "Data Cloud Architect",
        date: "June 2023 - August 2024",
        description: `
            As a Data Cloud Architect at HSBC, my role revolves around harnessing big data technologies create
            and optimize ETL pipelines and procedures. I’ve been instrumental in designing cloud architectures tailored to
            facilitate the smooth migration of processes into the cloud environment. This involves ensuring scalability, resilience,
            and adherence to best practices and security standards.
            Outcome: Working closely with cross-functional teams, I’ve championed the implementation of scalable and resilient
            cloud architectures, aligning them with HSBC’s specific data ecosystem requirements. I’ve stayed at the forefront of
            cloud computing and big data analytics advancements, integrating innovative solutions to bolster data accessibility,
            reliability, and performance`,
        src: "/images/HSBC.png",
        altText: "HSBC logo"
    }
]

export const WorkExperience = classy.state.component`work-experience-section`
    .from(() => {
        return (
            <CardCarousel>
                {experience.map(e => <Card {...e}/>)}
            </CardCarousel>
        )
    }).getReactComponent()