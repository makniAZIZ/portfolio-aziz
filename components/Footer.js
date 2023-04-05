const Footer = () => (
  <div className="mt-section bg-dark">
    <div className="container">
      <footer className="row align-items-center py-3 ">
        <small className="col-md-4 text-center mt-2 text-md-start text-white">
          © {new Date().getFullYear()} Tous droits réservés
        </small>
        <a
          className="col-md-4 text-center mt-2 navbar-brand fs-4 fw-bold text-white"
          href="#"
        >
          Aziz
        </a>
        <div className="col-md-4 mt-2 text-center text-md-end">
          <a
            className="text-light ms-3"
            target="_blank"
            href="https://www.linkedin.com/in/mohamed-aziz-makni-b70a49259/"
          >
            <i className="bi bi-linkedin fs-4"></i>
          </a>
          <a
            className="text-light ms-3"
            target="_blank"
            href="https://github.com/BrissouLaChankla"
          >
            <i className="bi bi-github fs-4"></i>
          </a>
          <a
            className="text-light ms-3"
            target="_blank"
            href="/CV_Brice-Eliasse.pdf"
          >
            <i className="bi bi-file-earmark-person-fill fs-4"></i>
          </a>
        </div>
      </footer>
    </div>
  </div>
);

export default Footer;
