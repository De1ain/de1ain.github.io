import React from 'react';
import Link from 'next/link';

import styles from './OpenSource.module.css';
import SectionFooter from './SectionFooter';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const OpenSource = () => {
    return (
        <section className={styles['open-source']} id="open-source">
            <header>
                <h1>My Open Source Contributions</h1>
                <p>My Open Source Contributions</p>
            </header>
            <div className={styles.list}>
                <div className={styles.list__item}>
                    <h3>
                        <Link href="https://github.com/mattermost/focalboard">
                            <a className={styles.list__link} target="_blank">
                                mattermost / focalboard
                                <span className={styles.link__icon}>
                                    <FontAwesomeIcon icon={faGithub} />
                                </span>
                            </a>
                        </Link>
                    </h3>
                    <p>
                        Focalboard is an open source, self-hosted project management tool that&apos;s an alternative to Trello, Notion, and Asana.
                    </p>
                    <Link href="https://github.com/mattermost/focalboard/pull/1590">
                        <a className={styles.list__link} target="_blank">
                            My contribution
                        </a>
                    </Link>
                </div>
                <div className={styles.list__item}>
                    <h3>
                        <Link href="https://github.com/Project-Reclass/toynet-react">
                            <a className={styles.list__link} target="_blank">
                                Project-Reclass / toynet-react
                                <span className={styles.link__icon}>
                                    <FontAwesomeIcon icon={faGithub} />
                                </span>
                            </a>
                        </Link>
                    </h3>
                    <p>
                        Project Reclass is a multi-disciplinary nonprofit organization that teaches technical skills to incarcerated veterans.
                    </p>
                    <Link href="https://github.com/Project-Reclass/toynet-react/pull/295">
                        <a className={styles.list__link} target="_blank">
                            My contributions
                        </a>
                    </Link>
                </div>
            </div>
            <SectionFooter />
        </section>
    )
};

export default OpenSource;