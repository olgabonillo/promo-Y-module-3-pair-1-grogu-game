import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="footer">
        <nav>
          <ul className="footer__list">
            <li className="footer__menu-item">
              <Link className="footer__menu-link" to="/">
                A jugar
              </Link>
            </li>
            <li className="footer__menu-item">
              <Link className="footer__menu-link" to="/instructions">
                ¿Cómo se juega?
              </Link>
            </li>
            <li className="footer__menu-item">
              <Link className="footer__menu-link" to="/options">
                Más opciones
              </Link>
            </li>
          </ul>
        </nav>
        <small className="footer__copy">© Adalab</small>
      </footer>
    </>
  );
}

export default Footer;
