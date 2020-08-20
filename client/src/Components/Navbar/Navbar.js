import React, { useState } from 'react';
import './Navbar.css';
const Navbar = () => {
    let [isO, tog] = useState(false);
    const toggle = () => {
        tog(!isO);
    };
    return (
        <div>
            <header>
                <nav>
                    <p>ItemList</p>
                    <ul className="nav__links">
                        <li>
                            <a href="https://github.com/rootnarayan">Github</a>
                        </li>
                    </ul>
                </nav>
                <p className="menu cta" onClick={toggle}>
                    Menu
                </p>
            </header>
            <div className={isO ? 'overlay overlay--active' : 'overlay'}>
                <p className="close" onClick={toggle}>
                    &times;
                </p>
                <div className="overlay__content">
                    <a href="https://github.com/rootnarayan">Github</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
