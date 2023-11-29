
import {useState} from 'react'

const Header = () => {

    const [toggle, setToggle] = useState(false)

    const [click, seClick] = useState(false)

    return (
        <header>
            <div id="menu-container"> 
                <nav className="menu-container__nav-bar">
                    <div className="menu-container__nav-logo"></div>
                    <ul className={`menu-container__nav-menu ${toggle ? 'menu-container__nav-menu--active' : null} `} onClick={() => setToggle(!toggle)}>
                        <li className="menu-container__nav-item">
                            <a href="/" className="menu-container__nav-link">Accueil</a>
                        </li>
                        <li className="menu-container__nav-item">
                            <a href="/competences" className="menu-container__nav-link">Compétences</a>
                        </li>
                        <li className="menu-container__nav-item">
                            <a href="/apropos" className="menu-container__nav-link">A propos</a>
                        </li>
                        <li className="menu-container__nav-item">
                            <a href="/contact" className="menu-container__nav-link">Contact</a>
                        </li>
                    </ul>
                    <div className={`menu-container__menu-icon ${toggle ? 'menu-container__menu-icon--active' : null} `} onClick={() => setToggle(!toggle)}></div>
                </nav>
            </div>
        </header>
    );
};

export default Header;