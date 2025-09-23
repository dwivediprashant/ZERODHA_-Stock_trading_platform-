function Highlights() {
  return (
    <div className="container my-5  d-flex justify-content-center  flex-wrap">
      <div className="col-4">
        <h3>Trust with confidence</h3>
        <div className=" mt-5">
          <div className="mt-4">
            <h5>Customer-first always</h5>
            <p>
              That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh
              crores of equity investments, making us India’s largest broker;
              contributing to 15% of daily retail exchange volumes in India.
            </p>
          </div>
          <div className=" mt-4">
            <h5>No spam or gimmicks</h5>
            <p>
              No gimmicks, spam, "gamification", or annoying push notifications.
              High quality apps that you use at your pace, the way you like. Our
              philosophies.
            </p>
          </div>
          <div className=" mt-4">
            <h5>The Zerodha universe</h5>
            <p>
              Not just an app, but a whole ecosystem. Our investments in 30+
              fintech startups offer you tailored services specific to your
              needs.
            </p>
          </div>
          <div className=" mt-4">
            <h5>Do better with money</h5>
            <p>
              With initiatives like Nudge and Kill Switch, we don't just
              facilitate transactions, but actively help you do better with your
              money.
            </p>
          </div>
        </div>
      </div>
      <div className="col-6 ">
        <img
          src="/media/images/highlightsHome.png"
          alt="highlights"
          className="col-12"
        />
        <div className="d-flex justify-content-center  fw-semibold mt-4">
          <a href="%" className="text-decoration-none me-4">
            Explore our products <i class="fa-solid fa-arrow-right"></i>
          </a>
          <a href="%" className="text-decoration-none">
            Try Kite demo <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
      <div className="my-5">
        <img src="/media/images/press-logos.png" alt="" />
      </div>
    </div>
  );
}

export default Highlights;
