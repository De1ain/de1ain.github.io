import React from 'react';
import Link from 'next/link';

import styles from './AboutMe.module.css';

const AboutMe = () => {
    return (
        <section className={styles['about-me']} id="about-me">
            <header>
                <h1>About me</h1>
            </header>
            <div className={styles.brief}>
                <p>
                    Hi!
                    <br />
                    My name is Timur Borodin,
                    <br />
                    I am a former QA Automation Engineer at IBM, strongly motivated to become a <strong>Web Developer</strong>.
                    <br />
                    I am looking for an opportunity to expand my knowledge and expertise. I believe that my skills can be valuable in various IT fields and projects.
                    <br />
                    My stack - MERN - <strong>MongoDB</strong>, <strong>Express.js</strong>, <strong>ReactJS</strong>, <strong>NodeJS</strong>.
                </p>
                <p className={styles['about-me__p']}>
                    <Link href='#my-projects'>
                        <button className={styles['about-me__submit-btn']}>
                            My Projects
                        </button>
                    </Link>
                </p>
            </div>
        </section>
    );
};

export default AboutMe;