import Navbar from "./Navbar";
import Footer from "./Footer";
import { Fragment } from "react";

function Layout({children}) {
    return (
        <Fragment>
            <Navbar />
            <div>
                {children}
            </div>
            <Footer />
        </Fragment>
    )
}

export default Layout