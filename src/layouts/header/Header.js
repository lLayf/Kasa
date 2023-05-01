import './header.css';
import logo from '../../assets/img/logo.png';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className='header'>
      <img src={logo} alt="kasa" />
      <nav className='nav'>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/a-propos">A propos</NavLink>
      </nav>
    </header>
  );
}

export default Header;
