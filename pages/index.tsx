
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Personal Page</title>
        <meta name="description" content="Welcome to my personal page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Xin chào, tôi là <span className={styles.highlight}>Your Name</span>
        </h1>

        <p className={styles.description}>
          Web Developer & Designer
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>Về tôi &rarr;</h2>
            <p>Tôi là một lập trình viên với niềm đam mê công nghệ và sáng tạo.</p>
          </div>

          <div className={styles.card}>
            <h2>Kỹ năng &rarr;</h2>
            <p>React, Next.js, TypeScript, CSS, HTML</p>
          </div>

          <div className={styles.card}>
            <h2>Dự án &rarr;</h2>
            <p>Các dự án cá nhân và đóng góp của tôi.</p>
          </div>

          <div className={styles.card}>
            <h2>Liên hệ &rarr;</h2>
            <p>Email: your.email@example.com</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
