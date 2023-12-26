import logo from '../../assets/img/logo.png';
import css from './Header.module.css';
const Header = () => {
    return (
        <header className={css.header}>
            <div className={css.header__box}>
                <div className={css.header__boxContent}>
                    <div className={css.header__logoSection}>
                        <img src={logo} alt="logo" />
                    </div>
                    <div className={css.header__menuSection}>
                        <ul className={css.menu__list}>
                            <li>
                                <a href="/calculator" className={css.menu__listLink}>Calculator</a>
                            </li>
                            <li>
                                <a href="/" className={css.menu__listLink}>Home</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
