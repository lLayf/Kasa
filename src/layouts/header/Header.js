import './header.css';
import logo from '../../assets/img/logo.png';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className='header'>
      <NavLink to="/">
        <img src={logo} alt="kasa" />
      </NavLink>
      <nav className='nav'>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/a-propos">A propos</NavLink>
      </nav>
    </header>
  );
}

export default Header;
