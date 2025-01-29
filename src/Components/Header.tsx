
import React, { useEffect, useRef } from 'react'
import { classy, styled } from "@javierayala381/aurora-components";
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoClose } from 'react-icons/io5';
import { useOnce } from '@javierayala381/aurora-components/dist/Api/stateApi';

const HeaderContainer = styled.header`header-container ${{
    default: {
        position: "sticky",
        top: "0", // Make sure it sticks to the top of the page
        display: "flex",
        flexDirection: "row",
        padding: "5px clamp(10px, 5%, 35px)", // Dynamic horizontal padding based on screen width
        justifyContent: "space-between",
        zIndex: "20",
    }
}}`.getReactComponent()

const HeaderIcon = styled.div`header-icon ${{
    default: {
        cursor: "pointer",
        "& svg": {
            width: "clamp(20px, 5vw, 50px) !important", // Minimum 20px, scales with 5% of the viewport width, maximum 50px
        height: "clamp(20px, 5vw, 50px) !important", // Matches width for a consistent aspect ratio
        }
    }
}}`.getReactComponent()

const Container = styled.div`left-container ${{
    default: {
        display: "inline-flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "20px"
    }
}}`.getReactComponent()

const HeadEntry = styled.a`head-entry ${{
    default: {
        fontSize: "25px",
        fontWeight: "bold",
        color: "#333",                // Dark gray text for contrast
        backgroundColor: "#fff",      // Clean white background
        padding: "10px 20px",         // Balanced spacing
        borderRadius: "8px",          // Rounded edges for minimalism
        textDecoration: "none",       // No underline
        display: "inline-block",      // Prevent block-level appearance
        transition: "color 0.3s ease-in-out, transform 0.2s ease-in-out", 
        // Subtle hover effect without a box
        "&:hover": {
            color: "#007BFF",             // Change text color on hover
            transform: "scale(1.05)",     // Slight zoom for interaction feedback
        },
        "@media (max-width: 1200px)": {
            fontSize: "clamp(9px, 5vw, 15px)",
            padding: "5px 10px 5px 10px",
        }
    }
}}`.getReactComponent()

const PageName = styled.h1`page-name ${{
    default: {
        fontWeight: "bold",         // Make the name stand out
        color: "#222",              // Slightly darker gray for good contrast
        margin: "20px 0",           // Space around the title
        marginRight: "50px",
        textAlign: "center",        // Center align the page name
        letterSpacing: "1px",       // Slight spacing for readability
        lineHeight: "1.2",          // Adjust line height for visual appeal
        // ✅ Custom Styling for Line Break
        "&::before": {
            fontSize: "clamp(15px, 5vw, 35px)",           // Larger font for the page name
            content: '"| Javier"',    // Part before the dot
            display: "block"          // Forces it to break into a new line
        },
        "&::after": {
            fontSize: "clamp(15px, 5vw, 35px)",           // Larger font for the page name
            content: '"·Ayala >"',     // Part after the dot
            position: "relative",
            left: "52px"           // Also forces a line break
        }
    }
}}`.getReactComponent()

const Nav = styled.nav`navigation ${{
    default: {
        display: "inline-flex",
        flexDirection: "row",
        gap: "10px",
        margin: "0px 10px 0 10px",
        "@media (max-width: 768px)": {
            flexDirection: "column",
            gap: "5px",
            margin: "40px 40px 10px 10px",
            position: "absolute"
        }
    }
}}`.getReactComponent()

const NavMobile = styled.nav`mobile-nav ${{
    default: {
        position: "absolute",
        top: "90px", // Positioned just below the X button
        right: "10px",
        display: "inline-flex",
        flexDirection: "column",
        gap: "5px",
        margin: "0 auto",
        borderRadius: "12px", // Slightly larger border radius for elegance
        backgroundColor: "rgba(255, 255, 255, 0.1)", // Transparent white for glass effect
        backdropFilter: "blur(3px)", // Blurs content behind the nav
        boxShadow: "0 4px 16px rgba(0, 0, 0, 0.2)", // Subtle shadow for depth
        border: "1px solid rgba(255, 255, 255, 0.2)", // Thin border for a frosted glass look
        transform: "translateY(-20px)", // Start slightly above its final position
        transition: "opacity 0.4s ease, transform 0.4s ease", // Smooth animation
        zIndex: 1,
        padding: "10px 15px", // Add inner spacing
        "& a": {
            backgroundColor: "transparent"
        }
    }
}}`.getReactComponent()

interface IHeader {
    isOpen: boolean
    isMobile: boolean
}

interface HeaderArgs {
    isMobile: boolean
}

export const Header = classy.state.component<HeaderArgs>`Header`
    .setStates<IHeader>({ 
        isOpen: true,
        isMobile: false
    })
    .from(({ react, isMobile }) => {

        useEffect(() => 
            react.dispatch("isMobile", isMobile)
        ,[isMobile])

        const logic = useOnce(() => {
            return {
                navigate: (e, sectionName) => {
                    e.preventDefault(); // Prevent the default anchor behavior
                    const target = document.querySelector(`#${sectionName}`);
                    if (target) {
                    const offset = 70; // Adjust this value for the desired space
                    const topPosition = target.getBoundingClientRect().top + window.scrollY - offset;
                
                    window.scrollTo({
                        top: topPosition,
                        behavior: "smooth", // Smooth scrolling effect
                    });
                    }
                }
            }
        })

        return (
        <HeaderContainer>
                {/** This goes to the right */}
                <Container>
                    <PageName></PageName>
                    { react.state.isOpen && !react.state.isMobile && (
                        <Nav>
                            <HeadEntry href="#about"
                            onClick={e => logic.navigate(e, "about")}>About</HeadEntry>
                            <HeadEntry href="#skills"
                            onClick={e => logic.navigate(e, "skills")}>Skills</HeadEntry>
                            <HeadEntry href="#projects"
                            onClick={e => logic.navigate(e, "projects")}>Projects</HeadEntry>
                        </Nav> 
                    )}
                </Container>
                {/** This goes to the left */}
                <Container>
                    { react.state.isOpen && !react.state.isMobile && (
                        <Nav>
                            <HeadEntry href='#More'> More </HeadEntry>
                            <HeadEntry href="#contact"
                            onClick={e => logic.navigate(e, "contact")}>Contact</HeadEntry>
                        </Nav>
                    )}
                    { /** Hamburger menu Icon */}
                    <HeaderIcon>
                        { !react.state.isOpen ? 
                            <RxHamburgerMenu onClick={() => react.dispatch("isOpen", true)}/> : 
                            <IoClose onClick={() => react.dispatch("isOpen", false)}/> }
                            { react.state.isMobile && react.state.isOpen && 
                            <NavMobile>
                                <HeadEntry href="#about"
                                onClick={e => logic.navigate(e, "about")}
                                >About</HeadEntry>
                                <HeadEntry href="#skills"
                                onClick={e => logic.navigate(e, "skills")}
                                >Skills</HeadEntry>
                                <HeadEntry href="#projects"
                                onClick={e => logic.navigate(e, "projects")}
                                >Projects</HeadEntry>
                                <HeadEntry href='#More'> More </HeadEntry>
                                <HeadEntry href="#contact"
                                onClick={e => logic.navigate(e, "contact")}
                                >Contact</HeadEntry>
                            </NavMobile> 
                            }
                    </HeaderIcon>
                </Container>
            </HeaderContainer>
        )
    }).getReactComponent()