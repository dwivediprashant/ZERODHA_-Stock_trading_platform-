function LeftImage({ imgUrl, title, description, googleUrl, appleUrl }) {
  return (
    <div className=" container  col-10  d-flex justify-content-center my-5">
      <div className="col-7">
        <img src={imgUrl} alt="img" />
      </div>
      <div className="col-5 d-flex  flex-column justify-content-center">
        <h4>{title}</h4>
        <p>{description}</p>
        <a href="#" className="text-decoration-none m-3">
          Learn more <i class="fa-solid fa-arrow-right"></i>
        </a>
        <div>
          <img src={googleUrl} alt="playstore" className="me-4" />
          <img src={appleUrl} alt="playstore" />
        </div>
      </div>
    </div>
  );
}

export default LeftImage;
