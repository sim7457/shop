import { Link, Outlet, useLocation } from "react-router-dom";
import Footer from "./pages/Footer";
import Header from "./pages/Header";
import Nav from "./pages/Nav";
import RightBanner from "./pages/RightBanner";
import ToTop from "./pages/Totop";

const Layout = ({ shopData, categoryItm, cart }) => {
    return (
        <div className="Wrap">
            <Header cart={cart} categoryItm={categoryItm} />
            <Outlet />
            <Footer />
            <ToTop />
            <RightBanner />
        </div>
    )
}

export default Layout;