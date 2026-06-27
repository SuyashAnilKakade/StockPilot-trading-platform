import React from "react";

function Signup() {
  return (
    <>
      <div className="row">
        <div className="row">
          <h2 className="text-center mt-5">
            Open a free demat and trading account online
          </h2>

          <h4 className="text-center text-muted pt-4 mb-5">
            Start investing brokerage free and join a community of 1.6+ crore
            investors and traders
          </h4>
        </div>

        <div className="col-6">
          <img
            src="/media/account_open.svg"
            style={{ width: "80%" }}
            className="m-5"
          />
        </div>

        <div className="col-6">
          <h3 className="mt-5">Signup now</h3>
          <h5 className="text-muted pt-3 mb-5">
            Or track your existing application
          </h5>

          <input
            style={{ width: "10%", height: "60px" }}
            placeholder="+91"
            className="text-center"
          ></input>

          <input
            placeholder="Enter your mobile number"
            style={{ width: "60%", height: "60px" }}
          ></input>
          <br />

          <button
            className="btn btn-primary fs-3 mb-5 mt-4"
            style={{ width: "30%" }}
          >
            Get OTP
          </button>
        </div>

        <div className="row">
          <h2 className="text-center mt-4 mb-5">
            Investment options with Zerodha demat account
          </h2>

          <div className="col-6">
            <div className="d-flex align-items-center mb-4">
              <img
                src="/media/stocks-acop.svg"
                className="img-fluid"
                style={{
                  width: "20%",
                  marginLeft: "155px",
                  paddingRight: "30px",
                  paddingTop:"50px"
                }}
                alt="Stocks"
              />
              <div>
                <h3 className="pt-5">Stocks</h3>
                <p>
                  Invest in all exchange-listed
                  <br />
                  securities
                </p>
              </div>
            </div>

            <div className="d-flex align-items-center">
              <img
                src="/media/ipo-acop.svg"
                className="img-fluid"
                style={{
                  width: "20%",
                  marginLeft: "155px",
                  paddingRight: "30px",
                }}
                alt="Stocks Again"
              />
              <div>
                <h3>IPO</h3>
                <p>
                  Apply to the latest IPOs instantly
                  <br />
                  via UPI
                </p>
              </div>
            </div>
          </div>

          <div className="col-6">
            <div className="d-flex align-items-center mb-4">
              <img
                src="/media/mf-acop.svg"
                className="img-fluid"
                style={{
                  width: "20%",
                  marginLeft: "155px",
                  paddingRight: "30px",
                  paddingTop:"50px"
                }}
                alt="Stocks"
              />
              <div>
                <h3 className="pt-5">Mutual funds</h3>
                <p>
                  Invest in commission-free direct
                  <br />
                  mutual funds
                </p>
              </div>
            </div>

            <div className="d-flex align-items-center">
              <img
                src="/media/fo-acop.svg"
                className="img-fluid"
                style={{
                  width: "20%",
                  marginLeft: "155px",
                  paddingRight: "30px",
                }}
                alt="Stocks Again"
              />
              <div>
                <h3>Futures & options</h3>
                <p>
                  Hedge and mitigate market risk
                  <br />
                  through simplified F&O trading
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-5 mb-5">
            <button className="btn btn-primary" style={{width:"20%"}}>Explore Investments</button>
          </div>

        </div>
      </div>
    </>
  );
}

export default Signup;
