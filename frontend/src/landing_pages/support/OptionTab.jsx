import Option from "./Option";
function OptionTab() {
  return (
    <div className=" row  ">
      <div className=" p-3 my-5 col-8 ">
        <Option
          title="Account Opening"
          content={[
            "Resident individual",
            "Minor",
            "Non Resident Indian (NRI)",
            "Company, Partnership, HUF and LLP",
            "Glossary",
          ]}
          id="AccountOpening"
        />
        <Option
          title="Your Zerodha Account"
          content={[
            "Your profile",
            "Account modification",
            "Client Master Report (CMR) and Depository Participant (DP)",
            "Nomination",
            "Transfer and conversion of securities",
          ]}
          id="ZerodhaAccount"
        />
        <Option
          title="Kite"
          content={[
            "IPO",
            "Trading FAQs",
            "Margin Trading Facility (MTF) and Margins",
            "Charts and orders",
            "Alerts and Nudges",
            "General",
          ]}
          id="kite"
        />

        <Option
          title="Funds"
          content={[
            "Add money",
            "Withdraw money",
            "Add bank accounts",
            "Charts and orders",

            "eMandates",
          ]}
          id="fund"
        />

        <Option
          title="Coin"
          content={[
            "Mutual funds",
            " National Pension Scheme (NPS)",
            "Fixed Deposit (FD)",
            "Features on Coin",
            "Payments and Orders",
            "General",
          ]}
          id="coin"
        />
        <Option
          title="Console"
          content={[
            "Portfolio",
            "Corporate actions",
            "Funds statement",
            "Profile",
            "Reports",
            "segments",
          ]}
          id="console"
        />
      </div>
      <div className="col-4 my-5 p-3 ">
        <div
          className=" d-flex align-items-center col-7 border-start border-5 border-warning "
          style={{ height: "200px" }}
        >
          <ul>
            <li className="mb-3">
              <a href="">Surveillance measure on scrips - September 2025</a>
            </li>
            <li>
              <a href="">Offer for sale (OFS) – September 2025</a>
            </li>
          </ul>
        </div>
        <div className=" col-7 mt-5 border">
          <div className="bg-secondary p-2 opacity-75 text-white">
            Quick links
          </div>
          <ol className="text-primary ">
            <li className="p-2 ">Track account opening</li>
            <li className="p-2">Track segment activation</li>
            <li className="p-2">Intraday margins</li>
            <li className="p-2">Kite user manual</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default OptionTab;
