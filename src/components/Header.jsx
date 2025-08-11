import { Link } from "react-router-dom";



function Header() {
  return (
    <>
      
      <nav className="navbar navbar-expand-lg shadow-sm" style={{ backgroundColor: '#ECEFF1' }}>
        <div className="container-fluid">
          {/* Logo with left margin */}
          <Link to={"/"} className="navbar-brand ms-5">
            <img src={require("../assest/images/logo6.jpg")} alt="Logo" className="img-fluid" style={{ width: "70px" }} />
          </Link>
          <button className="navbar-toggler border-0 bg-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse me-5" id="navbarNav">
            <form className="d-flex mx-auto">
              <div className="input-group">
                <span className="input-group-text bg-dark border-0 rounded-start-pill">
                <i className="fa-solid fa-magnifying-glass text-white"></i>
                </span>
                <input className="form-control rounded-end-pill border-0 shadow-sm" type="search" placeholder="Search..." aria-label="Search" />
              </div>
            </form>

            <ul className="navbar-nav ms-auto gap-2">
              <li className="nav-item">
                <Link to={"/"} className="nav-link active text-dark px-3 py-2 rounded-3 d-flex align-items-center gap-1 text-decoration-none fw-bold transition">
                   Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/about"} className="nav-link text-dark px-3 py-2 rounded-3 d-flex align-items-center gap-1 text-decoration-none fw-bold transition">
                   About
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/project"} className="nav-link text-dark px-3 py-2 rounded-3 d-flex align-items-center gap-1 text-decoration-none fw-bold transition">
                   Portfolio
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/services"} className="nav-link text-dark px-3 py-2 rounded-3 d-flex align-items-center gap-1 text-decoration-none fw-bold transition">
                   Services
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/contact"} className="nav-link text-dark px-3 py-2 rounded-3 d-flex align-items-center gap-1 text-decoration-none fw-bold transition">
                   Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
    </>
  )
};

export default Header;

