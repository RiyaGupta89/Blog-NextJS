import { useRouter } from "next/router"


function Blog() {
    
    const router = useRouter()
    
    return <h1>{router.query.blog}</h1>
}

export default Blog