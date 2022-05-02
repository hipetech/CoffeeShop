import { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import MainPage from "../../pages/MainPage";
import ForYourPleasure from "../../pages/ForYourPleasure";
import ItemPage from "../../pages/ItemPage";
import OurCoffee from "../../pages/OurCoffee";
import Navbar from "../nav-bar/NavBar";


class App extends Component {
  render(){
    return(
      <Navbar/>
      
    )
  }

}

export default App