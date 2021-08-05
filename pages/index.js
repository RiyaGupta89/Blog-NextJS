import Layout from "./components/Layout";
import styles from "../styles/Home.module.css";
import Link from "next/link"

function Home() {
  return (
      <Layout>
      <header>
        <div className={styles.header}>
        <div className={styles.text}>
          <h1>Lorem, ipsum.</h1>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
          <Link href="/blogs/blog"><a className={styles.button}>Read Article</a></Link>
          </div>
        </div>
      </header>
      </Layout>
  );
}

export default Home;





