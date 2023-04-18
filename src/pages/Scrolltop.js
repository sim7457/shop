import { useEffect } from "react";
import { useLocation } from "react-router-dom";


const Scrolltop = () => {

    const { pathname } = useLocation();

    console.log(pathname, typeof (pathname))

    const scrTop = () => {
        window.scrollTo(0, 0)
    }

    useEffect(() => {

        if (pathname.includes('/tab')) {
            return
        }
        scrTop();


    }, [pathname]);



    return null;
}

export default Scrolltop;