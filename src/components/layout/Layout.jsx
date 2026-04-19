import React from "react";
import {Outlet} from "react-router-dom";
import Navbar from "../reuseables/navigation/NavBarSection";
import Footer from "../reuseables/footer/FooterSection";
const Layout = ()=>{
    return (
        <>
            <Navbar/>
            <div style={{ paddingTop: "7rem" }}>
                <Outlet/>
            </div>
            <Footer/>
        </>
    )
}
export default Layout;