function Hero() {
  return (
    <div className="container text-muted">
      <div className="d-flex justify-content-between my-5">
        <h1>Support Portal</h1>
        <button className="btn btn-primary fs-5 btn-lg">My tickets</button>
      </div>
      <div>
        <form class="d-flex" role="search">
          <input
            class="form-control me-2 p-3"
            type="search"
            placeholder="Eg: How do I open my account. How do i activate F&O..."
          />
          <button class="btn btn-primary" type="submit">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Hero;
