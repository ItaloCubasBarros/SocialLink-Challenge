import React, { useState, useEffect } from 'react'

import styles from './Panel.module.css'

import Avatar from '../images/avatar-jessica.jpeg'

const Panel = () => {



    return (
        <div className={styles.Container}>
            <div className={styles.Panel}>
                <img className={styles.Avatar} src={Avatar} />
                <h3 className={styles.Name}>Jessica Randall</h3>
                <h4 className={styles.Region}>London, United Kingdom</h4>
                <p className={styles.Description}>
                    "Front-end developer and avid reader"
                </p>
                <div className={styles.Links}>
                    <a href="https://github.com/" target="_blank">GitHub</a>
                    <a href="https://frontendmentor.io/" target="_blank"
                    >Frontend Mentor</a>
                    <a href="https://linkedin.com/" target="_blank">LinkedIn</a>
                    <a href="https://twitter.com/" target="_blank">Twitter</a>
                    <a href="https://instagram.com/" target="_blank">Instagram</a>
                </div>
            </div>
        </div>
    )

}

export default Panel