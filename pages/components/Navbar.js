import Link from "next/link"

function Navbar() {
    return (
        <div className="navbar">
            <div className="logo">
                <h2>Blog Website.</h2>
            </div>
            <div className="navigation">
                <Link href="/"><a>Home</a></Link>
                <Link href="/about"><a>About</a></Link>
                <Link href="/blogs"><a>Blogs</a></Link>
            </div>
        </div>
    )
}

export default Navbar;