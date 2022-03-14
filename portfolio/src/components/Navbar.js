import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { IconContext } from "react-icons"
import './Navbar.css';
import { FaBars, FaTimes} from "react-icons/fa"


function NavBar() {
    const [click, setClick] = useState(false);
 
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const [open, setOpen] = useState(false);
       
   
   
 return (
  <>

   <IconContext.Provider value={{ color: "#141414"}}>
         <nav class="main-nav white stick-fixed js-transparent transparent">
   <nav className="navbar">
    <div className="navbar-container">
   <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
       Scott Hutson
        </Link>
     <div className='menu-icon' onClick={handleClick}>
      {click ? <FaTimes /> : <FaBars />}
     </div>  
     <ul className={click ? 'nav-menu active' : 'nav-menu'}>
     <li className='nav-item'>
            </li>
         <li className='nav-item'>
             <Link to="/about" className='nav-links' onClick={closeMobileMenu}>
                 About
             </Link>
            </li>
            <li className='nav-item'>
             <Link to="/projects" className='nav-links' onClick={closeMobileMenu}>
                 Projects
             </Link>
             </li>  
             <li className='nav-item'>
             <Link to="/resume" className='nav-links' onClick={closeMobileMenu}>
                 Resume
             </Link>
             </li>
            <li className='nav-item'>
         </li>
     </ul>
    </div>
  </nav>
  </nav>
  </IconContext.Provider>
  </>
    );
    
}

export default NavBar;