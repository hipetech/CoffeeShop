import { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ForYourPleasure from "./pages/ForYourPleasure";
import OurCoffee from "./pages/OurCoffee";
import Navigation from "./components/Navigation/Navigation";



class App extends Component {
  render(){
    return(
      <>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route path="/" element={<MainPage />}/>
            <Route path="/ourCoffee" element={<OurCoffee />}/>
            <Route path="/forYourPleasure" element={<ForYourPleasure />}/>
          </Route>
        </Routes>
      </>
    )
  }

}

export default App