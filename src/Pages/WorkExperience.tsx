import { classy, styled } from "@javierayala381/aurora-components";
import React from "react";

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

const DescriptionContainer = styled.div`container ${{
    default: {
        display: "inline-flex",
        flexDirection: "column",
        padding: "20px",
        overflow: "scroll"
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
        flexDirection: "row",     
        justifyContent: "space-around",
        margin: "20px 10px 20px 10px"
    }
}}`.getReactComponent()


const experience: ICard[] = [
    {
        name: "Software and Database Developer",
        date: "April 2023 - Current",
        description: `At Wolfram Research, I focus on optimizing queries for lightning-fast response times. Through the
            use of cutting-edge technologies and methodologies, I honed my abilities in handling and analyzing large datasets.
            Utilizing Java development expertise, I created powerful software solutions that facilitated seamless data accessibility
            for various applications. Furthermore, my proficiency in managing multiple data sources enabled me to integrate
            them into cohesive systems.`,
        src: "images/Wolfram.png",
        altText: "Wolfram logo"
    },
    {
        name: "Data Cloud Architect",
        date: "June 2023 - August 2024",
        description: `As a Data Cloud Architect at HSBC, my role revolves around harnessing big data technologies to
            create and optimize ETL pipelines and procedures. I’ve been instrumental in designing cloud architectures tailored to
            facilitate the smooth migration of processes into the cloud environment, ensuring scalability, resilience, and adherence to
            best practices and security standards.`,
        src: "images/HSBC.png",
        altText: "HSBC logo"
    },
    {
        name: "UI and UX Designer",
        date: "October 2024 - Current",
        description: `As a UI and UX Designer for Mind Capital, I have been responsible for conceptualizing and developing user-centered 
            designs that enhance the overall user experience. My work involves creating wireframes, prototypes, and high-fidelity mockups, 
            focusing on intuitive navigation, accessibility, and modern design principles. I have collaborated closely with development 
            teams to ensure design consistency across all digital products, while incorporating feedback to iteratively improve the interfaces. 
            The refined design approach has led to increased user satisfaction, reduced friction in the user journey, and improved product engagement metrics.
            The collaboration with the development team ensured seamless design implementation, contributing to a more cohesive and professional digital experience.`,
        src: "/images/MindCapital.png",
        altText: "Mind Capital Logo"
    },
    {
        name: "STEAM Professor",
        date: "February 2023 - August 2024",
        description: `As a professor at Amerike University, I have had the privilege of designing and delivering courses
            focused on Science, Technology, Engineering, Arts, and Mathematics (STEAM). In this role, I have been dedicated
            to creating an engaging and intellectually stimulating learning environment where students are encouraged to
            explore, question, and innovate.`,
        src: "/images/Amerike.png",
        altText: "Amerike University logo"
    },
    {
        name: "Project Manager",
        date: "August 2021 - February 2023",
        description: `As the Project Manager of Aurora, a software solution for the healthcare industry, I led the development
            of a platform that revolutionized the management of healthcare data and streamlined health facility administration.
            With the help of technologies like .NET, MongoDB, and computer vision, I ensured client satisfaction through effective
            client management and communication.`,
        src: "/images/Aurora.png",
        altText: "Aurora Software logo"
    },
    {
        name: "Quality Assurance QA Intern",
        date: "February 2022 - July 2022",
        description: `As a QA intern at CTIN, I managed the lifecycle of the music streaming platform Claro Música.
            This involved executing test cases, documenting results, and diligently tracking defects to resolution, while also
            gaining experience in DB management and API testing.`,
        src: "/images/Claro.png",
        altText: "CTIN logo"
    },
    {
        name: "Autonomous Vehicles Navigation",
        date: "January 2022 - June 2022",
        description: `I assembled and programmed a self-driving car using AI, machine learning, and modern control
            tools. The car successfully navigated roads and identified traffic signals using neural networks, computer vision,
            and fuzzy control. This project represented Mexico City in a Manchester Robotics contest.`,
        src: "/images/ManchesterRobotics.png",
        altText: "Manchester Robotics logo"
    },
    {
        name: "Infotainment System Design",
        date: "January 2020 - June 2020",
        description: `I designed and tested a digital music and audiovisual content system on an FPGA using microcontrollers
            and microprocessors. The project was presented effectively to Intel and was selected to represent Mexico City on a
            national level.`,
        src: "/images/Intel.png",
        altText: "Intel logo"
    },
    {
        name: "Smart City Project",
        date: "August 2021 - December 2021",
        description: `I developed a smart city system using microcontrollers connected to a cloud-based data hosting service
            for real-time climate data acquisition. This project involved designing an original network architecture and
            integrating sensors and actuators for home automation.`,
        src: "/images/Cisco.png",
        altText: "Cisco logo"
    }
];

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
    
    return (
        <>
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