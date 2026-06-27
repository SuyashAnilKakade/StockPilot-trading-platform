import React from "react";

function Brokerage(){
    return(
   <div className="container">

    <div className="row text-center mt-5 p-5 border-top"> 

        <div className="col-8 p-4">
            <a href="#" style={{textDecoration:"none"}}><h5 className="text-center">Brokerage Calculator</h5></a>

            <ul className="p-3">
                <li className="p-1">
                    Call & Trade RMS auto-squareoff:Additional charges of rs. 50 + GST per order.
                </li>

                 <li className="p-1">
                    Digital contract notes will be sent via email.
                </li>

                 <li className="p-1">
                    Physical copies of contract notes, if required shall be charged rs. 20 per contract note. Courier charges apply.
                </li>


                 <li className="p-1">
                    For NRI account 0.5% or rs. 100 per executed order for equity
                </li>
            </ul>
        </div>



        <div className="col-4 p-4">
            <a href="#" style={{textDecoration:"none"}}><h5 className="text-center">List of Charges</h5></a>
        </div>



        </div>
     </div>  
    );
};

export default Brokerage;