import './footer.css';
import logo from '../../assets/img/logo-white.png';

function Footer() {
  return (
    <footer className='footer'>
      <img src={logo} alt="kasa" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
