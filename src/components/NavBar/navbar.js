import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import  {Link} from 'react-scroll';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <img src={logo} alt='Logo' className='logo' />
      <div className="desktopMenu">
          <Link  activeClass='active' to='intro' spy={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
          <Link activeClass='active' to='skills' spy={true} offset={-100} duration={500} className="desktopMenuListItem">About</Link>
          <Link activeClass='active' to='works' spy={true} offset={-100} duration={500} className="desktopMenuListItem">Portfolio</Link>
          <Link activeClass='active' to='contact' spy={true} offset={-100} duration={500} className="desktopMenuListItem">Client </Link>
      </div>
      <button className="desktopMenuBtn">Contact Me</button>
    </nav>
  )
}

export default Navbar;