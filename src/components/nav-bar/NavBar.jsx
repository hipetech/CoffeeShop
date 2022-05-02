import './NavBar.css'
import { Component } from 'react'

class Navbar extends Component {
    render(){
        return(
            <header>
                <nav class="header">
                    <a href="#" class="nav-item">
                        <img src="Images/coffee-beans-logo.svg" alt="" />
                        Coffee house
                    </a>
                    <a href="#" class="nav-item">Our Coffee</a>
                    <a href="#" class="nav-item">For your pleasure</a>
                </nav>
            </header>
            )
    }
}

export default Navbar