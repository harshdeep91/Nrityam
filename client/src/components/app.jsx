import React from "react";
import Navbar from "./navbar/Navbar";
import Marousel from './main_caraousel/mCarousel'
import Scarousal from "./small_caraousel/scarousal"
import Footer from "./footer/Footer";
 const App = () => {
    return (
        <div>
           <Navbar />
           <Marousel/>
           <Scarousal name="Trending"/>
           <Scarousal name="Top"/>
           <Scarousal name="New"/>
           <Footer/>
        </div>
    )
}
export default App;
