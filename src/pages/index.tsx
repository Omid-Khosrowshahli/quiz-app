import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../../styles/Home.module.css';
import Button from '../components/Button/Button';
import MainLayout from '../layouts/MainLayout/MainLayout';
import { FcAdvance } from "react-icons/fc";

const Home: NextPage = () => {
  return (
    <MainLayout>
      <div className={styles.container}>
        <Head>
          <title>Quiz Land</title>
          <meta name="description" content="Generated by Omid" />
          <link rel="icon" href="" />
        </Head>
        <div className={styles.hero}>
          <div className={styles.heroDesc}>
            <h1>Taking a quiz has never been this easy!</h1>
            <p>
              Design and create online quizes using numerous tools provided by Quiz Land,
              then give access to your students to take them or just make them public for whomever wishes to take it.
            </p>
            <Button className={styles.letsGoBtn}>
              <span>let's go</span>
              <FcAdvance />
            </Button>
          </div>
          <Image 
            src="/images/home-image-1.jpg"
            layout='intrinsic'
            width={500}
            height={750}
            style={{borderRadius: 20}}
          />
        </div>
        <div className={styles.heroMobile}>
          <div className={styles.heroDesc}>
            <h1>Taking a quiz has never been this easy!</h1>
            <p>
              Design and create online quizes using numerous tools provided by Quiz Land,
              then give access to your students to take them or just make them public for whomever wishes to take it.
            </p>
            <Button className={styles.letsGoBtn}>
              <span>let's go</span>
              <FcAdvance />
            </Button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;
