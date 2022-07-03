import { Link } from 'react-router-dom';
import HS from './Navigation.module.css';

const Navigation = () => {
    return ( 
        <nav className={HS.container}>
            <Link className={HS.navItem} to='/main'> Game1</Link>
            <Link className={HS.navItem} to='/main'> Game2</Link>
            <Link className={HS.navItem} to='/main'> Game3</Link>
            <Link className={HS.navItem} to='/main'> Game4</Link>
            <Link className={HS.navItem} to='/main'> Game5</Link>
        </nav>
     )
};

export default Navigation;