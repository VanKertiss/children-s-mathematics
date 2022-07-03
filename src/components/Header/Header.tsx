import { Link } from 'react-router-dom';
import HS from './Header.module.css';
import imgLogo from '../../img/pngwing.com.png';
import userRound from '../../img/user-round.png';

const Header = () => {
    const userName = 'userName'
    const authorized = false;
    return (
        <div className={HS.container}>
            < Link to='/' className={HS.logo}>
                <img src={imgLogo} alt="" className={HS.imgLogo} />
                <div className={HS.textLogo}>Математика для деток</div>
            </Link>

            {!authorized
                ?
                <Link to='/authorized' className={HS.userInfo} >
                    <img className={HS.userImg} src={userRound} alt="" />
                    <div className={HS.userText}>Авторизоваться</div>
                </Link>
                :
                <Link to='/main' className={HS.userInfo} >
                    <img className={HS.userImg} src={userRound} alt="" />
                    <div className={HS.userText}>{userName}</div>
                </Link>}
        </div>
    )
};

export default Header;