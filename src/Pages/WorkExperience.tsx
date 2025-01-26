import { classy, styled } from "@javierayala381/aurora-components";
import React from "react";
import { keyframes } from "@emotion/css";
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
            width: "100%"
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
                    <CardImage src={ src } alt={altText}/>
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


const experience: ICard[] = [
    {
        name: "Software and Database Developer",
        date: "April 2023 - Current",
        description: `At Wolfram Research, I focus on optimizing queries for lightning-fast response times. Through the
            use of cutting-edge technologies and methodologies, I honed my abilities in handling and analyzing large datasets.
            Utilizing Java development expertise, I created powerful software solutions that facilitated seamless data accessibility
            for various applications. Furthermore, my proficiency in managing multiple data sources enabled me to integrate
            them into cohesive systems.`,
        src: "http://localhost:3000/my-portafolio/images/Wolfram.png",
        altText: "Wolfram logo"
    },
    {
        name: "Data Cloud Architect",
        date: "June 2023 - August 2024",
        description: `As a Data Cloud Architect at HSBC, my role revolves around harnessing big data technologies to
            create and optimize ETL pipelines and procedures. I’ve been instrumental in designing cloud architectures tailored to
            facilitate the smooth migration of processes into the cloud environment, ensuring scalability, resilience, and adherence to
            best practices and security standards.`,
        src: "http://localhost:3000/my-portafolio/images/HSBC.png",
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
        src: "http://localhost:3000/my-portafolio/images/MindCapital.png",
        altText: "Mind Capital Logo",
        details: <>
            <img src="images/MindCapitalMainPage.png"></img>
        </>
    },
    {
        name: "STEAM Professor",
        date: "February 2023 - August 2024",
        description: `As a professor at Amerike University, I have had the privilege of designing and delivering courses
            focused on Science, Technology, Engineering, Arts, and Mathematics (STEAM). In this role, I have been dedicated
            to creating an engaging and intellectually stimulating learning environment where students are encouraged to
            explore, question, and innovate.`,
        src: "http://localhost:3000/my-portafolio/images/Amerike.png",
        altText: "Amerike University logo"
    },
    {
        name: "Project Manager NEXT-U Education",
        date: "February 2023 - August 2024",
        description: `Led and managed a web development course, overseeing the coordination of classes and development
        of the curriculum. Responsibilities included creating the educational plan, designing assessments, and ensuring seamless execution 
        of the program. Worked closely with instructors and students to ensure effective learning outcomes and the successful completion of the course."
        This version highlights the leadership, strategic planning, and collaboration involved, making it sound more polished and professional`,
        src: "http://localhost:3000/my-portafolio/images/NextU.png",
        altText: "NextU Education"
    },
    {
        name: "Project Manager",
        date: "August 2021 - February 2023",
        description: `As the Project Manager of Aurora, a software solution for the healthcare industry, I led the development
            of a platform that revolutionized the management of healthcare data and streamlined health facility administration.
            With the help of technologies like .NET, MongoDB, and computer vision, I ensured client satisfaction through effective
            client management and communication.`,
        src: "http://localhost:3000/my-portafolio/images/Aurora.png",
        altText: "Aurora Software logo"
    },
    {
        name: "Quality Assurance QA Intern",
        date: "February 2022 - July 2022",
        description: `As a QA intern at CTIN, I managed the lifecycle of the music streaming platform Claro Música.
            This involved executing test cases, documenting results, and diligently tracking defects to resolution, while also
            gaining experience in DB management and API testing.`,
        src: "http://localhost:3000/my-portafolio/images/Claro.png",
        altText: "CTIN logo"
    },
    {
        name: "Autonomous Vehicles Navigation",
        date: "January 2022 - June 2022",
        description: `I assembled and programmed a self-driving car using AI, machine learning, and modern control
            tools. The car successfully navigated roads and identified traffic signals using neural networks, computer vision,
            and fuzzy control. This project represented Mexico City in a Manchester Robotics contest.`,
        src: "http://localhost:3000/my-portafolio/images/ManchesterRobotics.png",
        altText: "Manchester Robotics logo",
        details: (
            <>
            <div>Give it a look</div>
            <iframe src="https://drive.google.com/file/d/1d1wYL7YU8aDuPmtEMTO5uE1XCH85C7G1/preview" width="640" height="480" allow="autoplay"></iframe>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/Z_kojX7WbAo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </>
        )
    },
    {
        name: "Intelligent robotics implementation",
        date: "January 2023 - June 2023",
        description: `I assembled and programmed a self-driving car using AI, machine learning, and modern control
        tools. The car successfully navigated roads and identified traffic signals using neural networks, computer vision,
        and fuzzy control. This project represented Mexico City in a Manchester Robotics contest.`,
        src: "http://localhost:3000/my-portafolio/images/ManchesterRobotics.png",
        altText: "Manchester Robotics logo",
        details: (
            <>
            <div>Give it a look</div>
            <iframe src="https://drive.google.com/file/d/17yuFudiAKPRaKJtxOYWRzuk4IvgSPYCY/preview" width="640" height="480" allow="autoplay"></iframe>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/JjEkFdsoqdk?si=a7hPN81y3rKfR-Lp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/ZyDoD3CJKcM?si=LFZ74u3tt7fTAor2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </>
        )
    },
    {
        name: "Infotainment System Design",
        date: "January 2020 - June 2020",
        description: `I designed and tested a digital music and audiovisual content system on an FPGA using microcontrollers
            and microprocessors. The project was presented effectively to Intel and was selected to represent Mexico City on a
            national level.`,
        src: "http://localhost:3000/my-portafolio/images/Intel.png",
        altText: "Intel logo",
        details: <>
            <iframe src="https://drive.google.com/file/d/1Odtt3lV4vJnmTOb7Yc_hTkK2khG9SpaZ/preview" width="640" height="480" allow="autoplay"></iframe>
        </>
    },
    {
        name: "Smart City Project",
        date: "August 2021 - December 2021",
        description: `I developed a smart city system using microcontrollers connected to a cloud-based data hosting service
            for real-time climate data acquisition. This project involved designing an original network architecture and
            integrating sensors and actuators for home automation.`,
        src: "http://localhost:3000/my-portafolio/images/Cisco.png",
        altText: "Cisco logo",
        details: <>
        <iframe src="https://drive.google.com/file/d/1T0vO7cwblnvc33QOVw7l7SaqiWyGP4_w/preview" width="640" height="480" allow="autoplay"></iframe>
        </>
    }, 
    {
        name: "Teacher Assistant Trinity College",
        date: "January 2025 - ?",
        description: `
        I worked as a Teacher Assistant for Geometry and Group Theory courses at Trinity College. 
        My responsibilities included conducting tutorials to help students grasp complex mathematical concepts, 
        grading assignments and exams to ensure fair and consistent evaluation, 
        and providing one-on-one support to students seeking additional help with the coursework. 
        I also assisted in organizing course materials and contributed to creating a collaborative and engaging learning environment.
    `,
        src: "http://localhost:3000/my-portafolio/images/Trinity.png",
        altText: "Trinity College"
    }
];

const AnimatedText = styled.div`${{
    default: {
        top: "-85px",
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
                speed={-10}
                scale={[15, 0.5, 'easeOut']} // Start text 20x its size and scale down to normal size
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