import Layout from "./components/Layout";
import Link from "next/link"
import styles from "../styles/404.module.css"
import {useEffect} from "react";
import {useRouter} from "next/router"
import Image from "next/image"



function NotFound() {
    
    const router = useRouter();

    useEffect(() => {
        setTimeout(router.push("/"), 6000)
    },[])

    return (
        <Layout>
        <section className={styles.notFoundSection}>
        <Image src="https://images.unsplash.com/photo-1623018035782-b269248df916?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80" className={styles.image} alt="notfound" />
        <h1>Not found!</h1>
        <p>Oops. Seems like this page does not exist :( </p>
       <span> Go back to the <Link href="/"><a className={styles.redirecting}>home page</a></Link> </span>
       </section>
        </Layout>
    )
}

export default NotFound