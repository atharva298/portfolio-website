import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";
 
export const Contact = () => {
    return (
        <footer id="contact" className={styles.container}>
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Feel Free to reach out!</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/emailIcon.png")} alt="email-icon" />
                    <a href="mailto:balleatharva@gmail.com">Email</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/linkedinIcon.png")} alt="linkedin-icon" />
                    <a href="https://www.linkedin.com/in/atharva-balle-421794223">LinkedIn</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/githubIcon.png")} alt="github-icon" />
                    <a href="https://github.com/atharva298">Github</a>
                </li>
            </ul>
        </footer>
    )
}