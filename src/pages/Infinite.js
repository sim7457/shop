import { useEffect, useState } from "react";
import styled from "styled-components";

const Dw = styled.div`
min-height: 300vh;
`

const Infinite = () => {
    const [inf, setInf] = useState([
        1, 2, 3
    ]);

    const Info = e => {
        let sct = window.scrollY;
        setInf([
            ...inf,
            4
        ])
    }

    useEffect(() => {
        window.addEventListener('scroll', Info)
    }, [inf])
    return (
        <Dw>
            {
                inf.map(it => <li>{it}</li>)
            }
        </Dw>
    )
}

export default Infinite;