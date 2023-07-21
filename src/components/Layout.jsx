import { Outlet, NavLink } from "react-router-dom";
import '../assets/css/Layout.css';
import Logo from '../assets/images/logo01.png';
import Logo02 from '../assets/images/logo02.png';
import Instagram from '../assets/images/instagram.png';
import Facebook from '../assets/images/facebook.png';
import Linkedin from '../assets/images/linkedin.png';

export default function Layout() {
    // Display Nav Menu for Mobile 
    const toggleMenu = () => {
        const hiddenNavList = document.querySelector('.hidden-nav-list');

        if (hiddenNavList.style.display === 'none') {
            hiddenNavList.style.display = 'flex';
        } else {
            hiddenNavList.style.display = 'none';
        }
    };
    return (
        <div className="layout-container">
            <nav className="nav-container">
                {/* logo */}
                <img src={Logo} alt="Logo" className="nav-logo" />

                {/* Regular nav */}
                <ul className="nav-list">
                    <li className="nav-item">
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <div className="nav-divider" />
                    <li className="nav-item">
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <div className="nav-divider" />
                    <li className="nav-item">
                        <NavLink to="/projects">Projects</NavLink>
                    </li>
                    <div className="nav-divider" />
                    <li className="nav-item">
                        <NavLink to="/contact">Contact</NavLink>
                    </li>
                </ul>
                {/* Hamburger icon for mobile */}
                <div className="hamburger-icon" onClick={toggleMenu}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </nav>
            {/* Hidden nav list */}
            <ul className="hidden-nav-list">
                <li className="nav-item">
                    <NavLink to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/about">About</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/projects">Projects</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/contact">Contact</NavLink>
                </li>
            </ul>

            <div className="divider" />
            <div className="divider02" />

            <Outlet />
            {/* Footer */}
            <div className="divider04" />
            <div className="divider05" />
            <footer className="footer-container">
                <img src={Logo02} alt="Logo" className="footer-logo" />
                {/* Social Media */}
                <div className="footer-social">
                    <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                        <img src={Linkedin} alt="LinkedIn" className="footer-icon" />
                        Estefania Noriega Goncalves
                    </a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                        <img src={Instagram} alt="Instagram" className="footer-icon" />
                        estefagoncalvess
                    </a>
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                        <img src={Facebook} alt="Facebook" className="footer-icon02" />
                        Estefania Noriega
                    </a>
                </div>
                <p className="footer-contact">Email: estefa.noriega@hotmail.com</p>
                <p className="footer-text">© 2023 Estefania Noriega Goncalves. All rights reserved.</p>
            </footer>
        </div>
    );
}