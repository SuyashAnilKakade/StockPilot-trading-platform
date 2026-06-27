import React from "react";

function Stats(){
    return(
        <div className="container p-2">

            <div className="row mt-6 p-4">
                <div className="col-6 p-4">
                    <h1 className="fs-2 mb-5">Trust with Confidence</h1>

                    <h2 className="fs-3">Customer first always</h2>
                    <p className="text-muted">Thats why 1.3+ crores customers trust zerodha with <span><i class='bx bx-rupee'></i>3.5+</span> lakh crores of investment.</p>

                    
                    <h2 className="fs-3">No spam or gimmics</h2>
                    <p className="text-muted">No gimmics, spam, gamification or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>

                    
                    <h2 className="fs-3">The zerodha universe</h2>
                    <p className="text-muted">Not just an app, but whole ecosystem, our invstments in 30+ fintech startups offer yoy tailored srevices specific to your needs.</p>


                    
                    <h2>Do better with money</h2>
                    <p>With initiatives like nudge kill switch, we dont just facilitate transactions, but actively help you tailored services specific to your needs.</p>
                </div>


                <div className="col-6 p-4">
                    <img src="media/ecosystem.png" alt="ecosystem" width="90%"/>

                    <div className="anchors">
                        <a href="#" className="mx-5">Explore our products<i class='bx bx-right-arrow-alt'></i></a>
                        
                        <a href="#">Try Kite<i class='bx bx-right-arrow-alt'></i></a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Stats;