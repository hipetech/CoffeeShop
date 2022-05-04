import './Navigation.css'
import { Component } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

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