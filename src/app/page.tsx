import styles from "./pages/home/home.page.module.css";
import HomePage from "./pages/home/page";
export default function Home() {
  return (
    <main className={styles.main}>
      <HomePage></HomePage>
    </main>
  );
}
