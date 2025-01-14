import { classy, styled } from "@javierayala381/aurora-components"
import { getStyles, useStyles } from "@javierayala381/aurora-components/dist/Api/stateApi"
import React from "react"
import { ChangeEvent, useEffect } from "react"

// The input container
const container = styled.div`my-div ${{
    default: {
        init: { isRequired: false },
        rule: (props: { default: { isRequired: any } }) => ({
            position: "relative",
            display: "flex",
            flexDirection: "column",
            width: "100%",
            //marginLeft: "0.5rem", // Añadir margen izquierdo
            //marginRight: "0.5rem", // Añadir margen derecho
            
            "&:focus-within label": {
                color: "#0a53e4",
            },

            "& label": { //user name *
                transform: "translate(-9px, -8px) scale(0.9)", 
                backgroundColor: "white",
                paddingLeft: "5px",
                paddingRight: "5px",
                fontWeight: "bold",
                // here the original
                position: "absolute",
                pointerEvents: "none",
                transformOrigin: "top left",
                //transition: "200ms cubic-bezier(0, 0, 0.2, 1) 0ms",
                fontSize: "19px",
                lineHeight: 1,
                left: "16px",
                ":after": props.default.isRequired && ({
                    content: '"*"',
                    color: "inherit",
                    marginLeft: "5px" // Optional: to add some spacing between the label text and asterisk
                })
            },
            
            "& input": {
                width: "100%",
                height: "fit-content",
                borderRadius: "4px",
                border: "none",
                padding: "6px 12px 7px 12px",
                fontSize: "17px",
                lineHeight: 1,
                outline: "none",
                boxShadow: "none",
                transition: "200ms cubic-bezier(0, 0, 0.2, 1) 0ms",
            }
        })
    }
}}`
container.style.setAsDefault("default")

// The label
const label = styled.label`input-label ${{
    filled: {
        color: "#2e2e2e",
    },
    default: {
        init: { translate: "0px" },
        rule: (props: { default: { translate: any } }) => ({
            transform: `translate(${props.default.translate}, 15px) scale(1)`,
        })
    }
}}`
label.style.setAsDefault("default")

// The container that hols the input and label
const inputContainer = styled.div`input-container ${{
    default: {
        display: "flex",
        alignItems: "center",
        width: "100%",
        height: "56px",
        border: "1px solid #ccc",
        borderRadius: "4px",
        //backgroundColor: "#f9f9f9",
        boxSizing: "border-box",
        paddingRight: "5px",
        paddingLeft: "5px",

        // Focus styles
        "&:focus-within": {
            // Apply styles when any child element has focus
            borderColor: "#333", // Adjust border color on focus
            boxShadow: "0 0 0 2px rgba(0, 123, 255, 0.5)", // Example focus effect
        }
    }
}}`
inputContainer.style.setAsDefault("default")

// Holds the inputs
const details = styled.div`input-info ${{
    default: {
        display: "flex",
        padding: "5px 15px 0px 15px",
        color: "#858585",
        fontSize: "16px",
        justifyContent: "flex-start"
    }
}}`
details.style.setAsDefault('default')

/*
const input = styled.input`form-input ${{
    default: {
        backgroundColor: "transparent"
    }
}}`
input.style.setAsDefault('default')
*/

// React Components
const InputContainer = inputContainer.getReactComponent()
const Details = details.getReactComponent()
//const Input = input.getReactComponent()

// The components prop interface
interface props {
    labelText: string,
    details?: string,
    inputDetails?: Record<string, any>,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void,
    required: boolean
}

// A State Full Component
export const BasicInput = classy.state.component<props>`basic-input`
    .setStates({input: ''}, {})
    .from(({
        react,
        labelText,
        details,
        inputDetails,
        onChange,
        required,
}) => {
    const { input } = react.state
    const {StyledComponent: Label, StyleSbj$: sub} = useStyles(label)
    const {StyledComponent: Container, StyleSbj$: contSub} = useStyles(container)

    useEffect(() => {
        contSub.next({ type: "default", payload: { isRequired: required }})
    }, [required])

    useEffect(() => {
        react.state.input !== "" ? sub.next({ type: "filled" }) : sub.next({ type: "default" })
    }, [input])

    return (
        <Container>
            <Label>{labelText}</Label>
            <InputContainer>
            <input
                style={{backgroundColor: "transparent"}}
                onChange={(e) => {
                    onChange(e)
                    react.dispatch("input", e.target.value)
                }}
                title='input'
                {...inputDetails}
            />
            </InputContainer>
            {details && <Details>{details}</Details>}
        </Container>
    )
}).getReactComponent()