import AboutComponent from "../components/AboutComponent";
import Head from 'next/head'
import styles from "../styles/AboutComponent.module.css";
import PetMenuComponent from '../components/PetMenuComponent';

export default function About() {
  return (
    <>
      <Head>
        <title>About Russ</title>
        <meta name="description" content="Learn more about Russ, an experienced software engineering consultant and blockchain enthusiast." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PetMenuComponent />
      <div className={styles.animatedBackground}></div>
      <div className={styles.pageWrapper}>
        <AboutComponent />
      </div>
    </>
  );
};