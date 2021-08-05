import { useRouter } from "next/router";
import Layout from "../components/Layout";

function Blog() {
  const router = useRouter();

  return (
    <Layout>
      <h1>{router.query.blog}</h1>
    </Layout>
  );
}

export default Blog;
