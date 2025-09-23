import Partner from "./Partner";

function PartnerTab() {
  return (
    <div className="d-flex flex-wrap  p-4 mt-5 col-10">
      <Partner
        src="media/images/zerodhafundhouse.png"
        description="Our asset management venture
that is creating simple and transparent index
funds to help you save for your goals.
"
      />
      <Partner
        src="../../../public/media/images/sensibull-logo.svg"
        description="Options trading platform that lets you
create strategies, analyze positions, and examine
data points like open interest, FII/DII, and more.
"
      />
      <Partner
        src="../../../public/media/images/tijori.svg"
        description="Investment research platform
that offers detailed insights on stocks,
sectors, supply chains, and more.
"
      />
      <Partner
        src="../../../public/media/images/streak-logo.png"
        description="Systematic trading platform
that allows you to create and backtest
strategies without coding.
"
      />
      <Partner
        src="../../../public/media/images/smallcase-logo.png"
        description="Thematic investing platform
that helps you invest in diversified
baskets of stocks on ETFs.
"
      />
      <Partner
        src="../../../public/media/images/ditto-logo.png"
        description="Personalized advice on life
and health insurance. No spam
and no mis-selling.
Sign up for free
"
      />
    </div>
  );
}

export default PartnerTab;
