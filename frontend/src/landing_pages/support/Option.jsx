function Option({ title, content, id }) {
  return (
    <div className="container p-2 ">
      <button
        class="btn btn-white dropdown-toggle p-3 border d-flex justify-content-between align-items-center fs-5 fw-semibold"
        data-bs-toggle="collapse"
        data-bs-target={`#${id}`}
        aria-expanded="false"
        aria-controls={id}
        style={{ width: "100%" }}
      >
        <i class="fa-solid fa-plus "></i>
        {title}
      </button>

      <div class="collapse mt-2" id={id}>
        <div class="card card-body">
          <ul>
            {content.map((cont) => {
              return (
                <li>
                  <a href="#" className="text-decoration-none">
                    {cont}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Option;
