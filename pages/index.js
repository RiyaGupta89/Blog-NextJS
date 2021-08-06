import Layout from "./components/Layout";
import styles from "../styles/Home.module.css";
import Link from "next/link"
import fitness from "../public/fitness.json"
import Image from "next/image"

function Home() {
  return (
      <Layout>
      <header>
        <div className={styles.header}>
        <div className={styles.text}>
          <h1>{fitness[(Math.floor(Math.random()*7))].title}</h1>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
          <Link href="/blogs"><a className={styles.button}>All Blogs</a></Link>
          </div>
        </div>
      </header>

     
      <div className={styles.blogContainer}>
      {fitness.map(curr => {
        return(
          <div className={styles.blog} key={curr._id}>
        <Link href="/blogs/blog" >
        <a>
        <Image src={curr.img} width={310} height={200} alt="blog-image"/>
        <div className={styles.blogText}>
          <span className={styles.category}>{curr.category}</span>
        <h3>{curr.title}</h3>
        <p className={styles.para}>by {curr.writer}</p>
        </div>
        </a>
        </Link>
        </div>
        )
      })}
      </div>

      </Layout>
  );
}

export default Home;





