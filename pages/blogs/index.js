import Layout from "../components/Layout"
import styles from "../../styles/Blogs.module.css"

function Blogs() {
  return (
    <Layout>
    <section className={styles.blogSection}>
      <h1>Welcome to our blogs 📚</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero voluptatum vitae reiciendis enim voluptates consequatur maiores nihil, dicta, cum temporibus, repudiandae culpa beatae. Dignissimos?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ducimus maxime repudiandae laboriosam, doloribus ea sunt blanditiis.</p>
      </section>
    </Layout>
  );
}

export default Blogs;
