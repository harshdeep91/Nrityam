import React from "react";
import Marousel from './main_caraousel/mCarousel'
import Scarousal from "./small_caraousel/scarousal"

const home = () => {
  return <div>
       <Marousel/>
           <Scarousal name="Trending"/>
           <Scarousal name="Top"/>
           <Scarousal name="New"/>
  </div>;
};
export default home;