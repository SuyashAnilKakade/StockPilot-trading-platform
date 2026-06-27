import React from "react";

function LeftSection({imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore}){

    return(
        <div className="container">

            <div className="row">

                <div className="col-6 mt-3 p-4">
                    <img src={imageURL} style={{width:"80%"}}/>
                </div>



                <div className="col-6 mt-3 p-4">
                    <h1>{productName}</h1>

                    <p>{productDescription}</p>

                    <div>
                    <a href="{tryDemo→}" style={{marginRight:"150px"}}>tryDemo→</a>
                    <a href="{learnMore→}">learnMore→</a><br/>
                    </div>
                    
                    <div className="mt-3">
                        <a href="{googlePlay}" style={{marginRight:"70px"}}><img src="/media/googlePlayBadge.svg" alt="google"/></a>
                    <a href="{appStore}"><img src="/media/appstoreBadge.svg"/></a><br/>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default LeftSection;