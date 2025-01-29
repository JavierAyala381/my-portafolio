import { classy, styled } from "@javierayala381/aurora-components";
import React from "react";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

const CardContainer = styled.div`card-container ${{
    default: {
        position: "relative",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center", // Center the card's content
        alignItems: "center", // Vertically center content inside the card
        width: "350px",  // Default width
        height: "500px",
        borderRadius: "12px", // Slightly larger radius for more elegance
        boxShadow: "0 6px 20px rgba(0, 0, 0, 0.1)", // Softer shadow for a more modern look
        overflow: "hidden", 
        backgroundColor: "white",
        transition: "transform 0.3s ease-in-out, width 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
        transformOrigin: "center", // Expand centered without shifting
        backdropFilter: "blur(8px)", // Adds a soft blur effect when hovered
        zIndex: 1, // Ensure the card stays above other elements
        "&:hover": {
            transform: "scale(1.05)", // Slightly enlarge on hover
            width: "850px", // Increase width on hover
            boxShadow: "0 12px 40px rgba(0, 0, 0, 0.2)", // Larger shadow on hover for emphasis
            backdropFilter: "blur(12px)", // Intensify blur on hover for better effect
        },
        "@media (max-width: 1500px)": {
            gap: "20px",
            flexDirection: "row", // Reduce font size for mobile
            width: "100%",
            // @ts-expect-error
            "&:hover": {
                transform: "none", // Disable hover effects entirely
                width: "100%", // Ensure it doesn’t resize
                boxShadow: "none", // Ignore hover shadow
                backdropFilter: "none", // Ignore hover blur
            }
        },
        "@media (max-width: 768px)": {
            flexDirection: "column", // Stack content vertically for smaller screens
            width: "100%", // Make width responsive
            height: "auto", // Adjust height dynamically
            transform: "none", // Remove hover transform
            boxShadow: "0 6px 20px rgba(0, 0, 0, 0.1)", // Use default shadow
            backdropFilter: "none", // Remove blur effects
            // @ts-expect-error
            "&:hover": {
                transform: "none", // Disable hover effects entirely
                width: "100%", // Ensure it doesn’t resize
                boxShadow: "none", // Ignore hover shadow
                backdropFilter: "none", // Ignore hover blur
            }
        }
    }
}}`.getReactComponent()

