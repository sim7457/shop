import { useRef } from "react";
import { Link } from "react-router-dom";
import Slide from 'react-slick';
import "slick-carousel/slick/slick.css";

const MainSlideList = ({ shopData, sw, cate }) => {

    const list = shopData.filter(it => it.category === cate);
    const option = {
        slidesToShow: 6,
        slidesToScroll: 6,
        arrows: false,
        dots: true,
    }

    const slide = useRef(null);

    return (
        <div className="SlideList inner">
            <Slide className="list" {...option} ref={slide}>
                {
                    list.map(it => {
                        return (
                            <div key={it.id} className="itm">
                                <Link to={`/detail/${it.id}`}>
                                    <figure className="imgCase">
                                        <img src={it.api_featured_image} alt="" />
                                    </figure>
                                    <div className="itmTitle">
                                        {it.name}
                                    </div>
                                    <p className="itmDesc">
                                        {it.description?.substr(0, 100)} {it.description?.length > 100 ? '...' : ''}
                                    </p>
                                    <div className="itmPrice">
                                        <span>{parseInt(it.price * sw).toLocaleString()}</span> 원
                                    </div>
                                </Link>
                            </div>
                        )
                    })
                }
            </Slide>
            <button onClick={() => slide.current.slickPrev()} className="arrow prev">뒤로</button>
            <button onClick={() => slide.current.slickNext()} className="arrow next">앞으로</button>
        </div>
    )
}

export default MainSlideList;