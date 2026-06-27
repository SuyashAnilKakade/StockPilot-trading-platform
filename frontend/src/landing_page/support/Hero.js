import React from "react";

function Hero(){
    return(
    <section className="container-fluid" id="supportHero">

         <div className="mb-2 mt-5 p-5" id="supportWrapper">
            <h4>
                Support Portal
            </h4>
            <a href="#" style={{color:"white"}}>Track tickets</a>

         </div>



         <div className="row mb-5 mt-2">
           

            <div className="col-6 mb-5 mt-3">
            <h3>
                Search for an answer or browse help topics to create a ticket
            </h3>

            <input className="mt-4" placeholder="Eg. How do I activate F&O, why is my order getting rejected..."/>
         
         <p className="pt-4">
            <a href="#" style={{color:"white"}}>Track account </a>
            <a href="#" style={{color:"white"}}>opening Track </a>
            <a href="#" style={{color:"white"}}>segment activation </a><br/>
            <a href="#" style={{color:"white"}}>Intraday margins</a>
            <a href="#" style={{color:"white"}}>Kite user manual</a>
         </p>   
        
         </div>



         <div className="col-6 mb-5 mt-3">
            <h4>
                Featured
            </h4>

            <p className="pt-3">
            1. <a href="#" style={{color:"white"}}>Exclusion of F&O contracts on 8 securities from August 29, 2025</a><br/><br/>
            2. <a href="#" style={{color:"white"}}>Revision in expiry day of Index and Stock derivatives contracts</a>
            </p>
         </div>
         </div>

    </section>

    );
};

export default Hero;