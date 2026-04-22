import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">Zenith Bonsai</Link>
      <div className="nav-links">
        <NavLink to="/pages/philosophy">Filosofía</NavLink>
        <NavLink to="/pages/gallery">Galería</NavLink>
        <NavLink to="/pages/booking">Reservas</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;