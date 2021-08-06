import Layout from "../components/Layout"
import styles from "../../styles/Blogs.module.css"
import data from "../../public/data.json";
import Link from "next/link"
import Image from "next/image"

function Blogs() {
  return (
    <Layout>
    <section className={styles.blogSection}>
      <h1>Welcome to our blogs 📚</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero voluptatum vitae reiciendis enim voluptates consequatur maiores nihil, dicta, cum temporibus, repudiandae culpa beatae. Dignissimos?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ducimus maxime repudiandae laboriosam, doloribus ea sunt blanditiis.</p>
      
      <div className={styles.blogContainer}>
      {data.map(curr => {
        return(
        <Link href="/blogs/1" key={curr.id} >
        <a className={styles.blog}>
        <Image src={curr.img} width={310} height={200} alt="blog-image"/>
        <div className={styles.blogText}>
          <span className={styles.category}>{curr.category}</span>
        <h3>{curr.title}</h3>
        <p className={styles.para}>by {curr.writer}</p>
        </div>
        </a>
        </Link>
        )
      })}
      </div>

      </section>
    </Layout>
  );
}

export default Blogs;
