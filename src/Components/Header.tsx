
import React from 'react'
import { classy, styled } from "@javierayala381/aurora-components";
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoClose } from 'react-icons/io5';

const HeaderContainer = styled.header`header-container ${{
    default: {
        position: "sticky",
        top: "0", // Make sure it sticks to the top of the page
        display: "flex",
        flexDirection: "row",
        margin: "5px 35px 5px 35px",
        justifyContent: "space-between",
        zIndex: "20"
    }
}}`.getReactComponent()

const HeaderIcon = styled.div`header-icon ${{
    default: {
        cursor: "pointer",
        "& svg": {
            width: "35px !important",
            height: "35px !important"
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
        }
    }
}}`.getReactComponent()

const PageName = styled.h1`page-name ${{
    default: {
        fontSize: "35px",           // Larger font for the page name
        fontWeight: "bold",         // Make the name stand out
        color: "#222",              // Slightly darker gray for good contrast
        margin: "20px 0",           // Space around the title
        marginRight: "50px",
        textAlign: "center",        // Center align the page name
        letterSpacing: "1px",       // Slight spacing for readability
        lineHeight: "1.2",          // Adjust line height for visual appeal
        // ✅ Custom Styling for Line Break
        "&::before": {
            content: '"| Javier"',    // Part before the dot
            display: "block"          // Forces it to break into a new line
        },
        "&::after": {
            content: '"·Ayala >"',     // Part after the dot
            position: "relative",
            left: "52px"           // Also forces a line break
        }
    }
}}`.getReactComponent()

const Nav = styled.nav`navigation ${{
    default: {
        margin: "0px 10px 0 10px"
    }
}}`.getReactComponent()

interface IHeader {
    isOpen: boolean
}
export const Header = classy.state.component`Header`
    .setStates<IHeader>({ isOpen: true })
    .from(({ react }) => {
        return (
            <HeaderContainer>
            {/** This goes to the right */}
            <Container>
                <PageName></PageName>
                { react.state.isOpen && (
                    <Nav>
                        <HeadEntry href="#about">About</HeadEntry>
                        <HeadEntry href="#skills">Skills</HeadEntry>
                        <HeadEntry href="#projects">Projects</HeadEntry>
                    </Nav> 
                )}
            </Container>
            <Container>
                { react.state.isOpen && (
                    <Nav>
                        <HeadEntry href='#More'> More </HeadEntry>
                        <HeadEntry href="#contact">Contact</HeadEntry>
                    </Nav>
                )}
                { /** Hamburger menu Icon */}
                <HeaderIcon>
                    { !react.state.isOpen ? 
                        <RxHamburgerMenu onClick={() => react.dispatch("isOpen", true)}/> : 
                        <IoClose onClick={() => react.dispatch("isOpen", false)}/> }
                </HeaderIcon>
            </Container>
            </HeaderContainer>
        )
    }).getReactComponent()