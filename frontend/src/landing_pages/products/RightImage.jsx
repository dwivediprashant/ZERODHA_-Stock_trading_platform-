function RightImage({ imgUrl, title, description }) {
  return (
    <div className=" container  col-10  d-flex justify-content-center my-5">
      <div className="col-5 d-flex  flex-column justify-content-center">
        <h4>{title}</h4>
        <p>{description}</p>
        <a href="#" className="text-decoration-none">
          Learn more <i class="fa-solid fa-arrow-right"></i>
        </a>
      </div>
      <div className="col-5">
        <img src={imgUrl} alt="img" />
      </div>
    </div>
  );
}

export default RightImage;
