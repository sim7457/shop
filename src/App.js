import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Infinite from "./pages/Infinite";
import Main from "./pages/Main";
import MainSlideList from "./pages/MainSlideList";
import Cart from "./shop/Cart";
import CateList from "./shop/CateList";
import Itm from "./shop/Itm";
import List from "./shop/List";
import ListAll from "./shop/ListAll";
import SearchResult from "./shop/SearchResult";


const App = () => {

    const [shopData, setShopData] = useState([]);
    const [cart, setCart] = useState([]);

    const url = 'https://desipossa.github.io/shop_cra/assets/data.json'

    const getData = async () => {
        const r = await axios.get(url);
        setShopData(r.data);
    }

    useEffect(() => {
        getData();
    }, []);

    const [sw, setW] = useState([]);
    const getKr = async () => {
        const w = await axios.get('https://api.manana.kr/exchange/rate.json')
        setW(w.data[1].rate);
    }

    useEffect(() => {
        getKr()
    }, []);

    const originalItm = shopData.map(it => it.category);
    const filterItm = originalItm.filter(Boolean);
    const categoryItm = [...new Set(filterItm)];

    console.log(categoryItm)

    return (
        <Routes>
            <Route path="/" element={<Layout categoryItm={categoryItm} cart={cart} />}>
                <Route path="/" element={<Main shopData={shopData} sw={sw} />}>
                    <Route index element={<MainSlideList shopData={shopData} sw={sw} cate={'liquid'} />}></Route>
                    <Route path="tab/liquid" element={<MainSlideList shopData={shopData} sw={sw} cate={'liquid'} />}></Route>
                    <Route path="tab/pencil" element={<MainSlideList shopData={shopData} sw={sw} cate={'pencil'} />}></Route>
                    <Route path="tab/lipstick" element={<MainSlideList shopData={shopData} sw={sw} cate={'lipstick'} />}></Route>
                </Route>
                <Route path="all" element={<ListAll shopData={shopData} sw={sw} />} />
                <Route path=":cate" element={<CateList shopData={shopData} sw={sw} />} />
                <Route path="detail/:itm" element={<Itm shopData={shopData} cart={cart} setCart={setCart} />} />
                <Route path="search" element={<SearchResult shopData={shopData} />} />
                <Route path="cart" element={<Cart shopData={shopData} cart={cart} setCart={setCart} />} />
            </Route>
        </Routes>
    )
}

export default App;