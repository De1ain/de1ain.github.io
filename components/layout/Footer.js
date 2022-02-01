import React from 'react';

import styles from './Footer.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faGitlab } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <ul className={styles['social-list']}>
                <li className={styles['social-list__item']}>
                    <a
                        href="https://www.linkedin.com/in/timurborodin/"
                        className={styles['social-list__link']}
                        target="blank"
                    >
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </li>
                <li className={styles['social-list__item']}>
                    <a
                        href="https://github.com/De1ain"
                        className={styles['social-list__link']}
                        target="blank"
                    >
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </li>
                <li className={styles['social-list__item']}>
                    <a
                        href="https://gitlab.com/borodin.tim"
                        className={styles['social-list__link']}
                        target="blank"
                    >
                        <FontAwesomeIcon icon={faGitlab} />
                    </a>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;