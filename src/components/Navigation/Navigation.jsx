import "./Navigation.css";
import React, {Component} from "react";
import {NavLink, Outlet} from "react-router-dom";

class Navigation extends Component {
    render() {
        return (
            <>
                <header>
                    <nav className="header">
                        <NavLink to="/" className="nav-item">
                            <img src={"coffee-beans-logo.svg"} alt="Logo"/>
                            Coffee house
                        </NavLink>
                        <NavLink to="/ourCoffee" className="nav-item">Our Coffee</NavLink>
                        <NavLink to="/forYourPleasure" className="nav-item">For your pleasure</NavLink>
                    </nav>
                    <div className="menu">
                        <input type="checkbox" id="menuToggle"/>
                        <label htmlFor="menuToggle" className="burgerLabel">
                            <div className="burger">
                                <div className="elem first"></div>
                                <div className="elem second"></div>
                                <div className="elem third"></div>
                            </div>
                        </label>
                        <div className="menuItems">
                            <ul className="menuItemsList">
                                <li className="menuItem">
                                    <NavLink to="/" className="nav-item">
                                        <img src={"coffee-beans-logo.svg"} alt="Logo"/>
                                        Coffee house
                                    </NavLink>
                                </li>
                                <li className="menuItem">
                                    <NavLink to="/ourCoffee" className="nav-item">
                                        Our Coffee
                                    </NavLink>
                                </li>
                                <li className="menuItem">
                                    <NavLink to="/forYourPleasure" className="nav-item">
                                        For your pleasure
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </header>
                <Outlet/>
                <footer>
                    <nav className="footer">
                        <NavLink to="/" className="footer-nav">
                            <img src={"coffee-beans-logo.svg"} alt="Logo"/>
                            Coffee house
                        </NavLink>
                        <NavLink to="/ourCoffee" className="footer-nav">Our Coffee</NavLink>
                        <NavLink to="/forYourPleasure" className="footer-nav">For your pleasure</NavLink>
                    </nav>
                    <img className="footer-logo" src={"Beans-logo-dark.svg"} alt="logo"/>
                </footer>
            </>
        );
    }
}

export default Navigation;