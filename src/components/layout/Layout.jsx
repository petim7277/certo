import {Outlet} from "react-router-dom";
import NavbarSection from "../reuseables/navigation/NavBarSection";
const Layout = ()=>{
    return (
        <>
            <NavbarSection/>
            <Outlet/>
        </>
    )
}
export default Layout;