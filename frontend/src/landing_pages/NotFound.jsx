import { Link } from "react-router-dom";
function NotFound() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-dark text-center">
      <h1 className="display-1 fw-bold text-danger">404</h1>
      <h2 className="mb-3 text-light">Page Not Found</h2>
      <p className="mb-4 text-light">
        Oops! The page you are looking for doesn’t exist or has been moved.
      </p>
      <Link to="/" className="btn btn-primary btn-lg">
        Go Back Home
      </Link>
    </div>
  );
}

export default NotFound;
