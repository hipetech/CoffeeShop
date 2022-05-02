import './NavBar.css'
import { Component } from 'react'
import { Link } from 'react-router-dom'

class Navbar extends Component {
    render(){
        return(
            <header>
                <nav class="header">
                    <Link to="/" class="nav-item">
                        <img src="coffee-beans-logo.svg" alt="Logo" />
                        Coffee house
                    </Link>
                    <Link to="/ourCoffee" class="nav-item">Our Coffee</Link>
                    <Link to="/forYourPleasure" class="nav-item">For your pleasure</Link>
                </nav>
            </header>
            )
    }
}

export default Navbar