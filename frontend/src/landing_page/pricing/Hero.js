import React from "react";

function Hero(){
    return(
    
    <div className="container">


    <div className="container border-bottom mb-5 mt-5 text-center">

        <h1>
             Charges 
        </h1>

        <h4 className="pb-5 mb-5">
            List of all charges and taxes
        </h4>

    </div>



      <div className="row text-center mb-5 p-5 border-bottom">
        <div className="col-4 p-5">
            <img src="/media/pricingEquity.svg"/>

            <h4>Free equity delivery</h4>

            <h7 className="text-muted p-5">
                All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.
            </h7>
        </div>


        <div className="col-4 p-5">
            <img src="/media/intradayTrades.svg"/>

            <h4>Intraday and F&O trades</h4>

            <h7 className="text-muted">
                Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.
            </h7>
        </div>



        <div className="col-4 p-5">
            <img src="/media/pricingEquity.svg"/>

            <h4>Free direct MF</h4>

            <h7 className="text-muted">
                All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.
            </h7>
        </div>
      </div>

        
     </div>  
    );
};

export default Hero;