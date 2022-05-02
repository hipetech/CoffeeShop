import { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import MainPage from "../../pages/MainPage";
import ForYourPleasure from "../../pages/ForYourPleasure";
import OurCoffee from "../../pages/OurCoffee";
import Navbar from "../nav-bar/NavBar";


class App extends Component {
  render(){
    return(
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />}/>
          <Route path="/ourCoffee" element={<OurCoffee />}/>
          <Route path="/forYourPleasure" element={<ForYourPleasure />}/>
        </Routes>
      </>
      
    )
  }

}

export default App