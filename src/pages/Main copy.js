import { useState } from "react";
import MainList from "./MainList";
import MainSlideList from "./MainSlideList";
import MainVisual from "./MainVisual";

const Main = ({ shopData, sw }) => {
    const [num, setNum] = useState(0);
    const TabData = [
        { title: 'liquid', con: <MainSlideList shopData={shopData} sw={sw} cate={'liquid'} /> },
        { title: 'pencil', con: <MainSlideList shopData={shopData} sw={sw} cate={'pencil'} /> },
        { title: 'lipstick', con: <MainSlideList shopData={shopData} sw={sw} cate={'lipstick'} /> }
    ]
    return (
        <main>
            <MainVisual />
            <div className="mainTab">

                <ul className="menu">
                    {
                        TabData.map((it, idx) => { //0,1,2
                            return <li onClick={() => setNum(idx)}>{it.title}</li>
                        })
                    }
                </ul>
                <div className="con">
                    {
                        TabData[num].con
                    }
                </div>
            </div>
            <MainList shopData={shopData} sw={sw} cate={'pencil'} />
            <MainList shopData={shopData} sw={sw} cate={'lipstick'} />
        </main>
    )
}

export default Main;