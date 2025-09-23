import Hero from "./Hero";
import LeftImage from "./LeftImage";
import Partners from "./Partners";
import RightImage from "./RightImage";

function Productpage() {
  return (
    <>
      <Hero />
      <LeftImage
        imgUrl="/media/images/products-kite.png"
        title="Kite"
        description="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        googleUrl="/media/images/google-play-badge.svg"
        appleUrl="/media/images/appstore-badge.svg"
      />
      <RightImage
        imgUrl="/media/images/products-console.png"
        title="Console"
        description="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
      />
      <LeftImage
        imgUrl="/media/images/products-coin.png"
        title="Coin"
        description="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        googleUrl="/media/images/google-play-badge.svg"
        appleUrl="/media/images/appstore-badge.svg"
      />
      <RightImage
        imgUrl="/media/images/landing.svg"
        title="Kite Connect API"
        description="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
      />
      <LeftImage
        imgUrl="/media/images/varsity-products.png"
        title="Varsity mobile"
        description="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        googleUrl="/media/images/google-play-badge.svg"
        appleUrl="/media/images/appstore-badge.svg"
      />

      <Partners />
    </>
  );
}

export default Productpage;
