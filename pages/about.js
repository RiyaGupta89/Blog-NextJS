import Layout from "./components/Layout";
import styles from "../styles/About.module.css";

function About() {
  return (
    <Layout>
    <section className={styles.aboutSection}>
      <h1>Welcome to the about page</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, optio debitis. Labore id consequatur illo amet voluptatem culpa accusantium in?</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo enim voluptate cupiditate obcaecati tempore, in molestiae!</p>
      </section>
    </Layout>
  );
}

export default About;
