import { logo } from '../../assets';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaSquareXmark } from 'react-icons/fa6';
import './navbar.scss';
import { useState } from 'react';

const NavLinks = () => {
  return (
    <div className='fitness__navbar-links'>
      <a href='#home'>Home</a>
      <a href='#exercise'>Exercise</a>
    </div>
  );
};
const Navbar = () => {
  const [hamburger, setHamburger] = useState(false);
  return (
    <div className='fitness__navbar flex_both-space-between'>
      <img src={logo} alt='logo' />
      <div>
        {hamburger ? (
          <FaSquareXmark
            fontSize={27}
            onClick={() => setHamburger(!hamburger)}
          />
        ) : (
          <GiHamburgerMenu
            fontSize={27}
            onClick={() => setHamburger(!hamburger)}
          />
        )}

        {hamburger && <NavLinks />}
      </div>
      <NavLinks />
    </div>
  );
};

export default Navbar;
