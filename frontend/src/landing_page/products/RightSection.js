import React from "react";

function RightSection({imageURL, productName, productDescription, learnMore}){
    return(
        
        <div className="container">

            <div className="row">

                <div className="col-6 mt-5 p-5">
                    <h1 className="mt-5 p-2">{productName}</h1>

                    <p>{productDescription}</p>

                    <a href={learnMore} style={{marginLeft:"50px"}}>learnMore </a>

                </div>


                <div className="col-6 mt-3 p-4">
                    <img src={imageURL} style={{width:"80%"}}/>
                </div>

            </div>

        </div>
    );
};

export default RightSection;