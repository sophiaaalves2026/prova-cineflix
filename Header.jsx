import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <Link to="/" className="logo">🎬 CINEFLIX</Link>
      <nav>
        <ul className="nav-links">
          <li><NavLink to="/" className={({isActive}) => isActive ? "ativo" : ""}>Início</NavLink></li>
          <li><NavLink to="/catalogo" className={({isActive}) => isActive ? "ativo" : ""}>Filmes</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}