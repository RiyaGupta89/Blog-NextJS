import data from "../../public/data.json";
import Link from "next/link"

const seperateBlog = {
  display:"flex",
  height:"76vh",
  justifyContent: "center", 
  alignItems: "center",
  maxWidth: "800px",
  margin: "0 auto",
  lineHeight: "1.9",
  color: "#502bb8",
  flexDirection: "column"
}

export const getStaticPaths = () => {

  const paths = data.map(curr => {
    return{
      params: { id: curr.id.toString() }
    }
  })
  

return {
  paths,
  fallback: false
}
}

const data1 = {
  title: "Uh..oh. This page requires an API and we currently don't have one therefore this page is not yet made.",
  button: "Please go back to home page!!!!!"
}


export const getStaticProps = (context) => {
 
  return{
    props: { blog: data1 }
  }
}


import Layout from "../components/Layout";

function Blog({ blog }) {

  return (
    <Layout>
    <div style={seperateBlog}>
      <h2>{blog.title}</h2>
      <p>{blog.button}</p>
    </div>
    </Layout>
  );
}

export default Blog;
