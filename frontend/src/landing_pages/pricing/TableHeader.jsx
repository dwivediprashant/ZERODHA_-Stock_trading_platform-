import { Link } from "react-router-dom";

function TableHeader() {
  return (
    <div className="container table-responsive my-5 ">
      <nav aria-label="...">
        <ul class="pagination pagination-lg">
          <li class="page-item ">
            <Link class="page-link" to="/pricing/equity">
              Equity
            </Link>
          </li>
          <li class="page-item">
            <Link class="page-link" to="/pricing/currency">
              Currency
            </Link>
          </li>
          <li class="page-item">
            <Link class="page-link" to="/pricing/commodity">
              Commodity
            </Link>
          </li>
        </ul>
      </nav>
      <hr />
    </div>
  );
}

export default TableHeader;
