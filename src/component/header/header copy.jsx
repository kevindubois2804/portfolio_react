
import {useState} from 'react'

const Header = () => {

    const [toggle, setToggle] = useState(false)

    const hamburger = document.querySelector(".menu-container__menu-icon");
    const navMenu = document.querySelector(".menu-container__nav-menu");

    const closeMenuOnNavLinkClick = () => {
        hamburger.classList.remove("menu-container__menu-icon--active");
        navMenu.classList.remove("menu-container__nav-menu--active");
    }

    return (
        <header onClick={() => setToggle(!toggle)}>
            <div id="menu-container"> 
                <nav className="menu-container__nav-bar">
                    <div className="menu-container__nav-logo"></div>
                    <ul className={`menu-container__nav-menu ${toggle ? 'menu-container__nav-menu--active' : null} `}>
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
                    <div className={`menu-container__menu-icon ${toggle ? 'menu-container__menu-icon--active' : null} `}></div>
                </nav>
            </div>
        </header>
    );
};

export default Header;