import React from 'react'
import { classy } from "@javierayala381/aurora-components"
import styles from './Card.module.css'

export const Card = classy.component`card-component`
    .from(() => {return (
        <div className={styles.card}>
            <div className={styles.media}>{media}</div>
            <div className={styles.content}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>
            </div>
        </div>
    )}).getReactComponent()