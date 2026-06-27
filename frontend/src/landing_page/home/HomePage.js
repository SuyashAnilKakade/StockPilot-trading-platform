import React from "react";

import Awards from "./Awards";
import Education from "./Education";
import Hero from "./Hero";
import Stats from "./Stats";
import Pricing from "./Pricing";


import Account_Open from "../Account_Open.js";




function HomePage(){
    return(
        <div>
            <Hero/>
            <Awards/>
            <Stats/>
            <Pricing/>
            <Education/>
            <Account_Open/>
        </div>
    );
};

export default HomePage;