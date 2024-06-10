import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import '../assets/css/style.css';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <header className="header active" data-header>
      <div className="container">
        <Link to="/" className="logo">
          <img src="/assets/images/logo.png" width="110" height="53" alt="TikLive home" />
        </Link>
        <nav className="navbar" data-navbar>
          <ul className="navbar-list">
            <li className="navbar-item"><a href="#home" className="navbar-link" data-nav-link>home</a></li>
            <li className="navbar-item"><a href="#tournament" className="navbar-link" data-nav-link>tournament</a></li>
            <li className="navbar-item"><a href="#news" className="navbar-link" data-nav-link>news</a></li>
            <li className="navbar-item"><a href="#" className="navbar-link" data-nav-link>contact</a></li>
            {user ? (
              <li className="navbar-item">
                <button onClick={logout} className="navbar-link" data-nav-link>Logout</button>
              </li>
            ) : (
              <>
                <li className="navbar-item"><Link to="/login" className="navbar-link" data-nav-link>Login</Link></li>
                <li className="navbar-item"><Link to="/register" className="navbar-link" data-nav-link>Register</Link></li>
              </>
            )}
          </ul>
        </nav>
        <a href="#" className="btn" data-btn>Try TikLive Now!</a>
        <button className="nav-toggle-btn" aria-label="toggle menu" data-nav-toggler>
          <span className="line line-1"></span>
          <span className="line line-2"></span>
          <span className="line line-3"></span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
