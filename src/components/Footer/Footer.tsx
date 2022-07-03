import { Link } from 'react-router-dom';
import HS from './Footer.module.css';
import footerLogo from '../../img/pngwing.com.png';
import github from '../../img/github.png';

const Footer = () => {
    return (
        <div className={HS.container}>
            <Link to='/' className={HS.footerLogo}>
                <img alt='' src={footerLogo} className={HS.footerLogoImg}></img>
            </Link>
            <div className={HS.developer}>Разработчик: Иван Дульчик</div>
            <a href="https://github.com/VanKertiss" className={HS.githubLink}><img src={github} alt="" /> github: VanKertiss</a>
        </div>
    )
};

export default Footer;