const CardImage = styled.img`card-img ${{
    default: {
        width: "350px",
        height: "100%",
        objectFit: "contain", // or use "contain" if you want the entire image visible without cropping
        scale: 0.8,
        background: "transparent", // Removes any background from the image
        borderRadius: "8px", // Slight rounding for aesthetics if you like
        boxShadow: "none", // Removes any default shadow from the image
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

const DescriptionContainer = styled.div`description-container ${{
    default: {
        height: "100%",
        display: "inline-flex",
        flexDirection: "column",
        overflow: "scroll",
        padding: "20px"
    }
}}`.getReactComponent()

interface ICard {
    name: string,
    date: string,
    description: string,
    src: string,
    altText: string,
    details?: any
}


const Card = classy.state.component<ICard>`card-component`
    .from(({ name, date, description, src, altText, details }) => {
        return (
            <CardContainer>
                {/** this part shoes a prev of the job experience*/}
                <div>
                    <CardImage src={src} alt={altText} />
                </div>

                {/**this is hidden until hover */}
                <DescriptionContainer>
                    <CardTitle>{name}</CardTitle>
                    <CardDate>{date}</CardDate>
                    <CardDescription>
                        {description}
                        {details}
                    </CardDescription>
                </DescriptionContainer>
            </CardContainer>
        )
    }).getReactComponent()

const CardCarousel = styled.div`carousel ${{
    default: {
        display: "inline-flex",
        flexDirection: "row",     
        justifyContent: "space-around",
        margin: "20px 10px 20px 10px",
        "@media (max-width: 1500px)": {
            gap: "20px",
            flexDirection: "column", // Reduce font size for mobile
        }
    }
}}`.getReactComponent()

const IFrame = styled.iframe`external-link ${{
    default: {
        position: "relative",
        width: "100%",
        height: "100%",
        scale: "0.9",
        margin: "10px"
    }
}}`.getReactComponent()

const Img = styled.img`styled-image ${{
    default: {
        position: "relative",
        width: "100%",
        margin: "10px",
        scale: "0.9"
    }
}}`.getReactComponent()

const experience: ICard[] = [
    {
        name: "Software and Database Developer",
        date: "April 2023 - Current",
        description: `Implemented features into the Wolfram language using both the language itself and Java. I oversee the development
            lifecycle, from solution design and development to testing and integration. I have contributed as a full-stack
            engineer, developing web servers, back-end architectures, and user-friendly interfaces (UI). I also manage databases,
            integrating multiple data sources, building pipelines, and optimizing processes.`,
        src: "images/Wolfram.png",
        altText: "Wolfram logo"
    }, 
    {
        name: "Data Cloud Architect",
        date: "June 2023 - August 2024",
        description: `Design, deploy and mange big data ETL pipelines and procedures in cloud environments. Collaborating closely
        with cross-functional teams, I have achieved the implementation of scalable and resilient cloud architectures that
        improve data accessibility, reliability, and performance for our clients.`,
        src: "images/HSBC.png",
        altText: "HSBC logo"
    },
    {
        name: "Front-end Developer,",
        date: "October 2024 - Current",
        description: `
            Developed and optimized user-friendly web pages using React and other front-end technologies. Focused on
            creating, intuitive interfaces that significantly enhanced the user experience. Collaborated with cross-functional
            teams to implement responsive designs, improve site performance, and ensure accessibility across various devices
            and platforms
        `,
        src: "images/MindCapital.png",
        altText: "Mind Capital Logo",
        details: <>
            <Img src="images/MindCapitalMainPage.png"></Img>
        </>
    },
    {
        name: "Data science and Software professor",
        date: "February 2023 - August 2024",
        description: `Fostered an engaging learning environment, teaching Java, Python, C, and R with a focus on data analysis, AI,
        and machine learning. Guided students in extracting insights from data and building intelligent systems to address
        real-world challenges`,
        src: "images/Amerike.png",
        altText: "Amerike University logo"
    },
    {
        name: "Project Manager NEXT-U Education",
        date: "February 2023 - August 2024",
        description: `Developed and implemented an effective education plan for teaching web technologies, ensuring comprehensive
        coverage of core concepts. Supervised instructors, designed course materials, created structured timelines, and
        provided ongoing guidance to students.`,
        src: "images/NextU.png",
        altText: "NextU Education"
    },
    {
        name: "Project Manager - Aurora Software",
        date: "August 2021 - February 2023",
        description: `Directed the development of Aurora Software a web development service, aim to make web design faster and
        easier but rigorous. By Analyzing and Assessing the areas of opportunities of current state of the art web design
        technologies, we achieved to create a competitive service. Cooperating closely with other partners today aurora
        software is integrated in commercial applications.`,
        src: "images/Aurora.png",
        altText: "Aurora Software logo"
    },
    {
        name: "Quality Assurance QA Intern",
        date: "February 2022 - July 2022",
        description: `I assumed responsibility for managing the life-cycle of the music streaming platform Claro Música. This involved
        meticulously executing test cases, documenting results, and diligently tracking defects to resolution. During my
        stay, I build meaningful and collaborative relationships with colleagues and customers.`,
        src: "images/Claro.png",
        altText: "CTIN logo"
    },
    {
        name: "Autonomous Vehicles Navigation",
        date: "January 2022 - June 2022",
        description: `I assemble and program a self-driving vehicle utilizing modern artificial intelligence, machine learning and control
        tools and techniques inside embedded systems. Demonstrated the usage of autonomously navigation in urban
        environments. Achieved to represent Mexico City at national level in a Manchester Robotics contest.`,
        src: "images/ManchesterRobotics.png",
        altText: "Manchester Robotics logo",
        details: (
            <>
            <p>Give it a look to the paper</p>
            <IFrame src="https://drive.google.com/file/d/1d1wYL7YU8aDuPmtEMTO5uE1XCH85C7G1/preview" width="640" height="480" allow="autoplay"></IFrame>
            <p>Check out the live performance: </p>
            <IFrame src="https://www.youtube.com/embed/Z_kojX7WbAo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></IFrame>
            </>
        )
    },
    {
        name: "Intelligent robotics implementation",
        date: "January 2023 - June 2023",
        description: `I assembled and programmed a self-driving car using AI, machine learning, and modern control
        tools. The car successfully navigated roads and identified traffic signals using neural networks, computer vision,
        and fuzzy control. This project represented Mexico City in a Manchester Robotics contest.`,
        src: "images/ManchesterRobotics.png",
        altText: "Manchester Robotics logo",
        details: (
            <>
            <p>Give it a look</p>
            <IFrame src="https://drive.google.com/file/d/17yuFudiAKPRaKJtxOYWRzuk4IvgSPYCY/preview" allow="autoplay"></IFrame>
            <IFrame src="https://www.youtube.com/embed/JjEkFdsoqdk?si=a7hPN81y3rKfR-Lp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></IFrame>
            <IFrame src="https://www.youtube.com/embed/ZyDoD3CJKcM?si=LFZ74u3tt7fTAor2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></IFrame>
            </>
        )
    },
    {
        name: "Infotainment System Design",
        date: "January 2020 - June 2020",
        description: `I designed and tested a digital music and audiovisual content system on an FPGA using microcontrollers
            and microprocessors. The project was presented effectively to Intel and was selected to represent Mexico City on a
            national level.`,
        src: "images/Intel.png",
        altText: "Intel logo",
        details: <>
            <p>Give it a look</p>
            <IFrame src="https://drive.google.com/file/d/1Odtt3lV4vJnmTOb7Yc_hTkK2khG9SpaZ/preview" allow="autoplay"></IFrame>
        </>
    },
    {
        name: "Smart City Project",
        date: "August 2021 - December 2021",
        description: `I developed a smart city system using microcontrollers connected to a cloud-based data hosting service
            for real-time climate data acquisition. This project involved designing an original network architecture and
            integrating sensors and actuators for home automation.`,
        src: "images/Cisco.png",
        altText: "Cisco logo",
        details: <>
            <p>Give it a look</p>
            <IFrame src="https://drive.google.com/file/d/1T0vO7cwblnvc33QOVw7l7SaqiWyGP4_w/preview" allow="autoplay"></IFrame>
        </>
    }, 
    {
        name: "Teacher Assistant Trinity College",
        date: "September 2024 - December 2024",
        description: `
        I worked as a Teacher Assistant for Geometry and Group Theory courses at Trinity College. 
        My responsibilities included conducting tutorials to help students grasp complex mathematical concepts, 
        grading assignments and exams to ensure fair and consistent evaluation, 
        and providing one-on-one support to students seeking additional help with the coursework. 
        I also assisted in organizing course materials and contributed to creating a collaborative and engaging learning environment.
    `,
        src: "images/Trinity.png",
        altText: "Trinity College"
    }
];

const AnimatedText = styled.div`${{
    default: {
        top: "-60px",
        fontSize: "500px",
        fontFamily: "impact",
        letterSpacing: "50px",
        width: "100%",
        height: "100%",
        zIndex: 1,
        position: "absolute",
        fontWeight: "bold",
    }
}}`.getReactComponent()

export const WorkExperience = classy.state.component`work-experience-section`
    .from(() => {
       // Helper function to split an array into chunks of 4
    const chunkArray = (array: any[], size: number) => {
        const result: any[] = [];
        for (let i = 0; i < array.length; i += size) {
        result.push(array.slice(i, i + size));
        }
        return result;
    };
    
    // Render multiple CardCarousels with 4 cards each
    const cardChunks = chunkArray(experience, 3);
    
    return (<>
        <ParallaxProvider>
            <Parallax 
                speed={-20}
                scale={[10, 0.5, 'easeOut']} // Start text 20x its size and scale down to normal size
                style={{ position: "relative" }}
            >
            <AnimatedText>
                SCIENCE IS A GREAT RABBIT HOLE TO GO DOWN
            </AnimatedText>
            </Parallax>
        </ParallaxProvider>
        {cardChunks.map((chunk, index) => (
            <CardCarousel key={index}>
                {chunk.map((e, idx) => (
                    <Card key={idx} {...e} />
                ))}
            </CardCarousel>
        ))}
        </>
    );
    }).getReactComponent()