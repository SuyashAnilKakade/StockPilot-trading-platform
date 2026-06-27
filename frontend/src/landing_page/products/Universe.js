import React from "react";

function Universe() {
  return (
    <div className="container">
      <div className="row text center">
        <p className="text-center p-4 mb-5">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 mt-3 pr-3">
          <img
            src="/media/zerodhaFundhouse.png"
            style={{ width: "70%" }}
            className="mt-4"
          />
          <p className="text-muted mt-4 mb-5">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>

        <div className="col-4 mt-3 p-4">
          <img
            src="/media/smallcaseLogo.png"
            style={{ width: "70%" }}
            className="mt-1 mb-1"
          />
          <p className="text-muted mt-4 mb-5">
            Thematic investing platform that helps you invest in diversified
            baskets of tocks on ETFs.
          </p>
        </div>

        <div className="col-4 mt-3 p-4">
          <img
            src="/media/tijori.svg"
            style={{ width: "70%" }}
            className="mb-1"
          />
          <p className="text-muted mb-5 mt-0.5">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>

        <div className="col-4 mt-3 p-4">
          <img
            src="/media/streakLogo.png"
            style={{ width: "70%" }}
            className="mb-1"
          />
          <p className="text-muted mb-5 mt-2">
            Thematic investing platform that helps you invest in diversified
            baskets of tocks on ETFs.
          </p>
        </div>

        <div className="col-4 mt-3 p-4">
          <img
            src="/media/sensibullLogo.svg"
            style={{ width: "70%" }}
            className="mb-1"
          />
          <p className="text-muted mb-5 mt-4">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>

        <div className="col-4 mt-3 p-4">
          <img
            src="/media/dittoLogo.png"
            style={{ width: "50%" }}
            className="mb-1"
          />
          <p className="text-muted mb-5 mt-3">
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>

        <button
          className="p-2 btn btn-primary fs-3 mb-5"
          style={{ width: "20%", margin: "0 auto" }}>
          SignUp
        </button>
      </div>
    </div>
  );
}

export default Universe;
