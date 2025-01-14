import React from 'react';
import styles from './ContactSection.module.css';
import { classy, styled } from '@javierayala381/aurora-components';
import { BasicInput } from './BasicInput.tsx';

const UsefulLinks = styled.div`useful-links ${{
    default: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center"
    }
}}`.getReactComponent()

const Link = styled.a`link ${{
    default: {
        fontSize: "20px",
        fontStyle: "italic",
        margin: "10px 20px 10px 20px"
    }
}}`.getReactComponent()

const ContactSection = classy.component`contact-me`
    .from(() => {
    return (
        <section className={styles.contactSection}>
            <UsefulLinks>
                <Link>Linkedin</Link>
                <Link>GitHub</Link>
                <Link>Read.CV</Link>
                <Link>Credly</Link>
                <Link>Other</Link>
            </UsefulLinks>
            <div className={styles.container}>
                <h2 className={styles.title}>Get in Touch</h2>
                <p className={styles.description}>
                    I’d love to hear from you! Whether you have a question, want to collaborate, 
                    or just say hello, feel free to drop me a message below.
                </p>
                <form className={styles.contactForm}>
                    <BasicInput 
                        labelText={'Name'} 
                        onChange={() => {}} 
                        required={ false }
                    />
                    <BasicInput 
                        labelText={'Email'} 
                        onChange={() => {}} 
                        required={ false }
                    />
                    <BasicInput 
                        labelText={'Name'} 
                        onChange={() => {}} 
                        required={ false }
                        inputDetails={{
                            type: "text"
                        }}
                    />
                    <button type="submit" className={styles.submitButton}>Send Message</button>
                </form>
            </div>
            <span>
                @2025 Javier Ayala Oropeza All Rights Reserved
            </span>
        </section>
    );
}).getReactComponent();

export default ContactSection;
