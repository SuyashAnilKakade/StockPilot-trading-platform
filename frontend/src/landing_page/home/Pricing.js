import React from "react";

function Pricing(){
    return(
      <div className="container">

        <div className="row">

            <div className="col-4">
                <h1 className="mb-4">Unbeatable Pricing</h1>
                <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and n hidden charges.</p>

                <a href="#">See pricing<i class='bx bx-right-arrow-alt'></i></a>
            </div>


            <div className="col-2"></div>


            <div className="col-6">

                <div className="row text-center">

                    <div className="col p-4 border">
                        <h1><i class='bx bx-rupee'></i>0</h1>
                        <p>Free equity delivery and direct Mutual Funds</p>
                    </div>

                    
                     <div className="col p-4 border">
                        <h1><i class='bx bx-rupee'></i>20</h1>
                        <p>Intraday and F&O</p>
                     </div>

                </div>
            </div>

        </div>

      </div>
    );
};

export default Pricing;