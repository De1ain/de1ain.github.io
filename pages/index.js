import { Fragment } from 'react';

import styles from '../styles/Home.module.css';
import AboutMe from '../components/AboutMe';
import MyProjects from '../components/MyProjects';
import OpenSource from '../components/OpenSource';
import ContactForm from '../components/ContactForm';

const Home = () => {
  return (
    <Fragment>
      <AboutMe />
      <MyProjects />
      <OpenSource />
      <ContactForm />
    </Fragment>
  )
}

export default Home;