import React from "react";

function Awards(){
    return(
      <div className="container" >

        <div className="row text-center">

            <div className="col-6 p-5">
                <img src="/media/largestBroker.svg" alt="largestBroker image" className="mt-5"/>
            </div>


            <div className="col-6 p-5 mt-5">
                <h1>Largest Stock Broker in India</h1>

                <p className="mb-5">2+ million clients contribute to over 15% of all retail order volumes in India daily by trading aand investing in:</p>

            <div className="row">

            <div className="col-6">
                <ul>
                    <li>
                        <p>Futures and Options</p>
                    </li>

                    <li>
                        <p>Commdity Derivatives</p>
                    </li>

                    <li>
                        <p>Currency Derivatives</p>
                    </li>
                </ul>
            </div>

            <div className="col-6">
                 <ul>
                    <li>
                        <p>Stocks and IPO's</p>
                    </li>

                    <li>
                        <p>Direct Mutual Funds</p>
                    </li>

                    <li>
                        <p>Bonds and Gov.</p>
                    </li>
                </ul>
            </div>

            <img src="/media/pressLogos.png" alt="pressLogo img" style={{width:"95%"}}/>
            </div>
        </div>
        </div>

      </div>
    );
};

export default Awards;