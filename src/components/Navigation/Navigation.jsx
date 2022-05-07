import './Navigation.css'
import { Component } from 'react'
import {NavLink, Outlet } from 'react-router-dom'

class Navigation extends Component {
    render(){
        return(
            <>
                <header>
                    <nav class="header">
                        <NavLink to="/" className="nav-item">
                            <img src="coffee-beans-logo.svg" alt="Logo" />
                            Coffee house
                        </NavLink>
                        <NavLink to="/ourCoffee" className="nav-item">Our Coffee</NavLink>
                        <NavLink to="/forYourPleasure" className="nav-item">For your pleasure</NavLink>
                    </nav>
                    <div class="menu">
                        <input type="checkbox" id='menuToggle' />
                        <label htmlFor="menuToggle" className='burgerLabel'>
                            <div class="burger">
                                <div class="elem first"></div>
                                <div class="elem second"></div>
                                <div class="elem third"></div>
                            </div>
                        </label>
                        <div className="menuItems">
                            <ul className='menuItemsList'>
                                <li className='menuItem'>
                                    <NavLink to="/" className="nav-item">
                                        <img src="coffee-beans-logo.svg" alt="Logo" />
                                        Coffee house
                                    </NavLink>
                                </li>
                                <li className='menuItem'>
                                    <NavLink to="/ourCoffee" className="nav-item">
                                        Our Coffee
                                    </NavLink>
                                </li>
                                <li className='menuItem'>
                                    <NavLink to="/forYourPleasure" className="nav-item">
                                        For your pleasure
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </header>
                <Outlet />
                <footer>
                    <nav class="footer">
                        <NavLink to="/" className="footer-nav">
                            <img src="coffee-beans-logo.svg" alt="Logo" />
                            Coffee house
                        </NavLink>
                        <NavLink to="/ourCoffee" className="footer-nav">Our Coffee</NavLink>
                        <NavLink to="/forYourPleasure" className="footer-nav">For your pleasure</NavLink>
                    </nav>
                    <img class="footer-logo" src="Beans-logo-dark.svg" alt="logo" />
                </footer>
            </>
        )
    }
}

export default Navigation