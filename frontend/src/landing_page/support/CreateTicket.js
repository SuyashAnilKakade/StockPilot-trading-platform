import React from "react";

function CreateTicket(){
    return(
    <div className="container border-bottom mb-5 mt-5">
      <div className="row pt-3 ml-5 text-muted">

        <h3 className="mb-3">
             To create a ticket, select a relevant topic
        </h3>



        <div className="col-4 pt-5">

        <h4 className="ml-5"><i class='bx bxs-plus-circle'></i> 
              Account Opening
        </h4>

        <p className="pt-3">
            <a href="#" style={{textDecoration:"none"}}>Resident individual</a><br/>
            <a href="#" style={{textDecoration:"none"}}>Minor</a><br/>
            <a href="#" style={{textDecoration:"none"}}>Non Resident Indian (NRI)</a><br/>
            <a href="#" style={{textDecoration:"none"}}>Company, Partnership, HUF and LLP</a><br/>
            <a href="#" style={{textDecoration:"none"}}>Glossary</a>
        </p>


        <h4 className="pt-5"><i class='bx bxs-envelope'></i>
             Funds
        </h4>

        <p>
            <a href="#" style={{textDecoration:"none"}}>Add money</a><br/>
            <a href="#" style={{textDecoration:"none"}}>Withdraw money</a><br/>
            <a href="#" style={{textDecoration:"none"}}>Add bank accounts</a><br/>
            <a href="#" style={{textDecoration:"none"}}>eMandates</a>
        </p>
      </div>



      <div className="col-4 pt-5">

        <h4 className="ml-5"><i class='bx bx-user'></i> 
             Your Zerodha Account
        </h4>

        <p className="pt-3">
            <a href="#" style={{textDecoration:"none"}}>Your Profile</a><br/>
            <a href="#" style={{textDecoration:"none"}}>Account modification</a><br/>
            <a href="#" style={{textDecoration:"none"}}>Client Master Report (CMR) and Depository Participant (DP)</a><br/>
            <a href="#" style={{textDecoration:"none"}}>Nomination</a><br/>
            <a href="#" style={{textDecoration:"none"}}>Transfer and conversion of securities</a>
        </p>


        <h4 className="pt-3"><i class='bx bx-caret-up-circle'></i>
             Console
        </h4>

        <p>
            <a href="#" style={{textDecoration:"none"}}>Portfolio</a><br/>
            <a href="#" style={{textDecoration:"none"}}>Corporate actions</a><br/>
            <a href="#" style={{textDecoration:"none"}}>Funds statement</a><br/>
            <a href="#" style={{textDecoration:"none"}}>Reports</a><br/>
            <a href="#" style={{textDecoration:"none"}}>Profile</a><br/>
            <a href="#" style={{textDecoration:"none"}}>Segments</a><br/>
        </p>
      </div>



      <div className="col-4 pt-5">

        <h4><i class='bx bx-bar-chart'></i>
              Kite
        </h4>

        
        <p className="pt-3">
            <a href="#" style={{textDecoration:"none"}}>IPO</a><br/>
            <a href="#" style={{textDecoration:"none"}}>Trading FAQs</a><br/>
            <a href="#" style={{textDecoration:"none"}}>Margin Trading Facility (MTF) and Margins</a><br/>
            <a href="#" style={{textDecoration:"none"}}>Charts and orders</a><br/>
            <a href="#" style={{textDecoration:"none"}}>Alerts and Nudges</a>
        </p>


         <h4 className="pt-5"><i class='bx bx-bolt-circle'></i>
              Coin
        </h4>

        <p>
            <a href="#" style={{textDecoration:"none"}}>Mutual funds</a><br/>
            <a href="#" style={{textDecoration:"none"}}>National Pension Scheme (NPS)</a><br/>
            <a href="#" style={{textDecoration:"none"}}>Features on Coin</a><br/>
            <a href="#" style={{textDecoration:"none"}}>Payments and Orders</a><br/>
            <a href="#" style={{textDecoration:"none"}}>General</a><br/>
        </p>
      </div>
      </div>
      
    </div>
    );
};

export default CreateTicket;