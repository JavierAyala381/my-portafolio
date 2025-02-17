import React from 'react';
import styles from './ContactSection.module.css';
import { classy, styled } from '@javierayala381/aurora-components';
import { BasicInput } from './BasicInput.tsx';

const UsefulLinks = styled.div`useful-links ${{
    default: {
        display: "inline-flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%"
    }
}}`.getReactComponent()

const Link = styled.a`link ${{
    default: {
        fontSize: "clamp(10px, 4vw, 20px)",
        fontStyle: "italic",
        margin: "clamp(10px, 1vw, 15px)", // Prevents excessive spacing
        transition: "color 0.3s ease", // Smooth color transition on hover
        cursor: "pointer",
        textDecoration: "none", // Remove underline by default
        "&:hover": {
            color: "#007bff" // Change color on hover (optional, choose color that fits design)
        }
    }
}}`.getReactComponent()

const FooterText = styled.span`footer-text ${{
    default: {
        fontSize: "14px",
        color: "#555",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        display: "block",
        marginTop: "20px"
        }
    }}`.getReactComponent();

const Title = styled.h2`title ${{
    default: {
        fontSize: "clamp(20px, 5vw, 36px)", // Scales the title font dynamically
        fontWeight: "bold",
        textAlign: "center", // Center-aligns the title
        margin: "20px 0", // Adds vertical margin
        color: "#333", // Choose a suitable color
    }
}}`.getReactComponent();

const Description = styled.p`description ${{
    default: {
        fontSize: "clamp(14px, 3vw, 18px)", // Dynamically scales the description font
        fontStyle: "italic",
        textAlign: "center", // Center-aligns the description
        color: "#666", // Lighter color for description
        maxWidth: "80%", // Constrains the width for better layout
        margin: "30px auto", // Centers the text within the container
    }
}}`.getReactComponent();
    
const defaultEmail = {
    name: '',
    email: '',
    message: ''
}
const ContactSection = classy.state.component`contact`
    .setStates(defaultEmail)
    .from(({ id, react }) => {

    // Handle form submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simple mailto link for sending the email
        const mailtoLink = `mailto:ayalajavier381@gmail.com?subject=Message from ${react.state.name}&body=Name: ${react.state.name}%0D%0AEmail: ${react.state.email}%0D%0AMessage:%0D%0A${react.state.message}`;
        window.location.href = mailtoLink; // Open the default email client with the pre-filled content
        react.dispatch("state", defaultEmail)
    };

    return (
        <footer id={id} style={{ backgroundColor: "white", marginTop: "20px", padding: "20px"}}>
            <UsefulLinks>
                <Link 
                    href="https://www.linkedin.com/in/javier-ayala-oropeza-345225210/"
                    target="_blank"
                    rel="noopener noreferrer"
                >Linkedin</Link>
                <Link
                    href="https://github.com/JavierAyala381"
                    target="_blank"
                    rel="noopener noreferrer"
                >GitHub</Link>
                <Link
                    href="https://drive.google.com/drive/folders/1_96_Lp6-VRSQjyV5p4fO7ThSJ6wGzazK?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                >Read.CV</Link>
                <Link
                    href="https://www.credly.com/users/javier-ayala-oropeza.508452d6"
                    target="_blank"
                    rel="noopener noreferrer"
                >Credly</Link>
                <Link>Other</Link>
            </UsefulLinks>
            <div className={styles.container}>
                <Title>Get in Touch</Title>
                <Description>
                    I’d love to hear from you! Whether you have a question, want to collaborate, 
                    or just say hello, feel free to drop me a message below.
                </Description>
                <form className={styles.contactForm} onSubmit={handleSubmit}>
                    <BasicInput 
                        labelText={'Name'} 
                        onChange={e => react.dispatch("name", e.target.value)}
                        required={ false }
                        inputDetails={{
                            value: react.state.name
                        }}
                    />
                    <BasicInput 
                        labelText={'Email'} 
                        onChange={e => react.dispatch("email", e.target.value)} 
                        required={ false }
                        inputDetails={{
                            value: react.state.email
                        }}
                    />
                    <BasicInput 
                        labelText={'Message'} 
                        onChange={e => react.dispatch("message", e.target.value)} 
                        required={ false }
                        inputDetails={{
                            type: "text",
                            value: react.state.message
                        }}
                    />
                    <button type="submit" className={styles.submitButton}>Send Message</button>
                </form>
            </div>
            <FooterText>
                @2025 Javier Ayala Oropeza All Rights Reserved
            </FooterText>
        </footer>
    );
}).getReactComponent();

export default ContactSection;
