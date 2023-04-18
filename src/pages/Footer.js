import { Info } from '../data/Info';

const Footer = () => {
    return (
        <div>
            {Info.company}
            <address>{Info.address}</address>

        </div>
    )
}

export default Footer;