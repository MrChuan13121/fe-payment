import Head from 'next/head';
import Link from 'next/link';
import styles from '../home/home.page.module.css';
export default function HomePage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Home Page of Introduce App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <span>Văn Chuẩn</span>
        </h1>
        <div className={styles.buttonContainer}>
          <Link id="link"  href="/pages/payment">Go to Payment Page</Link>
        </div>
      </main>
    </div>
  );
}