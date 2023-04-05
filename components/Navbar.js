import styles from "../styles/Navbar.module.scss";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom position-fixed w-100 z-3">
      <div className="container">
        <a className="navbar-brand" href="#">
          Aziz Makni
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <a className="nav-link ps-4" href="#about">
              A propos
            </a>
            <a className="nav-link ps-4" href="#skills">
              Compétences
            </a>
            <a className="nav-link ps-4" href="#experiences">
              Parcours
            </a>
            <a className="nav-link ps-4" href="#works">
              Projets
            </a>
            <a className="nav-link ps-4" href="#contact">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
