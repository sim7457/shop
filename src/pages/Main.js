import { Link, Outlet, Route, Routes } from "react-router-dom";
import MainList from "./MainList";

import MainVisual from "./MainVisual";

const Main = ({ shopData, sw }) => {
    const TabData = ['liquid', 'pencil', 'lipstick']

    return (
        <main>
            <MainVisual />
            <div className="mainTab">
                <h2>Lorem ipsum dolor sit.</h2>
                <ul className="menu">
                    {
                        TabData.map((it, idx) => { //0,1,2
                            return <Link to={`/tab/${it}`} key={idx}>{it}</Link>
                        })
                    }
                </ul>
                <div className="con">
                    <Outlet />
                </div>
            </div>
            <MainList shopData={shopData} sw={sw} cate={'pencil'} />
            <MainList shopData={shopData} sw={sw} cate={'lipstick'} />
        </main>
    )
}

export default Main;