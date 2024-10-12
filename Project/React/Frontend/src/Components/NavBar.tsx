import {Link} from 'react-router-dom'
import './css_files/NavBar.css'
import img from './images/projectlogo.png'
const Navbar = () => {
  return (
    <header className='navbar'>
      <div className='logo'>
        <img src={img} alt='Logo' />    </div>
      <div className='options'>
        <Link className='a' to={'/about'}>About</Link>
        <Link className='a' to={'/home'}>Home</Link>
        <Link className='a' to={'/review'}>Reviews</Link>
        <Link className='a' to={'/profile'}>Profile</Link>
      </div>
    </header>
  );
}

export default Navbar;