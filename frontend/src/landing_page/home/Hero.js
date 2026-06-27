import React from "react";

function Hero(){
    return(
         <div className="container p-5">

            <div className="row text-center">
              <img src="/media/homeHero.png" alt="Hero Image" className="mb-5"/>

              <h1 className="mt-3">Invest in everything</h1>

              <p>Online platform to invest in Stocks, Mutual Funds, Derivatives, Options, Intraday</p>

              <button className="p-2 btn btn-primary fs-3" style={{width:"22%",margin:"0 auto"}}>Sign Up</button>
            </div>

        </div>

    );
};

export default Hero;