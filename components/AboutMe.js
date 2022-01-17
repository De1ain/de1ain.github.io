import React from 'react';

import styles from './AboutMe.module.css';

const AboutMe = () => {
    return (
        <section className={styles['about-me']} id="about-me">
            <header>
                <h1>About me</h1>
            </header>
            <p>
                Hi! My name is Timur Borodin and I am a former QA Automation Engineer at IBM, strongly motivated to become a <strong>Web Developer</strong>.
                <br />
                I am looking for an opportunity to expand my knowledge and expertise. I believe that my skills can be valuable in various IT fields and projects.
                <br />
                Preferred stack - MERN - <strong>MongoDB</strong>, <strong>Express.js</strong>, <strong>ReactJS</strong>, <strong>NodeJS</strong>.
            </p>
        </section>
    );
};

export default AboutMe;